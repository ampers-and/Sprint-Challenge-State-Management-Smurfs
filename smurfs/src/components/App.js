import React, { Component } from "react";
import "./App.css";

import "semantic-ui-css/semantic.min.css";

import SmurfList from "./SmurfList";
import Form from "./Form";
// import SmurfForm from './SmurfForm'; //formik

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <Form />
        <SmurfList />
      </div>
    );
  }
}

export default App;
