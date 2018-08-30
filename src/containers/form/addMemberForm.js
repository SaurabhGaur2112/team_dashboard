import React, { Component } from 'react';
import { connect } from 'react-redux';
import './form.css';
import { bindActionCreators } from 'redux';
import { memberAdd } from '../../action/index';

class AddMemberForm extends Component{
    constructor(props){
        super(props);

        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var today  = new Date();

        this.state = {
            name: '',
            company: '',
            status: 'default',
            date: today.toLocaleDateString("en-US"),
            note: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.memberAdd(this.state);
        this.setState({
            name: '',
            company: '',
            status: 'default',
            note: ''
        });
    }

    render(){
        return(
            <form className="form" onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="company">Company</label>
                    <input
                        type="text"
                        name="company"
                        value={this.state.company}
                        onChange={this.handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="status">Status</label>
                    <select value={this.state.status} name="status" onChange={this.handleChange}>
                        <option value="default">Select Status</option>
                        <option value="closed">Closed</option>
                        <option value="active">Active</option>
                        <option value="idle">Idle</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="note">Note</label>
                    <textarea name="note" onChange={this.handleChange} value={this.state.note}></textarea>
                </div>

                <div>
                    <input
                        type="submit"
                        value="Add member"
                    />
                </div>
            </form>
        );
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        memberAdd: memberAdd
    }, dispatch);
}

export default connect(null, matchDispatchToProps)(AddMemberForm);