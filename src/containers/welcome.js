import React from 'react';
import '../styling/main.css';

var logo = "TweetBook>"

export default () => (
    <div>
        <header className="header">
            <h2 className="logo">{logo}</h2>
            <div className="nav">
                <h3>Signup</h3>
                <h3>Login</h3>
            </div>
        </header>
        <div className="background-img">
            <div className="welcome">
            <h1 className="welcome-text">Welcome to TweetBook!</h1>
            <p className="welcome-desc">A Twitter clone. <b>Signup</b> to explore more!</p>
            </div>
        </div>
    </div>
)