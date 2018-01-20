import React, { Component } from 'react';
import Task from './components/Task'
import Grid from 'material-ui/Grid';


class App extends Component {
  render() {
    return (
        <Grid container>
          <Grid item xs={12}>
            <Task/>
          </Grid>
          <Grid/>

    );
  }
}

export default App;
