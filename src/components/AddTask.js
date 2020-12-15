import React from 'react'

export default class AddTask extends React.Component {

    state = {
        taskTitle: ''
    }
    onChangeTitle = (event) => this.setState({taskTitle: event.target.value})


    onAddTask=()=>{
        const {addTask}=this.props
        const {taskTitle}=this.state
        addTask(taskTitle);
        this.setState({taskTitle: ''})
    }

    render() {
        const {onChangeTitle,onAddTask} = this;
        const {taskTitle} = this.state;
        return (
           <div>
               <input
                   type="text"
                   value={taskTitle}
                   onChange={onChangeTitle}
                   placeholder={'task title'}
               />
               <button disabled={!taskTitle} onClick={onAddTask}>Submit</button>
           </div>
                )
    }

}
