import React from "react";
import {CgClose, CgInfo} from 'react-icons/cg' 

import "./Task.css";

const Task = ({ task, handleTaskDeletion,  handleTaskClick }) => {
   return(
       <div
        className="task-container"
        style={task.completed ? { borderLeft: "6px solid rgb(218, 71, 96)" }: {}} 
       >
           <div className="task-title" onClick={() => handleTaskClick(task.id)}>
               {task.title}

           </div>
           <div className="buttons-container">
             <button 
             className="remove-task-button" 
             onClick ={()=> handleTaskDeletion(task.id)}
             >
                 <CgClose />
                 </button>
                 <button 
             className="see-task-datails-button">
                 <CgInfo />
                 </button>
           </div>
       </div>
   )
};
 
export default Task;
