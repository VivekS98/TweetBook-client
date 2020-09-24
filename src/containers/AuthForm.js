import React, { Component } from 'react';
import { connect } from 'react-redux';
import { username, email, password, profileImgUrl} from '../components/form';

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
    render() {
        let {username, email, password, profileImgUrl} = this.state;
        let auth = this.props;
        let form;
        if (auth === "signup") {
            form = <div>
                <form onSubmit={() => this.handleSubmit}>
                    <username handleChange={() => this.handleChange()} />
                    <email handleChange={() => this.handleChange()} />
                    <profileImgUrl handleChange={() => this.handleChange()} />
                    <password handleChange={() => this.handleChange()} />
                    <input type="submit" value="Signup" />
                </form>
            </div>
        }
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