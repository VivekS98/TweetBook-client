import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from "./NavBar";
import MessageCard from '../components/messageCard';
import { apiCall } from '../services/api';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../styling/main.css';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            feed: [],
            load: false
        }
    }

    componentDidMount() {
        console.log(this.state);
        apiCall('get', '/api/messages')
            .then(data => {
                this.setState({feed: data, load: true});
                console.log("Fetched Data: ", data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        let feedPosts = <div className="loading"><CircularProgress /></div>;
        if(this.state.load === true) {
            let stateFeed = [...this.state.feed];
            feedPosts = stateFeed.map((item, index) => {
                return <MessageCard 
                        key={index} 
                        userInfo={this.props.user} 
                        post={item} 
                       />
            });
        }
        console.log(this.state.feed, this.state.load);
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
    user: state.currentUser.user
});

export default connect(mapStateToProps, null)(Home);