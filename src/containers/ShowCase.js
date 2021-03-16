import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Welcome from '../components/welcome';
import Home from './home';
import User from './user';
import Notifications from './notifications';
import AuthForm from './AuthForm';
import NewTweet from '../components/newTweet';
import '../styling/main.css';

function ShowCase({ user }) {
    return (
        <div className="App">
            <Route exact path="/">
                <Welcome />
            </Route>
            <Route path="/signup">
                <AuthForm auth="signup" />
            </Route>
            <Route path="/signin">
                <AuthForm auth="signin" />
            </Route>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/notifications">
                <Notifications />
            </Route>    
            <Route path="/user/:id">
                <User />
            </Route>
            <Route path="/newTweet">
                <NewTweet />
            </Route>
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.currentUser.user
});

export default connect(mapStateToProps, null)(ShowCase);
