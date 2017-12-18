import React from "react";
import FormContainer from "./FormContainer";
import axios from "axios";

class NoteListContainer extends React.Component {
  state = {
    lists: []
  };

  render() {
    return (
      <div>
        <FormContainer
          description={this.state.description}
          getList={this.getList}
          noteArray={this.state.lists}
          getFullList={this.getFullList}
          createList={this.createList}
          deleteList={this.deleteList}
          editList={this.editList}
        />
      </div>
    );
  }

  componentDidMount() {
    this.getFullList();
  }

  getList = event => {
    const id = event.target.id;
    axios
      .get(`http://localhost:3000/lists/${id}`)
      .then(list => this.setState({ lists: [list.data] }));
  };

  getFullList = () => {
    axios
      .get("http://localhost:3000/lists")
      .then(list => this.setState({ lists: list.data }));
  };
  createList = list_params => {
    axios
      .post("http://localhost:3000/lists", list_params)
      .then(list => this.setState({ lists: list.data }));
  };

  deleteList = id => {
    axios
      .delete(`http://localhost:3000/lists/${id}`)
      .then(list => this.setState({ lists: list.data }));
  };

  editList = (id, params) => {
    axios
      .patch(`http://localhost:3000/lists/${id}`, params)
      .then(list => this.setState({ lists: list.data }));
  };
}

export default NoteListContainer;
