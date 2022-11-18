import React from 'react';
import logo from '../images/logo.png'
import './Logo.css';

function Logo() {

    return (
        <div className="Logo">
            <img src={logo} />
            <p>Магазин</p>
        </div>
    );
}

export default Logo;