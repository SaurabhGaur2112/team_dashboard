import React, { Component } from 'react';
import { connect } from 'react-redux';
import './table.css';
import MemberList from './memberList';
import arrowUp from '../../assets/icon/arrow_up.svg';
import arrowDown from '../../assets/icon/arrow_down.svg';

class MemberTable extends Component{
    constructor(props){
        super(props);

        this.state = {
            member: props.lists
        };

        this.order = 'asc';
        this.sortMemberList = this.sortMemberList.bind(this);
    }

    sortByAsc = (list, sortBy) => {
        var a = list.sort(function(obj1, obj2){
            return obj1[sortBy] > obj2[sortBy];
        });
        return a;
    }

    sortByDesc = (list, sortBy) => {
        var a = list.sort(function(obj1, obj2){
            return obj1[sortBy] < obj2[sortBy];
        });
        return a;
    }

    sortMemberList = (sortBy) => {
        var sortedMember = [];
        sortedMember = this.state.member;
        if(this.order === 'asc'){
            this.order = 'desc';
            this.setState({
                member: this.sortByDesc(this.state.member, sortBy)
            });
        } else {
            this.order = 'asc';
            this.setState({
                member: this.sortByAsc(this.state.member, sortBy)
            });
        }
    }

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
                                <img 
                                    src={arrowUp} 
                                    alt="arrow up" 
                                    className="table-header-icon" 
                                    onClick={() => this.sortMemberList('name')}
                                />
                            </th>
                            <th>
                                <span className="table-header-label">Company</span>
                                <img 
                                    src={arrowUp} 
                                    alt="arrow up" 
                                    className="table-header-icon" 
                                    onClick={() => this.sortMemberList('company')}
                                />
                            </th>
                            <th>
                                <span className="table-header-label">Status</span>
                                <img 
                                    src={arrowUp} 
                                    alt="arrow up" 
                                    className="table-header-icon" 
                                    onClick={() => this.sortMemberList('status')}
                                />
                            </th>
                            <th>
                                <span className="table-header-label">Last Updated</span>
                                <img 
                                    src={arrowUp} 
                                    alt="arrow up" 
                                    className="table-header-icon" 
                                    onClick={() => this.sortMemberList('date')}
                                />
                            </th>
                            <th>
                                <span className="table-header-label">Notes</span>
                                <img 
                                    src={arrowUp} 
                                    alt="arrow up" 
                                    className="table-header-icon" 
                                    onClick={() => this.sortMemberList('note')}
                                />
                            </th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        { this.state.member.map((list, index) => 
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