import React from "react";
import logo from './logo.svg';
import './App.css';
import { useState } from "react";



function App() {
const [task,setTask]=useState([]);
const [newTask,setNewTask]=useState("");

const handleChange=(event)=>{
  const addTask=event.target.value;
  setNewTask(addTask);
};
const handleClick=()=>{
  const abtask={
    id:task.length===0? 1:task[task.length-1].id+1,
    taskName:newTask,
    complete:false
  }
  const newTodo=[...task,abtask];
  setTask(newTodo);
}
const deleteTask=(id)=>{
  setTask(task.filter((one)=> id!==one.id));  //task array se ek ek kar match karega
}
const completeTase=(id)=>{
  setTask(task.map((one)=>{
    if(one.id===id){
      return{...one,complete:true};
    }
    else{
      return one;
    }
  }
  ));

}
  return (
    <div className="App">
      <div className='addTask'>
      <input onChange={handleChange}/>
      <button onClick={handleClick}>Add task</button>
      </div>
      <div className="list">
        {task.map((task)=>{
         return <div>
          <h1 style={{background:task.complete===true?"green": "blue"}}>{task.taskName}</h1> 
          <button onClick={()=>deleteTask(task.id)}>X</button>
          <button onClick={()=>completeTase(task.id)}>complete</button>
          </div>}
        )}
      </div>
    </div>
  );
}

export default App;
