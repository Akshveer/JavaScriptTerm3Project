import React, { useEffect } from 'react';
import './logoDisplay.css';
import logo from './AppImages/logo.png';
const LogoDisplay = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 3000); // Adjust the duration as needed
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="logo-container">
            <img src={logo} alt="Piece Of Cake Logo" className="logo" />
            <h1>Welcome to Piece Of Cake</h1>
            <div id="twoButtons">
                <button id="signInButton">Sign In</button>
                <button id="signUpButton">Sign Up</button>
            </div>
        </div>
    );
};

export default LogoDisplay;
