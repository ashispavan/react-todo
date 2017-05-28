import React, {Component} from 'react';
import '../Input.css';

class CreateTask extends Component {

    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)} className="createTask">
                <input type="text" placeholder="Enter task" ref="createInput"/>
                <button>Create</button>
            </form>
        );
    }

    handleCreate(event) {
        event.preventDefault();
        this.props.createTask(this.refs.createInput.value);
        this.refs.createInput.value = '';
    }

}

export default CreateTask;