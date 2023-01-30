import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import MessageCard from "../components/messageCard";
import { apiCall } from "../services/api";
import CircularProgress from "@material-ui/core/CircularProgress";
import "../styling/main.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [],
      badge: 0,
    };
  }

  componentDidMount() {
    apiCall("get", "/api/tweets")
      .then((data) => {
        this.setState({ feed: data });
        console.log("Fetched Data: ", data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log(this.props);
    let feedPosts = (
      <div className="loading">
        <CircularProgress />
      </div>
    );
    if (this.state.feed.length > 0) {
      let stateFeed = [...this.state.feed];
      feedPosts = stateFeed.map((item, index) => {
        return (
          <MessageCard key={index} userInfo={this.props.user} post={item} />
        );
      });
    }
    return (
      <React.Fragment>
        <div className="home-page">{feedPosts}</div>
        <NavBar badge={this.state.badge} value={"Home"} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.currentUser.user,
});

export default connect(mapStateToProps, null)(Home);
