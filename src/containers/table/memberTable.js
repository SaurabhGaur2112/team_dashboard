import React, { Component } from 'react';
import { connect } from 'react-redux';
import './table.css';
import MemberList from './memberList';

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
                        { this.props.lists.map((list, index) => 
                        <MemberList key={index} id={index} member={list} />) }
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        lists: state.member
    }
}

export default connect(mapStateToProps)(MemberTable);