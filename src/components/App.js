import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import TodoList from './todo-list';

  const todos = [
    {
      task: 'Learn React and Redux',
      isCompleted: false
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

  render(){
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} alt="" className="App-logo"/>
          <h2>React Todo App</h2>
        </div>
        <TodoList todos={this.state.todos} />
      </div>
    );

  }
}

export default App;
