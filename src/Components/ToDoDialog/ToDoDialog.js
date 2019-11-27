import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Box";
import EditIcon from "@material-ui/icons/Edit";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Icon from "@material-ui/core/Icon";
import { format } from "date-fns";

export default function ToDoDialog(props) {
  const [open, setOpen] = React.useState(false);
  // Chad's suggestion. Implement this once you've got everything working:
  // const { index: { index }, todo: { title, desc, dateEnd, projectId, priority } } = props;
  const {
    todo: { title, desc, dateEnd, priority, projectKey },
    projects,
    index,
    projectIcons,
    updateTodo,
  } = props;

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
    const updatedTodo = {
      ...props.todo,
      // Match the key with the "name" property of the control
      [event.currentTarget.name]: event.currentTarget.value,
    };
    updateTodo(index, updatedTodo);
  };

  const handleSelect = (event) => {
    const updatedTodo = {
      ...props.todo,
      // Match the key with the "name" property of the control
      // [event.target.name]: parseInt(event.target.value, 10),
      [event.target.name]: event.target.value,
    };
    updateTodo(index, updatedTodo);
  };

  const handleDateChange = (date) => {
    const updatedTodo = {
      ...props.todo,
      // Match the key with the "name" property of the control
      dateEnd: format(date, "MM/dd/yyyy"),
    };
    updateTodo(index, updatedTodo);
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
                margin="normal"
                value={title}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <TextField
                required
                id="standard-required2"
                name="desc"
                label="Description"
                margin="normal"
                value={desc}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel id="project-simple-select-label">Project</InputLabel>
              <Select
                name="projectKey"
                labelId="project-simple-select-label"
                id="project-simple-select"
                value={projectKey}
                onChange={handleSelect}
              >
                {console.log(projects)}
                {Object.keys(projects).map((key) => (
                  <MenuItem key={key} value={key}>
                    <Box component="span" pr={1} my="auto">
                      <Icon>{projectIcons[projects[key].icon]}</Icon>
                    </Box>
                    {projects[key].title}
                  </MenuItem>
                ))}
                {/* {Object.keys(projects).map((key) => (
                  <MenuItem key={key} value={key}>
                    <Box component="span" pr={1} my="auto">
                      {projects[key] !== undefined && projects[key] !== null ? (
                        <Icon>{projectIcons[projects[key].icon]}</Icon>
                      ) : (
                        <Icon>{projectIcons[0]}</Icon>
                      )}
                    </Box>
                    {projects[key].title}
                  </MenuItem>
                ))} */}
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
                  value={dateEnd}
                  onChange={handleDateChange}
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
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onSubmit={handleClose}
            >
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </span>
  );
}

ToDoDialog.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
    dateEnd: PropTypes.string,
    completed: PropTypes.bool,
    priority: PropTypes.number,
    projectKey: PropTypes.string,
  }).isRequired,
  projects: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
    icon: PropTypes.number,
    color: PropTypes.string,
  }).isRequired,
  index: PropTypes.string.isRequired,
  projectIcons: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateTodo: PropTypes.func.isRequired,
};
