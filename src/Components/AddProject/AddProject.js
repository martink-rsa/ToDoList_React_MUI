import React from "react";
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
import AddCircleIcon from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

class AddProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      project: {
        title: "",
        desc: "",
        icon: 0,
      },
    };
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addProject(this.state.project);
    this.handleToggle();
  };

  handleChange = (name) => ({ target: { value } }) => {
    this.setState({
      project: {
        ...this.state.project,
        [name]: value,
      },
    });
  };

  handleSelect = (name) => ({ target: { value } }) => {
    this.setState({
      project: {
        ...this.state.project,
        [name]: value,
      },
    });
  };

  render() {
    const {
      open,
      project: { title, desc, icon },
    } = this.state;
    return (
      <span>
        <div>
          {/*           <Fab
            color="primary"
            aria-label="add"
            // className={classes.fab}
            onClick={this.handleToggle}
          >
            <AddIcon />
          </Fab> */}
          <IconButton edge="end" aria-label="add" onClick={this.handleToggle}>
            <AddCircleIcon color="primary" />
          </IconButton>
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
                  value={icon}
                  onChange={this.handleSelect("icon")}
                >
                  {Object.keys(this.props.projectIcons).map(
                    (key, iconIndex) => (
                      <MenuItem key={key} value={iconIndex}>
                        <Box component="span" pr={1} my="auto">
                          <Icon>{this.props.projectIcons[iconIndex]}</Icon>
                        </Box>
                      </MenuItem>
                    ),
                  )}
                  {/*                   {Object.keys(this.props.projects).map((key, projectIndex) => (
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
                  ))} */}
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

export default AddProject;
