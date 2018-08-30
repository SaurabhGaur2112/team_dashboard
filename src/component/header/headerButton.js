import React, { Component } from 'react';
import { connect } from 'react-redux';
import { modalToggle } from '../../action/index';
import { bindActionCreators } from 'redux';

class HeaderButton extends Component{
    render(){
        return(
            <div className="header-button">
                <button className="header-add-button" onClick={() => this.props.modalToggle(true)}>Add Member +</button>
            </div>
        );
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        modalToggle: modalToggle
    }, dispatch);
}

export default connect(null, matchDispatchToProps)(HeaderButton);