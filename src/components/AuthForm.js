import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        return (
            <React.Fragment>
                
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