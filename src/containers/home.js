import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from "./NavBar";
import MessageCard from '../components/messageCard';
import CircularProgress from '@material-ui/core/CircularProgress';
import { loadMessages } from '../store/actions/actionCreators';
import '../styling/main.css';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            feed: null,
            load: false
        }
    }

    componentDidMount() {
        this.props.loadMessages()
        .then(data => {
            this.setState({feed: data, load: true});
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        let feedPosts = <div className="loading"><CircularProgress /></div>;
        if(this.state.load === true) {
            feedPosts = this.state.feed.map((item, index) => {
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
}

const mapStateToProps = (state) => ({
    user: state.currentUser.user,
    messages: state.messages
});

export default connect(mapStateToProps, {loadMessages})(Home);