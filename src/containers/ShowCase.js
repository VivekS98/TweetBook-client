import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from '../components/welcome';
import TweetBook from './tweetbook';
import AuthForm from './AuthForm';
import '../styling/main.css';

function ShowCase() {
    return (
        <div className="App">
            <Route exact path="/">
                <Welcome />
            </Route>
            <Route path="/signup">
                <AuthForm auth="signup" />
            </Route>
            <Route path="/login">
                <AuthForm auth="signin" />
            </Route>
            <Route path="/usr">
                <TweetBook />
            </Route>
        </div>
    );
}

export default ShowCase;