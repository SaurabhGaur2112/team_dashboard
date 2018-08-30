import React, { Component } from 'react';
import { connect } from 'react-redux';
import './modal.css';
import { bindActionCreators } from 'redux';
import { modalToggle } from '../../action/index';
import AddMemberForm from '../../containers/form/addMemberForm';

class AddMemberModal extends Component{
    render(){
        return(
            <div className={this.props.mode ? "modal modal-display-block" : "modal modal-display-none"}>
                <div className="modal-content">
                    <span className="close" onClick={() => this.props.modalToggle(false)}>&times;</span>
                    <AddMemberForm />
                </div>
            </div>
        );   
    }
}

function mapStateToProps(state){
    return {
        mode: state.modal
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        modalToggle: modalToggle
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(AddMemberModal);