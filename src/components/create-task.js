import React, {Component} from 'react';
import '../Input.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import _ from 'lodash';

const buttonStyle = {
    marginLeft: '58px'
}
class CreateTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null
        }
    }

    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)} className="createTask">
                <TextField name="create" floatingLabelText="Enter task here" ref="createInput"/>
                <RaisedButton style={buttonStyle} label="Create" onClick={this.handleCreate.bind(this)}/>
                <div style={{color: 'red'}}>{this.state.error}</div>
            </form>
        );
    }

    validateInput(task) {
        if(!task) {
            return 'Please enter a task';
        }
        else if (_.find(this.props.todos, todo => todo.task === task)) {
            return 'Task already exist';
        }
        else {
            return null;
        }
    }

    handleCreate(event) {
        event.preventDefault();
        const task = this.refs.createInput.input.value;
        const validateInput = this.validateInput(task);
        if (validateInput) {
            this.setState({error: validateInput});
            return;
        }
        this.setState({error: null});
        this.props.createTask(task);
        this.refs.createInput.input.value = '';
    }

}

export default CreateTask;