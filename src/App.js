import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";


class App extends Component {



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <button
            onClick={() => {
              const config = {
                responseType: "arraybuffer"
              };
              axios.get("http://localhost:5000/reports/hello",
                config)
                .then((res) => {
                  console.log("res", res.data);
                  const file = new Blob([res.data], { type: "application/pdf" });
                  const fileURL = URL.createObjectURL(file);
                  window.open(fileURL);
                });
            }}>Get Report </button>
        </p>
      </div >
    );
  }
}

export default App;
