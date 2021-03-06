import React, { Component } from 'react';
import './form.css';

class AddMemberForm extends Component{
    render(){
        return(
            <form className="form" onSubmit={this.props.onSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={this.props.name}
                        onChange={this.props.onChange}
                    />
                </div>

                <div>
                    <label htmlFor="company">Company</label>
                    <input
                        type="text"
                        name="company"
                        value={this.props.company}
                        onChange={this.props.onChange}
                    />
                </div>

                <div>
                    <label htmlFor="status">Status</label>
                    <select value={this.props.status} name="status" onChange={this.props.onChange}>
                        <option value="default">Select Status</option>
                        <option value="closed">Closed</option>
                        <option value="active">Active</option>
                        <option value="idle">Idle</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="note">Note</label>
                    <textarea name="note" onChange={this.props.onChange} value={this.props.note}></textarea>
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

export default AddMemberForm;