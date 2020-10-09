import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from '../store/actions/actionCreators';
import { Username, Email, Password, ProfileImgUrl } from '../components/form';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            errorDisc: '',
            auth: '',
            username: '',
            email: '',
            password: '',
            profileImgUrl: ''
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value, auth: this.props.auth});
        console.log(this.state);
    }

    handleSubmit(e) {
        e.preventDefault();
        let { auth, username, email, password, profileImgUrl } = this.state;
        if(auth === 'signup') {
            this.props.setCurrentUser(auth, {username, email, password, profileImgUrl})
                .then(() => console.log("Logged In!"))
                .catch((err) => this.setState({error: true, errorDisc: err}))
        } else {
            this.props.setCurrentUser(auth, {email, password})
                .then(() => console.log("Logged In!"))
                .catch((err) => this.setState({error: true, errorDisc: err.message}))
        }
    }

    render() {
        let { username, email, profileImgUrl } = this.state;
        let { auth } = this.props;
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
                {this.state.error ? <Alert severity="error">{this.state.errorDisc}</Alert>:<div></div>}
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
                {this.state.error ? <Alert severity="error">{this.state.errorDisc}</Alert>:<div></div>}
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

export default connect(mapStataToProps, {setCurrentUser})(AuthForm);