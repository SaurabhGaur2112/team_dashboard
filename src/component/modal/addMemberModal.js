import React, { Component } from 'react';
import './modal.css';
import AddMemberForm from '../../containers/form/addMemberForm';

class AddMemberModal extends Component{
    render(){
        return(
            <div className={this.props.modalOpen ? "modal modal-display-block" : "modal modal-display-none"}>
                <div className="modal-content">
                    <span className="close" onClick={this.props.onClick}>&times;</span>
                    <AddMemberForm />
                </div>
            </div>
        );   
    }
}

export default AddMemberModal;