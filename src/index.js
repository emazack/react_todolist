import React from 'react';
import ReactDOM from 'react-dom';
import ToDoManager from './ToDoManager'
import TasksList from './TasksList'
import './index.css';

ReactDOM.render(<ToDoManager />, document.getElementById('to-do-manager'))  
ReactDOM.render(<TasksList />, document.getElementById('tasks-list'))