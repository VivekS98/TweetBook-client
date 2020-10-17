import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Dialog from '@material-ui/core/Dialog';
import FaceIcon from '@material-ui/icons/Face';
import Avatar from '@material-ui/core/Avatar';
import '../styling/main.css';

export default ({show, followers, following}) => {
    const [open, setOpen] = useState(true);

    let display = null;

    if(show === "following") {
        display = following.map((item, index) => {
            return <div key={index} style={{display: 'flex', flexDirection: 'row'}}>
                {
                 item.profileImgUrl ?
                 <Avatar alt="Remy Sharp" src={item.profileImgUrl} /> :
                 <FaceIcon /> 
                }
                <h2>{item.username}</h2>
            </div>
        });
    }
    if(show === "followers") {
        display = followers.map((item, index) => {
            return <div key={index} style={{display: 'flex', flexDirection: 'row'}}>
                {
                 item.profileImgUrl ?
                 <Avatar alt="Remy Sharp" src={item.profileImgUrl} /> :
                 <FaceIcon /> 
                }
                <h2>{item.username}</h2>
            </div>
        });
    }

    const handleClose = () => {
        setOpen(false);
    };
    return <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <Fab 
            component="button" 
            className="add-icon"
            color="primary" 
            onClick={handleClose}
        >
            <ArrowBackIcon />
        </Fab>
        {display}
    </Dialog>
}