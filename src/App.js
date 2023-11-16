import './App.css';
import Welcome from "./Welcome";
import TodoList from "./TodoList";
import {useState} from "react";

// export default function App() {
//   return (
//       <div>Hello world</div>
//   );
// }

const App = () => {
    const [showTodos, setShowTodos] = useState(false);
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", width: "100%"}}>
            <h1>Mūsų užduotys</h1>
            <Welcome name={"Rokai"} surname={"Pavardė1"}/>
            <Welcome name={"Lina"} surname={"Pavardė2"}/>
            <Welcome name={"Vladimirai"} surname={"Pavardė3"}/>
            <Welcome name={"Vyteni"} surname={"Pavardė4"}/>
            <Welcome name={"Laura"} surname={"Pavardė5"}/>

            <button onClick={() => setShowTodos(!showTodos)}>Toggle todo list</button>
            {showTodos && <TodoList/>}
        </div>
    );
}

export default App;