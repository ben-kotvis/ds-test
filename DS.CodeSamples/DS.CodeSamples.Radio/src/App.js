import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <form className="k-form">
        <div className="k-form-field">
          <h1>RadioButtons</h1>
          <input className="k-radio" id="radio1" name="radios" type="radio" />
          <label className="k-radio-label" htmlFor="radio1">
            RadioButton 1
          </label>
          <input className="k-radio" id="radio2" name="radios" type="radio" />
          <label className="k-radio-label" htmlFor="radio2">
            RadioButton 2
          </label>
          <input className="k-radio" id="radio3" name="radios" type="radio" />
          <label className="k-radio-label" htmlFor="radio3">
            RadioButton 3
          </label>
        </div>
      </form>
    );
  }
}

export default App;
