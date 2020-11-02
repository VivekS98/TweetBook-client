import React from 'react';
import Chip from '@material-ui/core/Chip';
import { useHistory } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import '../styling/main.css';

export default ({post}) => {
    const history = useHistory();
    const user = {...post.user};
    if(user.like)
    return (
        <div className="message-card">
            <p className="post-text">{post.text}</p>
            <Paper component="ul" className="msgcard-info">
                <div>
                  <FavoriteIcon color="action" />
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