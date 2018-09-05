import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="k-form">
        <div className="k-form-field">
          <h1>Checkboxes</h1>
          <input className="k-checkbox" id="checkbox1" type="checkbox" />
          <label className="k-checkbox-label" htmlFor="checkbox1">
            Checkbox 1
          </label>

          <input className="k-checkbox" id="checkbox2" type="checkbox" />
          <label className="k-checkbox-label" htmlFor="checkbox2">
            Checkbox 2
          </label>

          <input className="k-checkbox" id="checkbox3" type="checkbox" />
          <label className="k-checkbox-label" htmlFor="checkbox3">
            Checkbox 3
          </label>
        </div>
      </div>
    );
  }
}

export default App;
