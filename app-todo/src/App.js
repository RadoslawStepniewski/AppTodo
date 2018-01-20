import React, { Component } from 'react';
import Task from './components/Task'
import Grid from 'material-ui/Grid';
import TaskList from './components/TasksList'

class App extends Component {
  render() {
    return (
        <Grid container>
          <Grid item xs={12}>
            <TaskList/>
          </Grid>
        </Grid>

    );
  }
}

export default App;
