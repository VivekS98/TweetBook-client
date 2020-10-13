import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from '../components/welcome';
import Home from './home';
import User from './user';
import AuthForm from './AuthForm';
import NewTweet from '../components/newTweet';
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
            <Route path="/usr/home">
                <Home />
            </Route>
            <Route path="/usr/favorites">
                <h1>favorites!</h1>
            </Route>    
                <Route path="/usr/user">
                    <User />
                </Route>
            <Route path="/usr/newTweet">
                <NewTweet />
            </Route>
        </div>
    );
}

export default ShowCase;