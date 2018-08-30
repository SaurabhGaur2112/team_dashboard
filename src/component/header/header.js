import React, { Component } from 'react';
import './header.css';

class Header extends Component{
    render(){
        return(
            <div className="header">
                <div className="header-head">
                    <div className="header-title">
                        <div className="title">
                            <span>Team Members</span>
                        </div>
                        <div className="header-button">
                            <button className="header-add-button" onClick={this.props.onClick}>Add Member +</button>
                        </div>
                    </div>
                </div>
    
                <div className="header-bottom">
    
                </div>
            </div>
        );
    }
}

export default Header;