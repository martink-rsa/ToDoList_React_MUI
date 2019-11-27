import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import theme from "../../theme";
import { getListName } from "../../helpers";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Paper, Typography, Button } from "@material-ui/core";

class ListPicker extends React.Component {
  myInput = React.createRef();

  goToList = (event) => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. get the text from that input
    const listName = this.myInput.current.value;
    // 3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/list/${listName}`);
  };

  render() {
    return (
      <>
        <ThemeProvider theme={createMuiTheme(theme)}>
          <CssBaseline />
          <Container maxWidth="sm">
            <Grid
              container
              direction="column"
              justify="center"
              style={{ minHeight: "100vh" }}
            >
              <Box>
                <Paper align="center">
                  <form onSubmit={this.goToList} className="List-form">
                    <Grid
                      container
                      spacing={3}
                      direction="column"
                      alignItems="center"
                      justify="center"
                      className="List-grid"
                    >
                      <Grid item xs={12} spacing={3}>
                        <Typography variant="h4" component="h2">
                          To Do List
                        </Typography>
                      </Grid>
                      <Grid item xs={12} spacing={3}>
                        <input
                          type="text"
                          ref={this.myInput}
                          required
                          placeholder="To Do List"
                          defaultValue={getListName()}
                        />
                      </Grid>
                      <Grid item xs={12} spacing={3}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                        >
                          Enter
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Paper>
              </Box>
            </Grid>
          </Container>
        </ThemeProvider>
      </>
    );
  }
}

ListPicker.propTypes = {
  history: PropTypes.object.isRequired,
};
export default ListPicker;
