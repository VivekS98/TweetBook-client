import React, { Component } from 'react';
import NavBar from "./NavBar";

class User extends Component {
    render() {
        return (
            <div>
                <NavBar value={"User"} />
            </div>
        )
    }
}

export default User;