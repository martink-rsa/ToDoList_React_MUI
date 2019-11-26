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
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

export default function ProjectDialog(props) {
  const [open, setOpen] = React.useState(false);
  const {
    project: { title, desc, icon },
    index,
    projectIcons,
    updateProject,
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
    // Update the project
    // 1. Take a copy of the current todo
    const updatedProject = {
      ...props.project,
      // Match the key with the "name" property of the control
      [event.target.name]: event.target.value,
    };
    updateProject(index, updatedProject);
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
                id="project-title-input"
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
                id="project-desc-input"
                name="desc"
                label="Description"
                margin="normal"
                value={desc}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel id="project-simple-select-label">Icon</InputLabel>
              <Select
                name="icon"
                labelId="icon-simple-select-label"
                id="icon-simple-select"
                value={icon}
                onChange={handleChange}
              >
                {Object.keys(projectIcons).map((key, iconIndex) => (
                  <MenuItem key={key} value={iconIndex}>
                    <Box component="span" pr={1} my="auto">
                      <Icon>{projectIcons[iconIndex]}</Icon>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Close
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </span>
  );
}

ProjectDialog.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
    icon: PropTypes.number,
    color: PropTypes.string,
  }).isRequired,
  index: PropTypes.string.isRequired,
  projectIcons: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateProject: PropTypes.func.isRequired,
};
