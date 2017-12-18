import React from "react";

class EditDeleteForm extends React.Component {
  state = {
    name: this.props.name,
    description: this.props.description
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    const id = this.props.id;
    const name = this.state.name;
    const description = this.state.description;
    this.props.handlesEdit(id, { name, description });
  };

  render() {
    const id = this.props.id;
    return (
      <div style={{ padding: "20px" }}>
        <h3>Edit your list!</h3>
        <form>
          <label>
            Name:<input
              type="text"
              onChange={this.changeHandler}
              name="name"
              value={this.props.name}
            />
          </label>
          <br />
          <label>
            Description:<textarea
              rows="3"
              cols="30"
              onChange={this.changeHandler}
              name="description"
              value={this.props.description}
            />
          </label>
        </form>
        <br />
        <div className="ui buttons">
          <button
            className="ui button"
            onClick={this.handleSubmit}
            style={{ backgroundColor: "green", color: "white" }}
          >
            EDIT
          </button>
          <div class="or" />
          <button
            className="ui button"
            style={{ backgroundColor: "red", color: "white" }}
            onClick={this.props.handlesDelete.bind(this, id)}
          >
            DELETE
          </button>
        </div>
      </div>
    );
  }
}

export default EditDeleteForm;
