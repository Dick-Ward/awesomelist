import React from "react";
import NewListForm from "./NewListForm";
import NoteList from "../components/NoteList";
import EditDeleteForm from "./EditDeleteForm";

class FormContainer extends React.Component {
  state = {
    form: (
      <NewListForm
        toggleForms={this.toggleForms}
        createList={this.props.createList}
      />
    )
  };

  handleSingleSelect = event => {
    this.props.getList(event);
    const description = event.target.attributes.description.nodeValue;
    this.setState({
      form: (
        <div>
          <button
            style={{
              backgroundColor: "grey",
              color: "white",
              padding: "15px"
            }}
            onClick={this.handlesFullSelect}
          >
            See All Lists
          </button>
          <EditDeleteForm
            description={description}
            id={event.target.id}
            name={event.target.name}
            handlesDelete={this.handlesDelete}
            handlesEdit={this.handlesEdit}
          />
        </div>
      )
    });
  };

  handlesFullSelect = event => {
    this.props.getFullList();
    this.setState({
      form: (
        <NewListForm
          toggleForms={this.toggleForms}
          createList={this.props.createList}
        />
      )
    });
  };

  handlesDelete = id => {
    this.props.deleteList(id);
    this.setState({
      form: (
        <NewListForm
          toggleForms={this.toggleForms}
          createList={this.props.createList}
        />
      )
    });
  };

  handlesEdit = (id, params) => {
    this.props.editList(id, params);
    this.setState({
      form: (
        <NewListForm
          toggleForms={this.toggleForms}
          createList={this.props.createList}
        />
      )
    });
  };

  render() {
    return (
      <div>
        <NoteList
          singleSelect={this.handleSingleSelect}
          getList={this.props.getList}
          noteArray={this.props.noteArray}
        />
        <div style={{ padding: "20px" }} />
        <div>{this.state.form}</div>
      </div>
    );
  }
}

export default FormContainer;
