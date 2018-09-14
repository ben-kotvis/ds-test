import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <form className="k-form">
          <div className="k-form-field">
            <h1>RadioButtons</h1>
            <br />
            <br />
            <input className="k-radio" id="radio1" name="radios" type="radio" />
            <label className="k-radio-label" htmlFor="radio1">
              RadioButton 1
            </label>
            <br />
            <br />
            <input className="k-radio" id="radio2" name="radios" type="radio" />
            <label className="k-radio-label" htmlFor="radio2">
              RadioButton 2
            </label>
            <br />
            <br />
            <input className="k-radio" id="radio3" name="radios" type="radio" />
            <label className="k-radio-label" htmlFor="radio3">
              RadioButton 3
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
