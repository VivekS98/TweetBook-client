import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Chip } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import CircularProgress from "@material-ui/core/CircularProgress";
import "../styling/main.css";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const namesStyle = {
  display: "flex",
  flexDirection: "row",
  borderRadius: "20px",
  margin: "5px",
  padding: "5px",
  minWidth: "80px",
};

export default function CustomizedDialogs({ user }) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const [follow, setFollow] = useState(null);

  const handleClickOpen = (data, follow) => {
    setOpen(true);
    setData(data);
    setFollow(follow);
  };
  const handleClose = () => {
    setFollow("");
    setData(null);
    setOpen(false);
  };

  let showData = <CircularProgress />;
  if (data !== null) {
    showData = data.map((item, index) => {
      return (
        <div key={index} style={namesStyle}>
          <Avatar alt="Remy Sharp" src={item.profileImgUrl} />
          <h4 style={{ margin: "5px" }}>{item.username}</h4>
        </div>
      );
    });
  }

  return (
    <div>
      <div className="profile-row">
        <Chip
          component="div"
          style={{ padding: "10px", margin: "10px" }}
          label={`followers ${user?.followers?.length}`}
          onClick={() => handleClickOpen(user?.followers, "followers")}
        />
        <Chip
          componenet="div"
          style={{ padding: "10px", margin: "10px" }}
          label={`following ${user?.following?.length}`}
          onClick={() => handleClickOpen(user?.following, "Following")}
        />
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {follow}
        </DialogTitle>
        <DialogContent>{showData}</DialogContent>
      </Dialog>
    </div>
  );
}
