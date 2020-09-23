import React from 'react';
import NavBar from "./NavBar";
import { Route } from 'react-router-dom';
import Welcome from './welcome';
import '../styling/main.css';

export default () => (
    <div className="App">
        <NavBar />
        <Route exact path="/">
            <Welcome />
        </Route>
        <Route path="/home">
            <h1>home!</h1>
        </Route>
        <Route path="/favorites">
            <h1>favorites!</h1>
        </Route>
        <Route path="/user">
            <h1>user!</h1>
        </Route>
    </div>
)