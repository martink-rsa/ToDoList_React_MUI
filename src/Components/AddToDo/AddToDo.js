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
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Icon from "@material-ui/core/Icon";
import { format } from "date-fns";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import FormHelperText from "@material-ui/core/FormHelperText";

class AddToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      todo: {
        title: "",
        desc: "",
        priority: 0,
        dateBegin: format(new Date(), "MM/dd/yyyy"),
        dateEnd: format(new Date(), "MM/dd/yyyy"),
        completed: false,
        projectKey: "",
      },
      hasError: false,
    };
  }

  handleToggle = () => {
    this.setState((previousState) => ({ open: !previousState.open }));
  };

  handleSubmit = (event) => {
    const { todo } = this.state;
    const { projectKey } = todo;
    const { addTodo } = this.props;
    event.preventDefault();
    this.setState({ hasError: false });
    if (!projectKey) {
      this.setState({ hasError: true });
    } else {
      addTodo(todo);
      this.handleToggle();
    }
  };

  handleChange = (name) => ({ target: { value } }) => {
    this.setState((previousState) => {
      const todo = {
        ...previousState.todo,
        [name]: value,
      };
      return { todo };
    });
  };

  handleDateChange = (date) => {
    this.setState((previousState) => {
      const todo = {
        ...previousState.todo,
        dateEnd: format(date, "MM/dd/yyyy"),
      };
      return { todo };
    });
  };

  render() {
    const {
      // eslint-disable-next-line object-curly-newline
      todo: { title, desc, dateEnd, priority, projectKey },
      open,
      hasError,
    } = this.state;
    const { projects, projectIcons } = this.props;
    return (
      <span>
        <div className="fab-container">
          <Fab color="primary" aria-label="add" onClick={this.handleToggle}>
            <AddIcon />
          </Fab>
        </div>
        <Dialog
          open={open}
          onClose={this.handleToggle}
          aria-labelledby="form-dialog-title"
        >
          <form onSubmit={this.handleSubmit}>
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
                  onChange={this.handleChange("title")}
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
                  onChange={this.handleChange("desc")}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth error={hasError}>
                <InputLabel id="project-simple-select-label">
                  Project
                </InputLabel>
                <Select
                  name="projectKey"
                  labelId="project-simple-select-label"
                  id="project-simple-select"
                  value={projectKey}
                  onChange={this.handleChange("projectKey")}
                >
                  {Object.keys(projects).map((key) => (
                    <MenuItem key={key} value={key}>
                      <Box component="span" pr={1} my="auto">
                        <Icon>{projectIcons[projects[key].icon]}</Icon>
                      </Box>
                      {projects[key].title}
                    </MenuItem>
                  ))}
                </Select>
                {hasError && (
                  <FormHelperText>A project is required.</FormHelperText>
                )}
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
                    onChange={this.handleDateChange}
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
                  onChange={this.handleChange("priority")}
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
                onSubmit={this.handleSubmit}
              >
                Save
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </span>
    );
  }
}

AddToDo.propTypes = {
  projects: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
    icon: PropTypes.number,
    color: PropTypes.string,
  }).isRequired,
  addTodo: PropTypes.func.isRequired,
  projectIcons: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AddToDo;
