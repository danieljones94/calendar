import React, { Component } from "react";
import styles from "./App.module.scss";
import DancePage from "../DancePage";

class App extends Component {
  state = {};

  render() {
    return (
      <main>
        <DancePage />
      </main>
    );
  }
}

export default App;
