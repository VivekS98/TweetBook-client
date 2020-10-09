import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMessages } from '../store/actions/actionCreators';

class Home extends Component {
    render() {
        return (
            <div>
                 
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    messages: state.messages
});

export default connect(mapStateToProps, {loadMessages})(Home);