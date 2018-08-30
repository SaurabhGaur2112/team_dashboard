import React, { Component } from 'react';
import { connect } from 'react-redux';
import more from '../../assets/icon/more_vert.svg';
import edit from '../../assets/icon/edit.svg';
import trash from '../../assets/icon/delete.svg';
import { bindActionCreators } from 'redux';
import { memberDelete } from '../../action/index';

class MemberList extends Component{
    render(){
        return(
            <tr>
                <td>
                    <label className="container">
                        <input
                            type="checkbox"
                            checked={this.props.checkValue ? "checked" : ""}
                        />
                        <span className="checkmark"></span>
                    </label>
                </td>
                <td>
                    <span>{this.props.member.name}</span>
                </td>
                <td>
                    <span>{this.props.member.company}</span>
                </td>
                <td>
                    <span>{this.props.member.status}</span>
                </td>
                <td>
                    <span>{this.props.member.date}</span>
                </td>
                <td>
                    <span>{this.props.member.note}</span>
                </td>
                <td>
                    <span className="dropdown">
                        <img src={more} alt="more option" />
                        <label>
                            <input type="checkbox" />
                            <ul>
                                <li>
                                    <img src={edit} alt="edit" className="dropdown-icon" />
                                    <span className="dropdown-font">Edit</span>
                                </li>
                                <li onClick={() => this.props.memberDelete(this.props.member.id)}>
                                    <img src={trash} alt="edit" className="dropdown-icon" />
                                    <span className="dropdown-font">Delete</span>
                                </li>
                            </ul>
                        </label>
                    </span>
                </td>
            </tr>
        );
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        memberDelete: memberDelete
    }, dispatch);
}

export default connect(null, matchDispatchToProps)(MemberList);