import React, { Component } from 'react';
import './subheader.css';
import arrow from '../../assets/icon/arrow_down.svg';

class SubHeader extends Component{
    render(){
        return(
            <div className="header-bottom">
                <div className="header-left">
                    <div className="header-drop1">
                        <select value="" name="status">
                            <option value="default">Company (2)</option>
                            <option value="closed">Closed</option>
                            <option value="active">Active</option>
                            <option value="idle">Idle</option>
                        </select>
                    </div>
                    <div className="header-drop2">
                        <select value="" name="status">
                            <option value="default">Status</option>
                            <option value="closed">Closed</option>
                            <option value="active">Active</option>
                            <option value="idle">Idle</option>
                        </select>
                    </div>
                </div>
                <div className="header-right">
                    <div className="total-numberpage">
                        <span className="text-opacity">Viewing&nbsp;</span>
                        <span> 1-20 </span>
                        <span className="text-opacity">&nbsp;of&nbsp;</span>
                        <span>36</span>
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