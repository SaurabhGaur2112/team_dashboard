import React from 'react';
import './header.css';
import HeaderButton from './headerButton';

const Header = () => {
    return(
        <div className="header">
            <div className="header-head">
                <div className="header-title">
                    <div className="title">
                        <span>Team Members</span>
                    </div>
                    <HeaderButton />
                </div>
            </div>

            <div className="header-bottom">

            </div>
        </div>
    );
}

export default Header;