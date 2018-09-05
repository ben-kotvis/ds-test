import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="k-ripple-container">
        <h1>RadioButtons</h1>
        <input className="k-radio" id="radio1" name="radios" type="radio" />
        <label className="k-radio-label" htmlFor="radio1">
          Android
        </label>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>

        <input className="k-radio" id="radio2" name="radios" type="radio" />
        <label className="k-radio-label" htmlFor="radio2">
          iOS
        </label>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>

        <input className="k-radio" id="radio3" name="radios" type="radio" />
        <label className="k-radio-label" htmlFor="radio3">
          Windows Phone
        </label>
      </div>
    );
  }
}

export default App;
