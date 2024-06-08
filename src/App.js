import {useState} from "react";
import "./App.css";
import { v4 as uuidv4 } from 'uuid';
import { List } from "./component/list";

function App() {
  const [text,setText] = useState("");
  const [todolist,setTodolist] = useState([]);
  const addItem = () =>{
    const newTodoItem = {
          id : uuidv4(),
          item :text,
          done: false,
    };
    setTodolist([...todolist , newTodoItem]); //here we spreading prev todolist and adding new todolist
  };
  // console.log("todolist:",todolist);
  // console.log('text:',text);
  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className= "adder">
        <input type="text" placeholder="Add Items To Your List" value={text} onChange={(e)=>setText(e.target.value)} />
        <span onClick={addItem}>+</span>
      </div>
      <List todolist={todolist} />
    </div>
  );
}

export default App;