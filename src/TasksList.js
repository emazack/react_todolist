import React, {Component} from 'react'
import Task from './Task'


class TasksList extends Component {
    render() {
        return (
        <div className="tasks-list">
            <Task />
        </div>
        )
    }
}

export default TasksList