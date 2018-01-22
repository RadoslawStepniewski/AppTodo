import React from 'react';
import Grid from 'material-ui/Grid';
import Todo from './components/todo.js';

const App = () => (
  <Grid container>
    <Grid item xs={12}>
      <Todo/>
    </Grid>
  </Grid>
);

export default App;