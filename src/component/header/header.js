import React, { Component } from 'react';
import './header.css';
import SubHeader from '../subheader/subHeader';

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
            </div>
        );
    }
}

export default Header;