import React, { useEffect, useState } from 'react'
import AddTask from '../AddTask'
import ListTask from './ListTaks'
import './Todo.css'
const Todo = () => {
 
    const [task,setTasks]=useState([]);
    useEffect(()=>
    {
      document.title=`You have ${task.length} task to complete`
    })
 



const addTask=(value)=>{
   const newTask=[...task,{id:Date.now(),title:value,status:false}]
   
   setTasks(newTask)
}



 const removeTask=(id)=>{
  const newTask=task.filter(obj=>obj.id !==id)
   setTasks(newTask)
 }

 

const taskCompleted = (value, id) => {
   
   const newTask = [...task];
   const updatedTasks = newTask.map((item) => {
     if (item.id === id) {
      item.status = value;
       
     }
     return item;
   });
  
   setTasks(updatedTasks);
 };




 
 
    return (
   <>
   
   <div className='todo-container'>
   <div className='header' style={{fontWeight:'bold',padding:'3px 2px'}}>TO-DO APP</div>
  
   <div className='add-task'>
    <AddTask addTask={addTask} />
   </div>
   <div className='tasks'>
   
   {task.map((task,index)=>(
   <ListTask task={task} removeTask={removeTask} taskCompleted={taskCompleted}  key={task.id}  />
   ))}
   
    
   </div>
   </div>
   </>
   
    
  )
}

export default Todo