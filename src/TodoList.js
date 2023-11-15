import {useState} from "react";
import "./TodoList.css";

export default function TodoList() {

    // kaip saugoti state?
    const [todos, setTodos] = useState(["Pirmą užduotis yra labai ilga ir labai ilgai trunkanti", "Antra užduotis", "Trečia užduotis", "Sutvarkyti kambarį"]);

    const [inputValue, setInputValue] = useState();

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

            <div>Mūsų state inputValue dabar yra: {inputValue}</div>
            {todos.map(todo => <div>
                {todo}
                <button onClick={() => handleDelete(todo)}>Ištrinti</button>
            </div>)}

            <div style={{display: "flex", flexDirection: "column", gap: "16px", marginTop: "16px"}}>
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className={"todo-input-field"} type={"text"} placeholder={"Įveskite kitą užduotį"}/>
            {/*         buvo anksciau: () => setTodos([...todos, inputValue])              */}
                <button onClick={handleSubmit}>Pridėti naują užduotį</button>
            </div>
        </div>
    )
}
