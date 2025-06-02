import React,{useState} from 'react'
import './Todolist.css'; 

function Todolist(){
 const [tasks,setTasks]=useState([]);
 const [newtask,setNewtask]=useState("");
  


 const inputchange= (e)=>{
    setNewtask(e.target.value);
 };
 const addtask =() =>{
    if(newtask.trim() !==""){
        
       setTasks(t => [...t, newtask.trim()]);

      setNewtask("");}
    }
     
 const deletetask = (index) =>{
      const updated=tasks.filter((_,i)=> i!==index);
      setTasks(updated);
 };
 const movetask = (index) => {
     if(index>0){
        const updated=[...tasks];
       [updated[index], updated[index - 1]] = [updated[index - 1], updated[index]];

      setTasks(updated);    
    }
     
      
 };
 const movetaskdown=(index)=>{
     if(index<tasks.length -1){
        const updated=[...tasks];
       [updated[index], updated[index + 1]] = [updated[index + 1], updated[index]];
      setTasks(updated);    
    }

 };

 return (<>
 <div className='div1'>
    <h1>To-Do-List</h1>
    <div className='div2'>
    <input type="text" className="input" placeholder='Enter task..' value={newtask} onChange={inputchange}/>
    <button className='btn' onClick={addtask}>Add Task</button>
    <ol>
        {tasks.map((task,index)=>
            
            <li className='list' key={index}>
                <span className="text">{task}</span>
                <button className='delete' onClick={()=>deletetask(index)}>Delete</button>
                 <button className='up' onClick={()=>movetask(index)}>☝️</button>
                  <button className='down' onClick={()=>movetaskdown(index)}>👇</button>
            </li>)}
    </ol>
    </div>

 </div>
 </>);

}

export default Todolist;