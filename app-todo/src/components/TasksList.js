import React, {Component} from 'react'
import Task from './Task'
class TasksList extends React{
    state = {
        tasks: ['one', 'two','tree']
    }

    render(){
        return(
            <div>
                {this.state.tasks.map((taskName, index) => (
              <Task key={index} name={taskName}/>))
                }
            </div>
                );
    }



}
export default TasksList;