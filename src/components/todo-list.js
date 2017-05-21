import React, { Component } from 'react';
import _ from 'lodash';

class TodoList extends Component {

    render(){
        console.log(this.props);
        return (
            <div className="todo-list">
            <ul className="list-items">
                {this.renderItems()}
            </ul>
            </div>
        );
    }

    renderItems(){
        return (
        _.map(this.props.todos, (todo, index) => <li key={index}>{todo.task}</li>)
        );
    }

}

export default TodoList;