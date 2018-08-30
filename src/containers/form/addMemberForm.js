import React, { Component } from 'react';
import './form.css';

class AddMemberForm extends Component{
    render(){
        return(
            <form className="form">
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                    />
                </div>

                <div>
                    <label htmlFor="company">Company</label>
                    <input
                        type="text"
                    />
                </div>

                <div>
                <label htmlFor="status">Status</label>
                    <select>
                        <option defaultChecked>Select Status</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="note">Note</label>
                    <textarea></textarea>
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