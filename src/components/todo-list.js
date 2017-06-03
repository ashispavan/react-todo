import React, { Component } from 'react';
import _ from 'lodash';
import TodoListItem from './todo-list-item';

class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todoEmpty: false
        }
    }
    
    render(){
        return (
            <table className="todo-list">
            <thead>
                {this.renderHeader()}
            </thead>
            <tbody className="list-items">
                {this.renderItems()}
            </tbody>
            </table>
        );
    }

    renderHeader() {
        //this.setState({todoEmpty:this.props.todos.length ? false : true});
        if (!this.state.todoEmpty) {
            return (
                <tr>
                    <th>Task</th>
                    <th>Action</th>
                </tr>
            );
        }

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