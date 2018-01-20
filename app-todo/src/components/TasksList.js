import React from 'react'
import TextField from 'material-ui/TextField'
import Task from './Task'
import Button from 'material-ui/Button'

class TasksList extends React.Component {
    state = {
        query : '',
        task: '',
        tasks: ['one', 'two', 'tree']
    }

    handleChange = (event) => {
        this.setState({task: event.target.value})
    }

    handleSearchChange = (event) =>{
        this.setState({
            query:event.target.value
        })
    }
    handleClick = event => {
        this.setState({tasks: this.state.tasks.concat(this.state.task)})
    }

    handleRemove = (index) => {
        this.setState({
            tasks: this.state.tasks.filter((task, interationIndex) => index !== interationIndex)
        } );

    }

    render(){
        return (
            <div>
                <div>
                    <TextField value={this.state.tast} onChange={this.handleChange}/>
                    <Button onClick={this.handleClick}>Add task</Button>
                </div>
                <div>
                    <TextField onChange={this.handleSearchChange}/>
                </div>
                <div>
                    {this.state.tasks
                        .filter(task => task.indexOf(this.state.query) !== -1)
                        .map((taskName, index) => (
                        <Task key={index} name={taskName}
                              onDelete={() => this.handleRemove(index)}
                        />))
                    }
                </div>
            </div>
        );
    }


}

export default TasksList;