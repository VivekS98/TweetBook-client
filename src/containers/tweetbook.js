import React from 'react';
import Home from './home';
import User from './user';
import { Route } from 'react-router-dom';
import NavBar from "./NavBar";

export default () => (
    <div>
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
            <newTweet />
        </Route>
        <NavBar />
    </div>
);