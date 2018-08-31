import React, { Component } from 'react';
import './subheader.css';
import arrow from '../../assets/icon/arrow_down.svg';

class SubHeader extends Component{
    render(){
        return(
            <div className="header-bottom">
                {this.props.lists}
                <div className="header-left">
                    <div className="header-drop1">
                        {/* header dropdown */}
                        <select value="" name="status">
                            {this.props.companyList}
                        </select>
                    </div>
                    <div className="header-drop2">
                        {/* header status dropdown */}
                        <select value="" name="status">
                            <option value="default">Status</option>
                            <option value="closed">Closed</option>
                            <option value="active">Active</option>
                            <option value="idle">Idle</option>
                        </select>
                    </div>
                </div>
                {/* pagination  */}
                <div className="header-right">
                    <div className="total-numberpage">
                        <span className="text-opacity">Viewing&nbsp;</span>
                        <span> {this.props.indexFirstMember + 1} - {this.props.indexLastMember} </span>
                        <span className="text-opacity">&nbsp;of&nbsp;</span>
                        <span> {this.props.totalList} </span>
                    </div>
                    <div className="pagination-btn">
                        <button className="paginationbtn" onClick={this.props.previous}>
                            <img src={arrow} alt="prev" className="previmg" />
                        </button>
                        <button className="paginationbtn" onClick={this.props.next}>
                            <img src={arrow} alt="next" className="nextimg" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SubHeader;