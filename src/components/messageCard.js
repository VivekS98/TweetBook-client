import React, { useState } from 'react';
import Chip from '@material-ui/core/Chip';
import { useHistory } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { apiCall } from '../services/api';
import FavoriteIcon from '@material-ui/icons/Favorite';
import '../styling/main.css';

export default ({ post}) => {
  const history = useHistory();
  const user = {...post.user};

  const isLiked = () => {
    if(post.likes.some(val => val === post.user._id)) {
      return true;
    } else {
      return false;
    }
  }

  const [like, setLike] = useState(isLiked() ? "secondary" : "action");
  const [likeCount, likeAdd] = useState(post.likes.length);

  const handleLike = () => {
    if(like === "secondary") {
      apiCall('delete', `/api/users/${post.user._id}/message/${post._id}/like`)
        .then(data => {
          setLike("action");
          likeAdd(likeCount - 1);
          console.log(data);
        })
        .catch(err => console.log(err))
    } else {
      apiCall('post', `/api/users/${post.user._id}/message/${post._id}/like`)
        .then(data => {
          setLike("secondary");
          likeAdd(likeCount + 1);
          console.log(data);
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <div className="message-card">
      <p className="post-text">{post.text}</p>
      <Paper component="div" className="msgcard-info">
        <div className="msgcard-like">
          <FavoriteIcon onClick={() => handleLike()} fontSize="small" color={like} />
          <p style={{ margin: '0 10px 0 0' }}>{likeCount}</p>
          <Chip label={new Date(post.updatedAt).toDateString()} />
        </div>
        <Chip 
          avatar={<Avatar alt={user.username} src={user.profileImgUrl} />}
          onClick={() => history.push(`/user/${user._id}`)}
          label={user.username}
        />
      </Paper>
    </div>
  )
}