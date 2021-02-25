import React, {Component} from 'react'

const Task = (textTask) => {    
    return (
        <div className="task"> {textTask.textTask} </div>      
    )
  }


class TasksList extends Component {
    render() {
        const textTask = "Devo fare qualcosa di bello"

        return (
        <div className="tasks-list">
            <Task textTask={textTask}/>
        </div>
        )
    }
}

export default TasksList