import { useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import { ToDosContext } from "./Contexts/ToDosContext";
import { v4 as uuidv4 } from "uuid";

function App() {
    const initialTodos = [
      {
        id: uuidv4(),
        title: "First Task",
        details: "Details of the first task",
        isCompleted: false,
      },
      {
        id: uuidv4(),
        title: "Second Task",
        details: "Details of the second task",
        isCompleted: false,
      },
      {
        id: uuidv4(),
        title: "Third Task",
        details: "Details of the third task",
        isCompleted: false,
      },
      
    ];
  
    const [todos, setTodos] = useState(initialTodos);
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
   <ToDosContext.Provider value={{ todos, setTodos }}>
      <ToDoList />
      </ToDosContext.Provider>
    </div>
  );
}

export default App;
