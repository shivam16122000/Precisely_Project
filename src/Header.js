import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import Rdj from './images/rdjAvatar.jpg';
import PreciselyLogo from './images/preciselyLogo.jpg';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="left">
                <img className="preciseLogo" src={PreciselyLogo} alt="logo" />

                <div className="precisetext">
                    <p className="one">beyond</p>
                    <p className="two">exams</p>
                </div>
            </div>

            <div className="right">
                <div className="searchicon">
                    <SearchIcon />
                </div>
                <input type="text" />
                <Avatar src={Rdj} />
            </div>

            <div></div>
        </div>
    );
}

export default Header;
