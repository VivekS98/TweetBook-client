import React, { Component } from 'react';
import NavBar from './NavBar';

class Notifications extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar value="notifications" />
            </React.Fragment>
        );
    }
}

export default Notifications;