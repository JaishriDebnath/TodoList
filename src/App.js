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
  setText("");
  };


  // console.log("todolist:",todolist);
  // console.log('text:',text);

  const handleToggle = (itemId) =>{
  const newTodolist = todolist.map((listItem)=>{
    if(listItem.id === itemId){
      return{...listItem,done: !listItem.done};
    }
    return listItem;
  });
  setTodolist(newTodolist);
  
  };
  // console.log(todolist);
  const handleDelete =(itemId) =>{
    const newTodolist = todolist.filter((listItem) => listItem.id !== itemId);
    setTodolist(newTodolist);
  }
  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className= "adder">
        <input type="text" placeholder="Add Items To Your List" value={text} onChange={(e)=>setText(e.target.value)} />
        <span onClick={addItem}>+</span>
      </div>
     {todolist.length >0 &&  <List todolist={todolist} 
      handleToggle = {handleToggle} 
      handleDelete = {handleDelete}
      />}
    </div>
  );
}

export default App;