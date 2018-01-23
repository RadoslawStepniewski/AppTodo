import React,  { Component } from 'react';
import Grid from 'material-ui/Grid';
import Todo from './components/todo.js';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';




const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 30,
    },
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class App extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Todo/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};



// const App = () => (
//     <Grid >
//     <Grid item xs={12}>
//
//     </Grid>
//   </Grid>
// );

// export default App;
export default withStyles(styles)(App);