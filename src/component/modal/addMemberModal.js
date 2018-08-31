import React, { Component } from 'react';
import { connect } from 'react-redux';
import './modal.css';
import AddMemberForm from '../../containers/form/addMemberForm';
import { bindActionCreators } from 'redux';
import { memberAdd } from '../../action/index';

class AddMemberModal extends Component{
    constructor(props){
        super(props);

        var today  = new Date();

        this.state = {
            name: '',
            company: '',
            status: 'default',
            date: today.toLocaleDateString("en-US"),
            note: '',
            modalOpen: props.modalOpen
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            modalOpen: nextProps.modalOpen
        });
    }

    /* handle all form fields */
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    /* form submit */
    handleSubmit(event){
        event.preventDefault();
        this.props.memberAdd(this.state);
        this.setState({
            name: '',
            company: '',
            status: 'default',
            note: '',
            modalOpen: false
        });
        this.props.onClick();
    }

    render(){
        return(
            <div className={this.state.modalOpen ? "modal modal-display-block" : "modal modal-display-none"}>
                <div className="modal-content">
                    <span className="close" onClick={this.props.onClick}>&times;</span>
                    <AddMemberForm 
                        onSubmit={this.handleSubmit} 
                        onChange={this.handleChange}
                        name={this.state.name}
                        company={this.state.company}
                        status={this.state.status}
                        note={this.state.note}
                    />
                </div>
            </div>
        );   
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        memberAdd: memberAdd
    }, dispatch);
}

export default connect(null, matchDispatchToProps)(AddMemberModal);