import React, { Component } from 'react';

import './inputTask.css';

import ImageOk from '../../../src/ok-mark.svg';

class InputTask extends Component {
    constructor() {
        super();
        this.state = {
            color: 'white',
            text: '#D9D9D9',
            key : null
        }
        this.changeColor = this.changeColor.bind(this);
        this.removeTask  = this.removeTask.bind(this);
    }

    changeColor(e){
        let newColor = this.state.color === 'white'  ? '#33CC33': 'white';
        let newText  = this.state.text  === '#D9D9D9' ? '#fff'  : '#D9D9D9';
        this.setState({
            color : newColor,
            text : newText,
            key : 0
        })
    }

    removeTask(e){
        e.preventDefault();
        const key = this.props.index;
        this.props.remove(key);

    }

    render() {
        const task = this.props.name;
        return(  
            <div className="inputTask"
                 style = {{background: this.state.color}}>
                <div className="container-state-task"> 
                    <div className="container-task-ok">
                        <div className="task-ok" 
                            onClick={this.changeColor}>
                            <div>
                                <i style = {{color: this.state.text}}
                                    className="fas fa-check"></i>
                            </div>
                
                        </div>
                        <div>
                            <span className="name-input-task">{task}</span>
                        </div> 
                    </div>
                    <div>
                         <i  className="fas fa-times remove"  onClick={this.removeTask} 
                            ></i>
                    </div>
                 
                </div>
            
            </div>
        );
    }
}   

export default InputTask;