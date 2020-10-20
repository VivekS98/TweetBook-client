import React from 'react';
import Chip from '@material-ui/core/Chip';
import { useHistory } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import FaceIcon from '@material-ui/icons/Face';
import '../styling/main.css';

export default ({post}) => {
    const history = useHistory();
    const user = {...post.user};
    return (
        <div className="message-card">
            <p className="post-text">{post.text}</p>
            <Paper component="ul" className="msgcard-info">
                <Chip label={new Date(post.updatedAt).toDateString()} />
                <Chip 
                  avatar={user.profileImgUrl ? <Avatar alt={user.username} src={user.profileImgUrl} /> : <FaceIcon />}
                  onClick={() => history.push(`/user/${user._id}`)}
                  label={user.username}
                />
            </Paper>
        </div>
    )
}