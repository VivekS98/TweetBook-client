import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import { useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { apiCall } from "../services/api";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "../styling/main.css";
import {
  CircularProgress,
  Dialog,
  DialogContent,
  IconButton,
} from "@material-ui/core";
import { DialogTitle } from "./dialogBox";

const namesStyle = {
  display: "flex",
  flexDirection: "row",
  borderRadius: "20px",
  margin: "5px",
  padding: "5px",
  minWidth: "80px",
};

export default function MessageCard({ userInfo, post, updateTweet }) {
  const [like, setLike] = useState(
    isLiked(post, userInfo) ? "secondary" : "action"
  );
  const [open, setOpen] = useState(false);

  const history = useHistory();
  const user = { ...post.user };

  const handleLike = () => {
    if (like === "secondary") {
      apiCall("delete", `/api/user/tweet/${post._id.$oid}/like`)
        .then((data) => {
          setLike("action");
          updateTweet(data);
        })
        .catch((err) => console.log(err));
    } else {
      apiCall("post", `/api/user/tweet/${post._id.$oid}/like`)
        .then((data) => {
          setLike("secondary");
          updateTweet(data);
        })
        .catch((err) => console.log(err));
    }
  };

  let showData = <CircularProgress />;
  if (post?.likes?.length) {
    showData = post?.likes?.map((item, index) => {
      return (
        <div key={item._id.$oid} style={namesStyle}>
          <Avatar alt="Remy Sharp" src={item.profileImgUrl} />
          <h4 style={{ margin: "5px" }}>{item.username}</h4>
        </div>
      );
    });
  } else {
    showData = <span>No Likes yet!</span>;
  }

  return (
    <div className="message-card">
      <p className="post-text">{post.text}</p>
      <Paper component="div" className="msgcard-info">
        <div className="msgcard-like">
          <IconButton
            aria-label="delete"
            size="small"
            onClick={() => handleLike()}
          >
            <FavoriteIcon fontSize="small" color={like} />
          </IconButton>
          <IconButton
            aria-label="delete"
            size="small"
            onClick={() => setOpen(true)}
          >
            <p style={{ margin: "2px 10px" }}>{post?.likes?.length || 0}</p>
          </IconButton>
          <Chip
            style={{ margin: "2px" }}
            label={new Date(
              Number(post.updatedAt?.$date?.$numberLong)
            ).toDateString()}
          />
        </div>
        <Chip
          avatar={<Avatar alt={user.username} src={user.profileImgUrl} />}
          onClick={() => history.push(`/user/${user?._id?.$oid}`)}
          label={user.username}
        />
        <Dialog
          onClose={() => setOpen(false)}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle
            id="customized-dialog-title"
            onClose={() => setOpen(false)}
          >
            Likes
          </DialogTitle>
          <DialogContent>{showData}</DialogContent>
        </Dialog>
      </Paper>
    </div>
  );
}

const isLiked = (post, userInfo) => {
  if (post?.likes?.some((val) => val._id.$oid === userInfo._id?.$oid)) {
    return true;
  } else {
    return false;
  }
};
