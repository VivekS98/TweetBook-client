import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from "./NavBar";
import MessageCard from '../components/messageCard';
import { loadMessages } from '../store/actions/actionCreators';
import '../styling/main.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed: []
        }
    }
    componentDidMount() {
        this.props.loadMessages()
            .then(data => {
                this.setState({feed: [...data]});
                console.log(this.state.feed);
            })
            .catch(err => {
                this.setState({feed: err});
            })
    }
    render() {
        let feed = this.state.feed.map((item, index) => {
            return <MessageCard key={index} post={item} />
        });
        return (
            <div className="home-page">
                {feed}
                <NavBar value={"Home"} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    messages: state.messages
});

export default connect(mapStateToProps, {loadMessages})(Home);