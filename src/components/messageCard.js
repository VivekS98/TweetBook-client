import React from 'react';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import '../styling/main.css';

export default (props) => {
    return (
        <div className="message-card">
            <p>{props.text}</p>
            <Paper component="ul" className="msgcard-info">
                
            </Paper>
        </div>
    )
}