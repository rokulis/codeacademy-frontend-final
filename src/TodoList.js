import {useEffect, useRef, useState} from "react";
import "./TodoList.css";
import {useGeolocation} from "react-use";
import axios from "axios";

export default function TodoList() {

    const geo = useGeolocation();
    const ref = useRef();

    // kaip saugoti state?
    //                                    taip yra blogai, nes kiekviena karta funkcija yra iskvieciama (nors rezultatas nenaudojamas)
    // const [todos, setTodos] = useState(createInitialTodos());
    //                                    taip yra blogai, nes funkcija iskvieciama tik viena karta
    const [todos, setTodos] = useState(() => createInitialTodos());
    const [products, setProducts] = useState([]);
    const [inputValue, setInputValue] = useState();

    useEffect(() => {
        setTimeout(() => {
            axios.get("http://localhost:8080/products")
                .then(response => {
                    setProducts(response.data);
                    console.log("sitas ivyks veliau")
                });
            console.log("sitas ivyks anksciau")
        }, 5000)

    }, []);

    function createInitialTodos() {
        console.log("kuriami initial todos");
        return [
            "Pirmą užduotis yra labai ilga ir labai ilgai trunkanti",
            "Antra užduotis",
            "Trečia užduotis",
            "Sutvarkyti kambarį"
        ]
    }

    const handleSubmit = () => {
        setTodos([...todos, inputValue]);
        setInputValue("");
    }

    const handleDelete = (nameToDelete) => {
        const filteredItems = todos.filter(todo => todo !== nameToDelete)
        setTodos([...filteredItems]);
    }

    return (
        <div style={{minWidth: "1024px"}}>
            <h2>Produktų lentelė</h2>

            {(!products || products.length < 1) && <div style={{fontWeight: 700, color: "rebeccapurple"}}>
                Šiuo metu produktų nėra, prašome įterpti
            </div>}

            {products && products.map((product, index) => (
                <div key={index}>
                    Produkto pavadinimas: <b>{product.name}</b> ({product.price} EUR), kiekis: <b>{product.quantity}</b>
                    {/*<button onClick={() => handleDelete(product)}>Ištrinti</button>*/}
                </div>
            ))}

            <div className={"form-container"}>
                <input value={inputValue}
                       onChange={(e) => setInputValue(e.target.value)}
                       className={"todo-input-field"}
                       type={"text"}
                       placeholder={"Įveskite kitą užduotį (kontroliuojamas "}/>

                <form>
                    <input className={"todo-input-field"}
                           ref={ref}
                           required={true}
                           placeholder={"Įveskite kitą užduotį (nekontroliuojama) "}/>

                    <button type={"submit"}/>
                </form>

                {/*         buvo anksciau: () => setTodos([...todos, inputValue])              */}
                <button onClick={handleSubmit}>Pridėti naują užduotį</button>
            </div>

            <pre>
                 {JSON.stringify(geo, null, 2)}
             </pre>
        </div>
    )
}
