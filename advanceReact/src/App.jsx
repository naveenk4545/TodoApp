import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import HeaderWithButton from "./components/HeaderWithButton";
import { useState } from "react";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "go to gym today",
      description: "go to gym ",
    },
    {
      id: 2,
      title: "go to eat today",
      description: "eat today",
    },
    {
      id: 3,
      title: "go to class today",
      description: "go to class",
    },
  ]);
  return <div>
    {todos.map(todo =><Todo title={todo.title} description={todo.description}/>)}
    {todos.map()}
  </div>;
}
function Todo({ title, descriptin }) {
  return (
    <div>
      <h1>{title}</h1>
      <h5>{descriptin}</h5>
    </div>
  );
}
export default App;
