import React from 'react';
import '../styling/main.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

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
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.currentUser.isAuthenticated
});

export default connect(mapStateToProps, null)(Welcome);