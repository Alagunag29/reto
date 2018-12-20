import React, { Component } from 'react';

import InputTask from '../inputTask/InputTask';
import './task.css';


class Task extends Component {
    constructor() {
        super();
        this.state = {
            tasks : [],
            task : ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeElementTask = this.removeElementTask.bind(this);    

    }

    componentWillMount(){
        var dat  = localStorage.getItem(this.props.category);
        var vector = dat.split(',');
        console.log(vector);
        this.setState({
            tasks: vector
        })
    }
    

    handleInput(e) {
        const task = e.target.value;
        this.setState({
            task : task
         })
         
    }

    handleSubmit(e) {
        e.preventDefault();
        let a = this.state.tasks ;
        
        this.setState({
            tasks: [...this.state.tasks, this.state.task]
        });

        localStorage.setItem(this.props.category, this.state.tasks);
        
    }

    removeElementTask(key){
        this.setState({
            tasks: this.state.tasks.filter((e, i) => {
                return i !== key
            })
        })
        localStorage.setItem(this.props.category, this.state.tasks);
    }

    
    render(){
        
        const tasks = this.state.tasks.map((task, key) => {
            return (
                <InputTask name = {task} index={key} remove={this.removeElementTask}/>)
        })
       
        const color = this.props.color;
    
        return(
            
            <div className="task">
                
                <div className="task-body">
                    <div className="container-task-header">
                        <div className="name-category-task">{this.props.category}</div>
                        <div>
                            <span className="task-figure" 
                            style = {{background: color}}></span> 
                          
                        </div>
                    </div>
                    <div className="container-task-content">
                        { tasks}
                    </div>
                </div>
                <div className="container-task-footer">
                    <form className="task-form-footer" onSubmit={this.handleSubmit}>
                        <input className="input-task" 
                               name="task"
                               type="text" name="task" 
                               placeholder="Registra tu reto!"
                               onChange={this.handleInput}/>
                        <div className="content-submit">
                            <button className="submit-task"></button>                            
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}

export default Task;