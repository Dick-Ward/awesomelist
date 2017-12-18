import React, { Component } from "react";
import logo from "./components/bearwave.gif";
import "./App.css";
import NoteListContainer from "./containers/NoteListContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dick's Kickass Notes App</h1>
        </header>
        <NoteListContainer />
        <p className="App-intro" />
      </div>
    );
  }
}

export default App;
