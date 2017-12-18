import React from "react";

class NewListForm extends React.Component {
  state = {
    name: "",
    description: ""
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createList(this.state);
    this.setState({ name: "", description: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          List Name:
          <input
            onChange={this.changeHandler}
            type="name"
            name="name"
            value={this.state.name}
          />
        </label>
        <br />
        <label>
          List Description:
          <input
            onChange={this.changeHandler}
            type="description"
            name="description"
            value={this.state.description}
          />
        </label>
        <input type="submit" />
      </form>
    );
  }
}

export default NewListForm;
