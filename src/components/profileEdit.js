import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);
  const [bio, setBio] = useState(props?.bio || null);
  const [profilePic, setProfilePic] = useState(props?.profilePic || null);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    props.editProfile({ bio, profilePic });
    setOpen(false);
  };

  return (
    <>
      <Button 
        component="button"
        onClick={handleClickOpen}
        style={{ padding: '15px', margin: 'auto 0', borderRadius: '50%' }}
        variant="contained">
        <EditIcon />
      </Button>

      <Dialog maxWidth="md" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Profile:</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Edit the Bio:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={bio}
            label="Describe yourself"
            type="text"
            onChange={(e) => setBio(e.target.value)}
            fullWidth
          />
          <DialogContentText>
            Profile Picture:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={profilePic}
            label="Paste a link of nice picture"
            type="text"
            onChange={(e) => setProfilePic(e.target.value)}
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
    </>
  );
}
