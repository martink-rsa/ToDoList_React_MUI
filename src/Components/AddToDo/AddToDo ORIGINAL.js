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
import { NativeSelect } from "@material-ui/core";

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
    };
  }

  /*   componentDidMount = () => {
    console.log("MOUNTING");
    console.log(this.props.projects);
    console.log(this.props.projectDefault);
    this.setState({
      todo: {
        ...this.state.todo,
        projectKey: Object.keys(this.props.projects)[0],
      },
    });
  }; */

  handleToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.todo);
    this.handleToggle();
  };

  handleChange = (name) => ({ target: { value } }) => {
    this.setState({
      todo: {
        ...this.state.todo,
        [name]: value,
      },
    });
  };

  handleSelect = (name) => ({ target: { value } }) => {
    this.setState({
      todo: {
        ...this.state.todo,
        [name]: value,
      },
    });
  };

  handleDateChange = (date) => {
    this.setState({
      todo: {
        ...this.state.todo,
        dateEnd: format(date, "MM/dd/yyyy"),
      },
    });
  };

  setDefaults = () => {
    this.setState({
      todo: {
        ...this.state.todo,
        projectKey: Object.keys(this.props.projects)[0],
      },
    });
  };

  render() {
    /* // Trying to set default but can't change state in render
    if (!this.state.todo.productKey && !Object.keys(this.props.projects)[0]) {
      this.setDefaults();
    } */
    const {
      open,
      todo: { title, desc, dateEnd, priority, projectKey },
    } = this.state;
    return (
      <span>
        <div>
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
                  // className={classes.textField}
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
                  // className={classes.textField}
                  margin="normal"
                  value={desc}
                  onChange={this.handleChange("desc")}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel id="project-simple-select-label">
                  Project
                </InputLabel>
                <Select
                  name="projectKey"
                  labelId="project-simple-select-label"
                  id="project-simple-select"
                  value={projectKey}
                  onChange={this.handleSelect("projectKey")}
                >
                  {Object.keys(this.props.projects).map((key, projectIndex) => (
                    <MenuItem key={key} value={key}>
                      <Box component="span" pr={1} my="auto">
                        <Icon>
                          {
                            this.props.projectIcons[
                              this.props.projects[key].icon
                            ]
                          }
                        </Icon>
                      </Box>
                      {this.props.projects[key].title}
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
                  onChange={this.handleSelect("priority")}
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
                // className={classes.submit}
                // onClick={handleClose}
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

/* AddToDo.defaultProps = {
  projectKey: projectDefault,
}; */

/* AddToDo.propTypes = {
  projectDefault: PropTypes.string.isRequired,
}; */

export default AddToDo;
