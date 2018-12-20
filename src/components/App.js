import React, { Component } from 'react';

import Nav from './nav/Nav';
import Task from './task/Task';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <div className="container-content">
          <h2 className="title-content">Retos</h2>
          <div className="container-category">
            <Task category="Hoy" color="#FF0000"/>
            <Task category="Mañana" color="#FFC000"/>
            <Task category="Proximo" color="#92D050"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
