import React, {Component} from 'react';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import TaskList from './TasksList';
import {add, remove, search} from './state/state.js';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

const mapStateToProps = state => ({
    tasksList: state.tasks.tasks,
    query: state.tasks.query
});

const mapDispatchToProps = dispatch => ({
    addNewTask: task => dispatch(add(task)),
    searchTask: value => dispatch(search(value)),
    removeTask: task => dispatch(remove(task))
});

class Todo extends Component {

    state = {
        task: ''
    };

    handleChange = event => {
        this.setState({task: event.target.value});
    };

    handleSearchChange = event => {
        this.props.searchTask(event.target.value);
    };

    handleClick = event => {
        this.props.addNewTask(this.state.task);
        event.preventDefault();
    };

    handleRemove = task => {
        this.props.removeTask(task);
    };

    render() {
        return (
            <div>
                <Grid container spacing={24}>
                        <Grid item xs={12} sm={6}>
                            <form onSubmit={this.handleClick}>
                                <TextField
                                    id="task"
                                    label="Task"
                                    value={this.state.task}
                                    onChange={this.handleChange}
                                    margin="normal"
                                />
                                <Button type="submit" raised color="primary">Add</Button>
                            </form>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <div>
                                <TextField placeholder="Search" onChange={this.handleSearchChange}/>
                            </div>

                        </Grid>
                    <Grid item xs={12} sm={12}>
                        <h2>My tasks</h2>
                        <TaskList
                            tasks={this.props.tasksList}
                            query={this.props.query}
                            onDelete={this.handleRemove}
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }

}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo);