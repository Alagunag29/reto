import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
    render(){
        return(
            <div className="container-nav">
                <nav className="nav">
                    <div className="nav-item">
                        <span className="name-development">Janio Jimenez</span>
                    </div>
                    <div className="nav-item">
                        <span className="link-nav-msg">Feliz Navidad <a className="link-nav-name">Platzi</a></span>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;