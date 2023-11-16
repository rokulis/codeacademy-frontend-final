import {useEffect, useRef, useState} from "react";
import "./TodoList.css";
import {useGeolocation} from "react-use";

export default function TodoList() {

    const geo = useGeolocation();
    const ref = useRef();

    // kaip saugoti state?
    //                                    taip yra blogai, nes kiekviena karta funkcija yra iskvieciama (nors rezultatas nenaudojamas)
    // const [todos, setTodos] = useState(createInitialTodos());
    //                                    taip yra blogai, nes funkcija iskvieciama tik viena karta
    const [todos, setTodos] = useState(() => createInitialTodos());
    const [inputValue, setInputValue] = useState();

    // jeigu deps yra tuščias, effect funkcija bus įvykdoma tik vieną kartą, kai komponentas susikurs.
    useEffect(() => {
        console.log("Šitas kodas yra įvykdomas vieną kartą: ", geo)
        // duok man duomenis is backendo. backende bus controleris, kuris mokes apdoroti musu prasyma
        // controleris paprasys duombazes ir paims duomenis
        // ir tuos duomenis atiduos cia ir patalpinsime i komponento busena, pavyzdziui "todos"

        return () => {
            console.log("1: šitas kodas bus vykdomas, kai komponentas nebebus atvaizduojamas, t.y. jis bus sudestroyinamas");
        }
    }, []);

    useEffect(() => {
        console.log("šitas kodas bus įvykdomas bet kada, kada pasikeis todos ARBA inputValue state: ", todos, inputValue);
        return () => {
            console.log("3: vykdomas pries pagrindine useEffect funkcija, ir pries destroyinima: ", inputValue)
        };
    }, [todos, inputValue])

    useEffect(() => {
        // send to server;
    }, [geo]);

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
            <h2>Užduočių lentelė</h2>

            {(!todos || todos.length < 1) && <div style={{fontWeight: 700, color: "rebeccapurple"}}>
                Šiuo metu užduočių nėra, prašome įterpti
            </div>}

            {todos && todos.map((todo, index) => (
                <div key={index}>
                    {todo}
                    <button onClick={() => handleDelete(todo)}>Ištrinti</button>
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
