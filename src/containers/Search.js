import React, { Component } from "react";
import NavBar from "./NavBar";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import emptyImg from "../styling/text638.png";
import "../styling/main.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  render() {
    let data = this.state.data;
    let notify = (
      <div className="loading">
        <CircularProgress />
      </div>
    );
    console.log(data);
    if (data !== null && data.length > 0) {
      notify = data.map((item, index) => {
        return (
          <div key={index} className="notify-card">
            <Paper component="div" className="msgcard-info">
              <h4 style={{ padding: "0", margin: "0" }}>{item.text}</h4>
              <Chip label={new Date(item.date).toDateString()} />
            </Paper>
            <p style={{ margin: "0 10px" }}>{item.message}</p>
          </div>
        );
      });
    } else notify = <img className="notify" src={emptyImg} alt="empty" />;
    return (
      <React.Fragment>
        <div className="home-page">{notify}</div>
        <NavBar value="Search" />
      </React.Fragment>
    );
  }
}

export default Search;
