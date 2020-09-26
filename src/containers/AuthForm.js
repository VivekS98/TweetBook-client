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

    handleChange() {

    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        let {username, email, profileImgUrl} = this.state;
        let auth = this.props.auth;
        console.log(auth);
        let form = undefined;
        if (auth === "signup") {
            form = <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <Username input={username} handleChange={(e) => this.handleChange(e)} /><br />
                    <Email input={email} handleChange={(e) => this.handleChange(e)} /><br />
                    <ProfileImgUrl input={profileImgUrl} handleChange={(e) => this.handleChange(e)} /><br />
                    <Password handleChange={(e) => this.handleChange(e)} /><br />
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </div>
        }
        return (
            <React.Fragment>
                {form}
                {console.log(this.state)}
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