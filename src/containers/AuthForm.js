import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Username, Email, Password, ProfileImgUrl } from '../components/form';
import Button from '@material-ui/core/Button';

class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            profileImgUrl: ''
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
    }

    handleSubmit(e) {
        e.preventDefault();

    }

    render() {
        let {username, email, profileImgUrl} = this.state;
        let auth = this.props.auth;
        console.log(auth);
        let form = (auth === "signup") ? 
            <div className="form">
                <h2 className="auth-text">Join TweetBook today!</h2>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <Username input={username} handleChange={(e) => this.handleChange(e)} /><br />
                    <Email input={email} handleChange={(e) => this.handleChange(e)} /><br />
                    <ProfileImgUrl input={profileImgUrl} handleChange={(e) => this.handleChange(e)} /><br />
                    <Password handleChange={(e) => this.handleChange(e)} /><br />
                    <Button type="submit" variant="contained" color="primary">
                        Signup
                    </Button><br />
                </form>
            </div>
            : <div className="form">
                <h2 className="auth-text">Login to TweetBook Now!</h2>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <Email input={email} handleChange={(e) => this.handleChange(e)} /><br />
                    <Password handleChange={(e) => this.handleChange(e)} /><br />
                    <Button type="submit" variant="contained" color="primary">
                        Login
                    </Button><br />
                </form>
        </div>
        return (
            <React.Fragment>
                {form}
            </React.Fragment>
        );
    }
}

function mapStataToProps(state) {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStataToProps, null)(AuthForm);