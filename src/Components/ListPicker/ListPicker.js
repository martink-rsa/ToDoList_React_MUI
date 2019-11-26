import React from "react";
import PropTypes from "prop-types";
import { getListName } from "../../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  static propTypes = {
    history: PropTypes.object,
  };

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
      <form onSubmit={this.goToList}>
        <h2>Please Enter A To Do List</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="To Do List"
          defaultValue={getListName()}
        />
        <button type="submit">Go to List →</button>
      </form>
    );
  }
}

export default StorePicker;
