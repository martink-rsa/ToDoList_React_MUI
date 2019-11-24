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
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Rating from "@material-ui/lab/Rating";
import Input from "@material-ui/core/Input";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function ProjectDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();
  };

  const handleChange = (event) => {
    // Update the todo
    // 1. Take a copy of the current todo
    /*     const updatedTodo = {
      ...props.todo,
      // Match the key with the "name" property of the control
      [event.currentTarget.name]: event.currentTarget.value,
    };
    props.updateTodo(index, updatedTodo); */
  };

  const handleSelect = (event) => {
    /*     const updatedTodo = {
      ...props.todo,
      // Match the key with the "name" property of the control
      [event.target.name]: parseInt(event.target.value, 10),
    };
    props.updateTodo(index, updatedTodo); */
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
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title" align="center">
            Settings
          </DialogTitle>
          <DialogContent>
            <FormControl margin="normal" fullWidth>
              <TextField
                autoFocus
                required
                id="standard-required1"
                name="title"
                label="Title"
                // className={classes.textField}
                margin="normal"
                value={props.project.title}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <TextField
                required
                id="standard-required2"
                name="desc"
                label="Description"
                // className={classes.textField}
                margin="normal"
                value={props.project.desc}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel id="project-simple-select-label">Project</InputLabel>
              <Select
                name="icon"
                labelId="icon-simple-select-label"
                id="icon-simple-select"
                value={props.project.icon}
                onChange={handleSelect}
              >
                {Object.keys(props.projectIcons).map((key, iconIndex) => (
                  <MenuItem key={key} value={iconIndex}>
                    <Box component="span" pr={1} my="auto">
                      <Icon>{props.projectIcons[iconIndex]}</Icon>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              // className={classes.submit}
              // onSubmit={handleClose}
            >
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </span>
  );
}
