import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="k-ripple-container">
        <h1>Checkboxes</h1>
        <input className="k-checkbox" id="checkbox1" type="checkbox" />
        <label className="k-checkbox-label" htmlFor="checkbox1">
          Android
        </label>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>

        <input className="k-checkbox" id="checkbox2" type="checkbox" />
        <label className="k-checkbox-label" htmlFor="checkbox2">
          iOS
        </label>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>

        <input className="k-checkbox" id="checkbox3" type="checkbox" />
        <label className="k-checkbox-label" htmlFor="checkbox3">
          Windows Phone
        </label>
      </div>
    );
  }
}

export default App;
