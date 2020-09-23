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
            <h1>Welcome to TweetBook!</h1>
            <p>A Twitter clone...</p>
            </div>
        </div>
    </div>
)