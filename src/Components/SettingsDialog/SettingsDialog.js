import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import SettingsIcon from "@material-ui/icons/Settings";
import ThemeColorOptions from "../ThemeColorOptions/ThemeColorOptions";

export default function SettingsDialog(props) {
  const [open, setOpen] = React.useState(false);
  const { changeThemeColor, currentColor } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton edge="start" color="inherit" onClick={handleClickOpen}>
        <SettingsIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Settings</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>Color:</DialogContentText> */}
          {/* <Typography variant="h6" component="h1" gutterBottom>
            Theme Color:
          </Typography> */}
          <ThemeColorOptions
            changeThemeColor={changeThemeColor}
            currentColor={currentColor}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            fullWidth
            variant="contained"
            color="primary"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

SettingsDialog.propTypes = {
  changeThemeColor: PropTypes.func.isRequired,
  currentColor: PropTypes.string.isRequired,
};
