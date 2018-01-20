import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import Task from './Task'
import Button from 'material-ui/Button'

class TasksList extends React {
    state = {
        task: '',
        tasks: ['one', 'two', 'tree']
    }

    handleChange = (event) => {
        this.setState({task: event.target.value})
    }
    handleClick = event => {
        this.setState({tasks: this.state.tasks.concat(this.state.task)})
    }

    render() {
        return (
            <div>
                <div>
                    <TextField value={this.state.tast} onChange={this.handleChange}/>
                    <Button onClick={this.handleClick}>Add task</Button>
                </div>
                <div>
                    {this.state.tasks.map((taskName, index) => (
                        <Task key={index} name={taskName}/>))
                    }
                </div>
            </div>
        );
    }


}

export default TasksList;