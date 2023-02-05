import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { withRouter } from "react-router-dom";
import { Button, CircularProgress } from "@material-ui/core";
import { connect } from "react-redux";
import { apiCall } from "../services/api";
import MessageCard from "../components/messageCard";
import DialogBox from "../components/dialogBox";
import FormDialog from "../components/profileEdit";
import "../styling/main.css";

const User = (props) => {
  const [state, setState] = useState({
    user: null,
    navbar: null,
    follow: null,
  });
  let { id } = props.match.params;

  const loadData = () => {
    const { user } = props;

    apiCall("get", `/api/user/profile/${id}`)
      .then((data) => {
        if (id === user._id.$oid) {
          setState({ user: data?.[0], load: true, navbar: "User" });
        } else {
          if (
            data?.[0].followers.some(
              (value) => value._id.$oid === user._id.$oid
            )
          ) {
            setState({ user: data?.[0], follow: "following" });
          } else {
            setState({ user: data?.[0], follow: "follow" });
          }
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleFollow = () => {
    let http = "";
    if (state.follow === "follow") {
      http = "post";
    } else {
      http = "delete";
    }

    apiCall(http, `/api/user/follow/${id}`)
      .then((newUserInfo) => {
        if (state.follow === "follow") {
          setState({ user: newUserInfo, follow: "following" });
        } else {
          setState({ user: newUserInfo, follow: "follow" });
        }
      })
      .catch((err) => console.log(err));
  };

  const editProfile = ({ bio, profilePic }) => {
    let data = {};
    if (profilePic !== null) {
      data = {
        ...data,
        profileImgUrl: profilePic,
      };
    }
    if (bio !== null) {
      data = {
        ...data,
        bio,
      };
    }
    apiCall("put", "/api/user/profile", data)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const tweets = state.user?.messages.map((item, index) => {
    return (
      <MessageCard
        key={item._id.$oid}
        userInfo={props.user}
        post={{
          ...item,
          user: {
            _id: state.user?._id,
            username: state.user?.username,
            profileImgUrl: state.user?.profileImgUrl,
          },
        }}
      />
    );
  });

  if (state.user) {
    return (
      <React.Fragment>
        <div className="home-page">
          <div className="message-card">
            <div className="profile-row">
              <img
                className="profile-img"
                src={
                  state.user?.profileImgUrl
                    ? state.user?.profileImgUrl
                    : "https://www.knack.com/images/about/default-profile.png"
                }
                alt="profile-img"
              />
              <div className="profile-info">
                <h1 className="username">{state.user?.username}</h1>
                <p style={{ color: "white", maxWidth: "500px" }}>
                  {state.user?.bio}
                </p>
                <DialogBox
                  user={{
                    followers: state.user?.followers,
                    following: state.user?.following,
                  }}
                />
              </div>
              {state.navbar ? (
                <FormDialog editProfile={(e) => editProfile(e)} />
              ) : (
                <Button
                  component="button"
                  style={{ margin: "auto 0" }}
                  variant="contained"
                  onClick={() => handleFollow()}
                >
                  {state.follow}
                </Button>
              )}
            </div>
          </div>
          {tweets}
        </div>
        <NavBar value={state.navbar} />
      </React.Fragment>
    );
  } else {
    return (
      <div className="loading">
        <CircularProgress />
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  user: state.currentUser.user,
});

export default withRouter(connect(mapStateToProps, null)(User));
