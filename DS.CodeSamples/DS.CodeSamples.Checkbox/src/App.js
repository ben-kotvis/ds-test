import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Checkboxes</h1>
        <br />
        <br />
        <div className="checkbox-control">
          <div className="row">
            <div
              className="e-checkbox-wrapper"
              role="checkbox"
              aria-checked="true"
            >
              <label for="checked">
                <input
                  id="checked"
                  type="checkbox"
                  class="e-control e-checkbox"
                />
                <span
                  class="e-ripple-container e-ripple-check e-ripple"
                  data-ripple="true"
                >
                  <div class="e-ripple-element" />
                </span>
                <span class="e-icons e-frame e-check" />
                <span class="e-label">CheckBox: true</span>
              </label>
            </div>
          </div>
          <div className="row">
            <div
              className="e-checkbox-wrapper e-checkbox-disabled"
              role="checkbox"
              aria-checked="true"
              aria-disabled="true"
            >
              <label for="disabled">
                <input
                  id="disabled"
                  type="checkbox"
                  class="e-control e-checkbox"
                  disabled=""
                />
                <span
                  class="e-ripple-container e-ripple-check"
                  data-ripple="true"
                />
                <span class="e-icons e-frame e-check" />
                <span class="e-label">Checked, Disabled</span>
              </label>
            </div>
          </div>
          <div className="row">
            <div
              className="e-checkbox-wrapper e-checkbox-disabled"
              role="checkbox"
              aria-checked="mixed"
              aria-disabled="true"
            >
              <label for="indeterminate">
                <input
                  id="indeterminate"
                  type="checkbox"
                  class="e-control e-checkbox"
                  disabled=""
                />
                <span
                  class="e-ripple-container e-ripple-stop"
                  data-ripple="true"
                />
                <span class="e-icons e-frame e-stop" />
                <span class="e-label">Indeterminate, Disabled</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
