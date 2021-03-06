import React from 'react';
import { Link } from 'react-router-dom';



const Welcome = ({ currentUser, logout, openModal }) => {
    
    const sessionLinks = () => (
        <nav className="login-signup">
            <button onClick={() => openModal('login')}>login</button>
            <button onClick={() => openModal('signup')}>signup</button>
        </nav>
    );
    const customWelcome = () => (
        <hgroup className="header-group login-signup">
            <Link to="/profile"><h2 className="header-name">Hi, {currentUser.fname} {currentUser.lname}!</h2></Link>
            <button className="header-button" onClick={logout}>log out</button>
        </hgroup>
    );

    return currentUser ? customWelcome() : sessionLinks();
};

export default Welcome;
