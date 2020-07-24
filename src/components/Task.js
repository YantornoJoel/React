import React, {Component} from 'react';
import propTypes from 'prop-types';


class Task extends Component{
    StyleCompleted(){
        return{
            fontSize: "20px",
            padding: "10px 15px",
            border: "none",
            color: this.props.task.done ? "red" : "green",
            textDecoration: this.props.task.done ? "line-through" : "none"
        }
    }


    render() {
        const {task} = this.props;

        return <div style={this.StyleCompleted()}>
                {task.title} 
                {task.description} 
                {task.done} 
                {task.id}
                <input type= "checkbox" onChange= {this.props.checkDone.bind(this, task.id)}  />
                <button style= {boton} onClick= {this.props.deleteTask.bind(this, task.id)} >Boton</button>
                </div>
    }
}

const boton = {
    borderRadius: "15%",
    backgroundColor: "orange",
    color: "black",
    width: "130px",
    cursor: "pointer"
}

Task.propTypes= {
    task: propTypes.object.isRequired
}


export default Task;