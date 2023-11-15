import './App.css';
import Welcome from "./Welcome";
import TodoList from "./TodoList";

// export default function App() {
//   return (
//       <div>Hello world</div>
//   );
// }

const App = () => {
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", width: "100%"}}>
            <h1>Mūsų užduotys</h1>
            <p>Kol kas užduočių nėra</p>
            <Welcome name={"Rokai"} surname={"Pavardė1"}/>
            <Welcome name={"Lina"} surname={"Pavardė2"}/>
            <Welcome name={"Vladimirai"} surname={"Pavardė3"}/>
            <Welcome name={"Vyteni"} surname={"Pavardė4"}/>
            <Welcome name={"Laura"} surname={"Pavardė5"}/>

            <TodoList/>

            <TodoList/>
        </div>
    );
}

export default App;