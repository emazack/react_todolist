import React, {Component} from 'react'

const InsertInput = () => {
  return (
    <input type="text" />
  )
}

const InsertButton = () => {
  return (
    <button>Inserisci Task</button>  
  )
}


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

