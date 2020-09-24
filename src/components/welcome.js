import React from 'react';
import '../styling/main.css';
import { Link } from 'react-router-dom';

var logo = "TweetBook>"

export default () => (
    <div>
        <header className="header">
            <h2 className="logo">{logo}</h2>
            <div className="nav">
                <Link to="/signup"><h3>Signup</h3></Link>
                <Link to="/login"><h3>Login</h3></Link>
            </div>
        </header>
        <div className="background-img">
            <div className="welcome">
            <h1 className="welcome-text">Welcome to TweetBook!</h1>
            <p className="welcome-desc"><b>Login/Signup</b> to explore more...</p>
            </div>
        </div>
    </div>
)