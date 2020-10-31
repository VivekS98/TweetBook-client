import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';

export default function FormDialog({ editProfile }) {
  const [open, setOpen] = useState(false);
  const [bio, setBio] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    editProfile(bio);
    setOpen(false);
  };

  return (
    <div>
      <Button 
        component="button"
        onClick={handleClickOpen}
        style={{ padding: '15px', margin: 'auto 0', borderRadius: '50%' }}
        variant="contained">
        <EditIcon />
      </Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Profile:</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Edit the Bio:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Describe yourself"
            type="text"
            onChange={(e) => setBio(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
