import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { withRouter } from 'react-router-dom';
import { loadMessages } from '../store/actions/actionCreators';
import '../styling/main.css';

class Home extends Component {
    createTweet() {
        this.props.history.push("/usr/newTweet");
    }
    render() {
        return (
            <div className="home-page">
                    <Fab 
                     component="button" 
                     className="add-icon"
                     color="primary" 
                     onClick={() => this.createTweet()}
                    >
                    <AddIcon />
                    </Fab>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    messages: state.messages
});

export default withRouter(connect(mapStateToProps, {loadMessages})(Home));