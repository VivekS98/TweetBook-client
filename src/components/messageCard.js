import React from 'react';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import FaceIcon from '@material-ui/icons/Face';
import '../styling/main.css';

export default ({post}) => {
    return (
        <div className="message-card">
            <p className="post-text">{post.text}</p>
            <Paper component="ul" className="msgcard-info">
                <Chip label={post.updatedAt} />
                <Chip 
                  avatar={post.profileImgUrl ? <Avatar alt={post.username} src={post.profileImgUrl} /> : <FaceIcon />}
                  clickable
                  label={post.user.username}
                />
            </Paper>
        </div>
    )
}