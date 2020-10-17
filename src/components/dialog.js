import React from 'react';
import Fab from '@material-ui/core/Fab';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Dialog from '@material-ui/core/Dialog';

export default ({show}) => {
    return <Dialog aria-labelledby="customized-dialog-title">
        <Fab 
            component="button" 
            className="add-icon"
            color="primary" 
            onClick={() => this.setState({dialog: false})}
        >
            <ArrowBackIcon />
        </Fab>
    </Dialog>
}