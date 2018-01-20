import React, { Component } from 'react';
import Task from './components/Task'
import Grid from 'material-ui/Grid';
import TaskList from './components/TasksList'
import Provider from 'react-redux'
import tasksReducer from './components/state'
import {createStore, combineReducers} from 'redux'

class App extends Component {
  render() {

      const reducers = combineReducers({
          tasks: tasksReducer
      });
      const store = createStore(reducers);

    return (
        <Provider store={store}>
        <Grid container>
          <Grid item xs={12}>
            <TaskList/>
          </Grid>
        </Grid>
        </Provider>

    );
  }
}

export default App;
