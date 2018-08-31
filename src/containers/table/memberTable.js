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
            allchecked: false,
            iconRotate: false
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

    componentWillReceiveProps(nextProps){
        if (nextProps.lists.length != this.props.lists.length){
            this.setState({
                member: nextProps.lists
            });
        }
    }

    /* sort by ascending order */
    sortByAsc = (list, sortBy) => {
        let sortedArray = list.sort(function (obj1, obj2) {
            if (obj1[sortBy].toLowerCase() < obj2[sortBy].toLowerCase()) return -1;
            else if (obj1[sortBy].toLowerCase() > obj2[sortBy].toLowerCase()) return 1;
            return 0;
        });
        console.log("ASC", sortedArray);
        return sortedArray;
    }

    /* sort by descending order */
    sortByDesc = (list, sortBy) => {
        let reverseSortedArray = list.sort(function (obj1, obj2) {
            if (obj1[sortBy].toLowerCase() > obj2[sortBy].toLowerCase()) return -1;
            else if (obj1[sortBy].toLowerCase() < obj2[sortBy].toLowerCase()) return 1;
            return 0;
        });
        console.log("Desc", reverseSortedArray);
        return reverseSortedArray;
    }

    /* sort member list by sortBy field type like (name, company, status, date....) */
    sortMemberList = (sortBy) => {
        var sortedMember = [];
        sortedMember = this.state.member;
        if(this.order === 'asc'){
            this.order = 'desc';
            this.setState({
                member: this.sortByDesc(this.state.member, sortBy),
                iconRotate: true
            });
        } else {
            this.order = 'asc';
            this.setState({
                member: this.sortByAsc(this.state.member, sortBy),
                iconRotate: false
            });
        }
    }

    /* handle previous pagination */
    handlePrevious(){
        if(this.state.currentPage > 1){
            this.setState({
                currentPage: this.state.currentPage - 1,
                count: this.state.count - 1
            });    
        }
    }

    /* handle next pagination */
    handleNext(){
        if(this.state.count < this.pageCount){
            this.setState({
                currentPage: this.state.currentPage + 1,
                count: this.state.count + 1
            });
        }
    }

    headerCheckbox(){
        this.setState({
            allchecked: !this.state.allchecked
        });
    }

    render(){

        /* last member index value */
        const indexOfLastMember = this.state.currentPage * this.state.memberPerPage;
        /* first member index value */
        const indexOfFirstMember = indexOfLastMember - this.state.memberPerPage;
        const currentMembers = this.state.member.slice(indexOfFirstMember, indexOfLastMember);

        /* member list show in table */
        const renderMembers = currentMembers.map((list) => {
            return <MemberList key={list.id} member={list} checkValue={this.state.allchecked} />
        });

        /* company list show in header dropdown */
        const renderCompany = this.props.lists.map((list, index) => {
            return <option key={index} id={index}>{list.company}</option>
        });

        this.totalMember = this.totalMember + 1;

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
                                        className={this.state.iconRotate ? "table-header-icon icon-rotate" : "table-header-icon"}
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
                                        className={this.state.iconRotate ? "table-header-icon icon-rotate" : "table-header-icon"}
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
                                        className={this.state.iconRotate ? "table-header-icon icon-rotate" : "table-header-icon"}
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
                                        className={this.state.iconRotate ? "table-header-icon icon-rotate" : "table-header-icon"}
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
                                        className={this.state.iconRotate ? "table-header-icon icon-rotate" : "table-header-icon"}
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