import React from 'react';
import '../styling/main.css';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';

const Welcome = (props) => {
    const history = useHistory();
    if(props.auth) {
        history.push('/home');
        return <p>loading...</p>;
    } else {
        return (
            <React.Fragment>
                <header className="header">
                    <h2 className="logo">TweetBook</h2>
                    <div className="nav">
                        <Button 
                          component="div"
                          color="inherit"
                          className="nav-button"
                          onClick={() => history.push('/signup')}>
                              Signup
                        </Button>
                        <Button 
                          component="div"
                          color="inherit"
                          className="nav-button"
                          onClick={() => history.push('/signin')}>
                              Login
                        </Button>
                    </div>
                </header>
                <div className="background-img">
                    <div className="welcome">
                        <h1 className="welcome-text">Welcome to TweetBook!</h1>
                        <p className="welcome-desc"><b>Login/Signup</b> to explore more...</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.currentUser.isAuthenticated
});

export default connect(mapStateToProps, null)(Welcome);
