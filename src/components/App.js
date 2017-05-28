import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import TodoList from './todo-list';
import CreateTask from './create-task';
import _ from 'lodash';

  const todos = [
    {
      task: 'Learn React and Redux',
      isCompleted: true
    },
    {
      task: 'Learn Webpack and ES6',
      isCompleted: false
    }
  ];


class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      todos: todos
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} alt="" className="App-logo"/>
          <h2>React Todo App</h2>
        </div>
        <CreateTask createTask={this.createTask.bind(this)}/>
        <TodoList todos={this.state.todos} 
        toggleTask={this.toggleTask.bind(this)}
        onSaveClick={this.onSaveClick.bind(this)}
        deleteTask={this.deleteTask.bind(this)}
        />
      </div>
    );

  }

  toggleTask(task) {
    var foundTodo = _.find(this.state.todos, todo => todo.task === task);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({todos: todos});
  }

  onSaveClick(editTaskString, newTask) {
    const oldTask = _.find(this.state.todos, todo => todo.task === editTaskString);
    oldTask.task = newTask;
    this.setState({todos: this.state.todos});
  }

  deleteTask(taskToDelete) {
    _.remove(this.state.todos, todo => todo.task === taskToDelete);
    this.setState({todos: this.state.todos});
  }

  createTask(task) {
    this.state.todos.push({
      task:task,
      isCompleted:false
    });
    this.setState(this.state.todos);
  }
}

export default App;
