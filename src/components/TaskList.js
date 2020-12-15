import React from 'react'
import TasItem from "./TasItem";

const TaskList=({taskList,onCheck})=>{
    return(
        <ul>
            <div>
                {taskList.map(task =>
                    <TasItem onCheck={onCheck} key={task.id} task={task}/>
                )}
            </div>
        </ul>
    )
}

export default TaskList