import React, {Component} from 'react';
//import  buttonStyle from '../styles/materialize.min.css';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const buttonStyle = {
    marginRight: '5px',
    marginLeft: '5px'
}
class TodoListItem extends Component {

    constructor(props){
        super(props);

        this.state = {
            onEditMode: false
        }
    }
    
    renderTasks() {
        const {task, isCompleted} = this.props;
        const taskStyle = {
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer',
            width: '256px'
        }

        if(this.state.onEditMode) {
            return (
                <td>
                <form  onSubmit={this.onSaveClick.bind(this)}>
                    <TextField name="editInput" defaultValue={task} ref="editInput"/>
                </form>
                
                </td>
            );

        }

        return (
            <td 
            style={taskStyle}
            onClick = {this.props.toggleTask.bind(this, task)}
            >{task}
            
            </td>
        );
    }

    onSaveClick(event) {
        event.preventDefault();
        this.props.onSaveClick(this.props.task, this.refs.editInput.input.value);
        this.setState({onEditMode:false});
    }
    
    getTaskStatus(flag) {
        return flag === true ? 'green' : 'red';
    }

    render(){
        return (
            <tr>
                 {this.renderTasks()}
                 {this.actionButtons()}
            </tr>
        );
    }

    actionButtons() {
        
        if (this.state.onEditMode) {
            return (
                <td>
                    <RaisedButton style={buttonStyle} primary={true} label="Save" onClick={this.onSaveClick.bind(this)} />
                    <RaisedButton style={buttonStyle} primary={true} label="Cancel" onClick={this.onCancelClick.bind(this)} />
                </td>
            );
        }

        return (

            <td>
                <RaisedButton style={buttonStyle} primary={true} label="Edit" onClick={this.onEditClick.bind(this)} />
                <RaisedButton style={buttonStyle} secondary={true} label="Delete" onClick={this.props.deleteTask.bind(this, this.props.task)} />
            </td>   
      
        );
    }

    onCancelClick() {
        this.setState({onEditMode:false});
    }

    onEditClick() {
        this.setState({onEditMode:true});
    }
}

export default TodoListItem;