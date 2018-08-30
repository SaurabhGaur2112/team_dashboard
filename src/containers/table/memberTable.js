import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './table.css';
import MemberList from './memberList';
import arrowUp from '../../assets/icon/arrow_up.svg';
import SubHeader from '../../component/subheader/subHeader';

class MemberTable extends Component{
    constructor(props){
        super(props);

        this.state = {
            member: props.lists,
            currentPage: 1,
            memberPerPage: 5,
            buttonDisable: false,
            count: 1,
            allchecked: false
        };

        this.totalMember = this.state.member.length;
        this.pageDivision = this.totalMember / this.state.memberPerPage;

        if(Number.isInteger(this.pageDivision)){
            this.pageCount = this.pageDivision;
        } else {
            this.pageCount = parseInt(this.pageDivision) + 1;
        }

        this.order = 'asc';
        this.sortMemberList = this.sortMemberList.bind(this);

        this.handlePrevious = this.handlePrevious.bind(this);
        this.handleNext = this.handleNext.bind(this);

        this.headerCheckbox = this.headerCheckbox.bind(this);
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

    handlePrevious(){
        if(this.state.currentPage > 1){
            this.setState({
                currentPage: this.state.currentPage - 1,
                count: this.state.count - 1
            });    
        }
    }

    handleNext(){
        if(this.state.count < this.pageCount){
            this.setState({
                currentPage: this.state.currentPage + 1,
                count: this.state.count + 1
            });
        }
    }

    headerCheckbox(){
        if(this.state.allchecked == false){
            this.setState({
                allchecked: true
            });
        } else {
            this.setState({
                allchecked: false
            });
        }
    }

    render(){

        const indexOfLastMember = this.state.currentPage * this.state.memberPerPage;
        const indexOfFirstMember = indexOfLastMember - this.state.memberPerPage;
        const currentMembers = this.state.member.slice(indexOfFirstMember, indexOfLastMember);

        const renderMembers = currentMembers.map((list, index) => {
            return <MemberList key={index} id={index} member={list} checkValue={this.state.allchecked} />
        });

        const renderCompany = this.state.member.map((list, index) => {
            return <option key={index} id={index}>{list.company}</option>
        });

        return(
            <Fragment>
                <SubHeader 
                    previous={this.handlePrevious} 
                    next={this.handleNext} 
                    indexFirstMember={indexOfFirstMember}
                    indexLastMember={indexOfLastMember}
                    totalList={this.totalMember}
                    companyList={renderCompany}
                />
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    <label className="container">
                                        <input
                                            type="checkbox"
                                            onClick={this.headerCheckbox}
                                        />
                                        <span className="checkmark"></span>
                                    </label>
                                </th>
                                <th>
                                    <span 
                                        className="table-header-label"
                                        onClick={() => this.sortMemberList('name')}
                                    >Name</span>
                                    <img 
                                        src={arrowUp} 
                                        alt="arrow up" 
                                        className="table-header-icon" 
                                        onClick={() => this.sortMemberList('name')}
                                    />
                                </th>
                                <th>
                                    <span 
                                        className="table-header-label"
                                        onClick={() => this.sortMemberList('company')}
                                    >Company</span>
                                    <img 
                                        src={arrowUp} 
                                        alt="arrow up" 
                                        className="table-header-icon" 
                                        onClick={() => this.sortMemberList('company')}
                                    />
                                </th>
                                <th>
                                    <span 
                                        className="table-header-label"
                                        onClick={() => this.sortMemberList('status')}
                                    >Status</span>
                                    <img 
                                        src={arrowUp} 
                                        alt="arrow up" 
                                        className="table-header-icon" 
                                        onClick={() => this.sortMemberList('status')}
                                    />
                                </th>
                                <th>
                                    <span 
                                        className="table-header-label"
                                        onClick={() => this.sortMemberList('date')}
                                    >Last Updated</span>
                                    <img 
                                        src={arrowUp} 
                                        alt="arrow up" 
                                        className="table-header-icon" 
                                        onClick={() => this.sortMemberList('date')}
                                    />
                                </th>
                                <th>
                                    <span 
                                        className="table-header-label"
                                        onClick={() => this.sortMemberList('note')}
                                    >Notes</span>
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
                            {renderMembers}
                        </tbody>
                    </table>
                </div>
            </Fragment>
        );
    }
}

function mapStateToProps(state){
    return {
        lists: state.member
    }
}

export default connect(mapStateToProps)(MemberTable);