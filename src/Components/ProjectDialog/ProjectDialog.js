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
  // Chad's suggestion. Implement this once you've got everything working:
  // const { index: { index }, todo: { title, desc, dateEnd, projectId, priority } } = props;
  // const { title, desc, dateEnd, projectId, priority } = props.todo;
  // const { index } = props;

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

  const testFunc = () => {};

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
        {/* <form noValidate autoComplete="off" onSubmit={() => handleSubmit}> */}
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
            {/* <FormControl margin="normal" required fullWidth>
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
                name="projectId"
                labelId="project-simple-select-label"
                id="project-simple-select"
                value={props.todo.projectId}
                onChange={handleSelect}
              >
                {Object.keys(props.projects).map((key, projectIndex) => (
                  <MenuItem key={key} value={projectIndex}>
                    <Box component="span" pr={1} my="auto">
                      <ProjectIcon
                        project={
                          props.projects[
                            Object.keys(props.projects)[projectIndex]
                          ]
                        }
                      />
                    </Box>
                    {props.projects[key].title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl margin="normal" fullWidth>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  name="dateEnd"
                  id="todo-edit-date-end"
                  label="Due date"
                  // value={selectedDate}
                  // onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel id="priority-simple-select-label">
                Priority
              </InputLabel>
              <Select
                labelId="priority-simple-select-label"
                id="priority-simple-select"
                name="priority"
                // onChange={event => handlePriorityChange(event)}
                value={priority}
                onChange={handleSelect}
              >
                <MenuItem value={0} name="stars0">
                  <StarBorderIcon />
                  <StarBorderIcon />
                  <StarBorderIcon />
                </MenuItem>
                <MenuItem value={1} name="stars1">
                  <StarIcon />
                  <StarBorderIcon />
                  <StarBorderIcon />
                </MenuItem>
                <MenuItem value={2} name="stars2">
                  <StarIcon />
                  <StarIcon />
                  <StarBorderIcon />
                </MenuItem>
                <MenuItem value={3} name="stars3">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </MenuItem>
              </Select>
            </FormControl> */}
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
