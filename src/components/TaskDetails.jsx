import React from 'react';
import { useParams } from 'react-router-dom';
import Button from './Button';  

const TaskDetails = () => {
    const params = useParams();
    console.log (params);
    return (  
        <>
        <div className= "back-button-container">
           <Button>Voltar</Button>
        </div>
        <div className ="task-datails-container">
            <h2>{params.taskTitle}</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Quam sunt nihil accusantium veritatis consequatur adipisci.
            </p>
        </div>
        </>
    );
}
 
export default TaskDetails;