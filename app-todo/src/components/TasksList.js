import React from 'react'
import TextField from 'material-ui/TextField'
import Task from './Task'
import Button from 'material-ui/Button'
import { connect} from 'react-redux'
import { addTask, search} from './state'

const mapStateToProps = (state) => ({

    tasksList: state.tasks.tasks,
    query: state.tasks.query

});
const mapDispatchToProps = (dispatch)=>({

    addNewTask: (value) => dispatch(addTask(value)),
    searchTask: (value) => dispatch(search(value)),
    remove: (index) => dispatch(removeTask(index))

});
class TasksList extends React.Component {

    state = {
        task: '',

    };

    handleChange = (event) => {
        this.setState({task: event.target.value});
    };

    handleSearchChange = (event) =>{
     this.props.searchTask(event.target.value);
    };
    handleClick = event => {
       this.props.addNewTask(this.state.task)
    };

    handleRemove = (index) => {
        this.props.remove(index);

        } ;

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
                    {this.props.tasksList
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

export default connect(mapStateToProps, mapDispatchToProps)
(TasksList;)