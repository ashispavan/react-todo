import React, {Component} from 'react';


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
            cursor: 'pointer'
        }

        if(this.state.onEditMode) {
            return (
                <td>
                <form  onSubmit={this.onSaveClick.bind(this)}>
                    <input type="text" defaultValue={task} ref="editInput"/>
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
        this.props.onSaveClick(this.props.task, this.refs.editInput.value);
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
                    <button onClick={this.onSaveClick.bind(this)}>Save</button>
                    <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
                </td>
            );
        }

        return (
            <td>
                <button onClick={this.onEditClick.bind(this)}>Edit</button>
                <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
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