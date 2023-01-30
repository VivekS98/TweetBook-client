import React from "react";
import { Route } from "react-router-dom";
import Welcome from "../components/welcome";
import Home from "./home";
import User from "./User";
import AuthForm from "./AuthForm";
import NewTweet from "../components/newTweet";
import "../styling/main.css";
import Search from "./Search";

function ShowCase() {
  return (
    <div className="App">
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route path="/signup">
        <AuthForm auth="signup" />
      </Route>
      <Route path="/signin">
        <AuthForm auth="signin" />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/user/:id">
        <User />
      </Route>
      <Route path="/newTweet">
        <NewTweet />
      </Route>
    </div>
  );
}

export default ShowCase;
