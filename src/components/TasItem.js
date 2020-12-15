import React from 'react'

const TaskItem = ({task,onCheck}) => {
    const onCheckclick =()=>{
        onCheck(task.id)
    }
    return(
        <li key={task.id}>
            <input onClick={onCheckclick} type="checkbox" checked={task.isCompleted}/>
            {task.title}
        </li>
    )
}
export default TaskItem