import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Rating from "@material-ui/lab/Rating";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <span>
      <IconButton edge="end" onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" align="center">
          Settings
        </DialogTitle>
        <DialogContent>
          {/*           <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="todo-title"
            label="Title"
            fullWidth
          />
          <TextField
            margin="dense"
            id="todo-desc"
            label="Description"
            fullWidth
          />
          <FormControl margin="normal" required fullWidth>
            <InputLabel id="project-simple-select-label">Project</InputLabel>
            <Select
              labelId="project-simple-select-label"
              id="project-simple-select"
              // onChange={handleChange}
              // value={project}
              // onChange={handleProjectChange}
            >
              {/* {projects.map((project, index) => (
                <MenuItem key={project.objectID} value={index}>
                  {project.title}
                </MenuItem>
              ))} */}
            </Select>
          </FormControl>
          <Rating
            name="simple-controlled"
            label="Email address"
            /*               value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }} */
          />
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose} color="primary">
            Cancel
          </Button> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            // className={classes.submit}
            // onClick={handleClose}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </span>
  );
}
