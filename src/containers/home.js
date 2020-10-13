import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from "./NavBar";
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
        return (
            <div className="home-page">
                
                <NavBar value={"Home"} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    messages: state.messages
});

export default connect(mapStateToProps, {loadMessages})(Home);