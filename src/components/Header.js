import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import UserBox from './UserBox';
import './Header.css';

function Header() {

    return (
        <div className="Header">
            <Logo />
            <Navigation />
            <UserBox />
        </div>
    );
}

export default Header;