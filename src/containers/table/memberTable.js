import React, { Component } from 'react';
import './table.css';
import more from '../../assets/icon/more_vert.svg';
import edit from '../../assets/icon/edit.svg';
import trash from '../../assets/icon/delete.svg';

class MemberTable extends Component{
    render(){
        return(
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <label className="container">
                                    <input
                                        type="checkbox"
                                    />
                                    <span className="checkmark"></span>
                                </label>
                            </th>
                            <th>
                                <span className="table-header-label">Name</span>
                            </th>
                            <th>
                                <span className="table-header-label">Company</span>
                            </th>
                            <th>
                                <span className="table-header-label">Status</span>
                            </th>
                            <th>
                                <span className="table-header-label">Last Updated</span>
                            </th>
                            <th>
                                <span className="table-header-label">Notes</span>
                            </th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <label className="container">
                                    <input
                                        type="checkbox"
                                    />
                                    <span className="checkmark"></span>
                                </label>
                            </td>
                            <td>
                                <span>Kilgore Trout</span>
                            </td>
                            <td>
                                <span>Breakfast of Champions</span>
                            </td>
                            <td>
                                <span>Closed</span>
                            </td>
                            <td>
                                <span>9/12/2017</span>
                            </td>
                            <td>
                                <span>The universal is a big place, perhaps the biggest...
                                </span>
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
                                            <li>
                                                <img src={trash} alt="edit" className="dropdown-icon" />
                                                <span className="dropdown-font">Delete</span>
                                            </li>
                                        </ul>
                                    </label>
                                </span>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label className="container">
                                    <input
                                        type="checkbox"
                                    />
                                    <span className="checkmark"></span>
                                </label>
                            </td>
                            <td>
                                <span>Kilgore Trout</span>
                            </td>
                            <td>
                                <span>Breakfast of Champions</span>
                            </td>
                            <td>
                                <span>Closed</span>
                            </td>
                            <td>
                                <span>9/12/2017</span>
                            </td>
                            <td>
                                <span>The universal is a big place, perhaps the biggest...
                                </span>
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
                                            <li>
                                                <img src={trash} alt="edit" className="dropdown-icon" />
                                                <span className="dropdown-font">Delete</span>
                                            </li>
                                        </ul>
                                    </label>
                                </span>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        );
    }
}

export default MemberTable;