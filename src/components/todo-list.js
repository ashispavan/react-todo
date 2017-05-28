import React, { Component } from 'react';
import _ from 'lodash';
import TodoListItem from './todo-list-item';

class TodoList extends Component {

    render(){
        return (
            <table className="todo-list">
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className="list-items">
                {this.renderItems()}
            </tbody>
            </table>
        );
    }

    renderItems(){
        return (
        _.map(this.props.todos, (todo, index) => <TodoListItem key={index} {...todo} toggleTask={this.props.toggleTask}
        onSaveClick={this.props.onSaveClick.bind(this)}
        deleteTask={this.props.deleteTask.bind(this)}
        />)
        );
    }

}

export default TodoList;