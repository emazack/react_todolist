import React, {Component} from 'react'
import InsertInput from './InsertInput'
import InsertButton from './InsertButton'


class ToDoManager extends Component {
    render() {
      return (
        <div className="to-do-manager">
            <InsertInput />
            <InsertButton />
        </div>
      )
    }
}

export default ToDoManager

