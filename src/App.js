import { useState , useEffect } from "react";
import "./App.css";
import { v4 as uuidv4 } from 'uuid';
import { List } from "./component/list";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

//get data from LS
const getLsData =() =>{
let list = localStorage.getItem('lists');
if(list){
  return JSON.parse(localStorage.getItem('lists')); //it is used to covert data into array format
}else{
  return [];
}
};

function App() {
  const [text,setText] = useState("");
  const [todolist,setTodolist] = useState(getLsData());
  const [editToggle,setEditToggle] = useState(true);
  const [newEditItem , setEditItem] = useState(null);

  const addItem = () =>{
    if (!setText){
      alert('Feild is Empty, Please fill Data and Try Again...!');
    }else if(setText && !editToggle){
    setTodolist(
      todolist.map((listItem) =>{
        if(listItem.id === newEditItem){
          return{ ...listItem , item:text }
        }
        return listItem;
      })
    )
    setEditToggle(true);
    setText('');
    setEditItem(null);
    }else{

    const newTodoItem = {
          id : uuidv4(),
          item :text,
          done: false,
    };
    setTodolist([...todolist , newTodoItem]); //here we spreading prev todolist and adding new todolist
  setText('');
  };

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
  };

const handleEdit =(itemId) =>{
let newEditItem = todolist.find((listItem) =>{
return listItem.id === itemId
});

setEditToggle(false);
setText(newEditItem.item);
setEditItem(itemId);
// console.log(newEditItem);
};

  //to set data in LS
  useEffect(() =>{
    localStorage.setItem('lists',JSON.stringify(todolist),[todolist]) //setItem is builtin here
  });

  const RemoveAll =() =>{
   setTodolist([]);
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className= "adder">
        < input type="text" placeholder="Add Items To Your List" 
        value={text} 
        onChange={(e)=>setText(e.target.value)} 
        />

        {editToggle ? (
           <span onClick= {addItem} >+</span> 
        ):(
         <span> < DriveFileRenameOutlineIcon onClick = { addItem } /> </span> )
          }
      </div>
     {todolist.length >0 &&  <List todolist={todolist} 
      handleToggle = {handleToggle} 
      handleDelete = {handleDelete}
      handleEdit  =  {handleEdit}
      /> }
      <center>  <button type="button" onClick = {RemoveAll}>Remove All</button></center>
       
    </div>
    
  );
}

export default App;