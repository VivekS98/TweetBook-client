import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import { useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { apiCall } from "../services/api";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "../styling/main.css";

export default function MessageCard({ userInfo, post }) {
  const history = useHistory();
  const user = { ...post.user };

  const isLiked = () => {
    if (post.likes.some((val) => val._id.$oid === userInfo._id?.$oid)) {
      return true;
    } else {
      return false;
    }
  };

  const [like, setLike] = useState(isLiked() ? "secondary" : "action");
  const [likeCount, likeAdd] = useState(post.likes.length);

  const handleLike = () => {
    if (like === "secondary") {
      apiCall("delete", `/api/user/tweet/${post._id.$oid}/like`)
        .then((data) => {
          setLike("action");
          likeAdd(likeCount - 1);
          console.log(data);
        })
        .catch((err) => console.log(err));
    } else {
      apiCall("post", `/api/user/tweet/${post._id.$oid}/like`)
        .then((data) => {
          setLike("secondary");
          likeAdd(likeCount + 1);
          console.log(data);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="message-card">
      <p className="post-text">{post.text}</p>
      <Paper component="div" className="msgcard-info">
        <div className="msgcard-like">
          <FavoriteIcon
            onClick={() => handleLike()}
            fontSize="small"
            color={like}
          />
          <p style={{ margin: "0 10px" }}>{likeCount}</p>
          <Chip
            label={new Date(
              Number(post.updatedAt?.$date?.$numberLong)
            ).toDateString()}
          />
        </div>
        <Chip
          avatar={<Avatar alt={user.username} src={user.profileImgUrl} />}
          onClick={() => history.push(`/user/${user._id.$oid}`)}
          label={user.username}
        />
      </Paper>
    </div>
  );
}
