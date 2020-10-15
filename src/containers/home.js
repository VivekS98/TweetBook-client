import React, { useState } from 'react';
import { connect } from 'react-redux';
import NavBar from "./NavBar";
import MessageCard from '../components/messageCard';
import CircularProgress from '@material-ui/core/CircularProgress';
import { loadMessages } from '../store/actions/actionCreators';
import '../styling/main.css';

function Home(props) {
    const [feed, setFeed] = useState(null);

        props.loadMessages()
        .then(data => {
            setFeed(data);
        })
        .catch(err => {
            this.setFeed(err);
        });

    let feedPosts = <div className="loading"><CircularProgress /></div>;
    if(feed !== null) {
        feedPosts = feed.map((item, index) => {
            return <MessageCard key={index} post={item} />
        });
    }
    return (
        <React.Fragment>
        <div className="home-page">
            {feedPosts}
        </div>
            <NavBar value={"Home"} />
        </React.Fragment>
    );
}

const mapStateToProps = (state) => ({
    messages: state.messages
});

export default connect(mapStateToProps, {loadMessages})(Home);