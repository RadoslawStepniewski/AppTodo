import React from 'react';
import Checkbox from 'material-ui/Checkbox';



class Task extends React.Component{

    state = {
        checked: false
    }

    handleChange1=(event) => {
        this.setState({
            checked: !this.state.checked
        })
    }

    render(){
        return(
            <div>
                <Checkbox
                checked={this.state.checked}
                onChange={this.handleChange1}

                />
                {this.props.name}
            </div>
        );
    }

}


export default Task;

