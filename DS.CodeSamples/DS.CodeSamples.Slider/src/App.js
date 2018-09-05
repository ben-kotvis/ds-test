import React, { Component } from "react";
import "./App.scss";

import "@progress/kendo-ui";
import { Slider } from "@progress/kendo-inputs-react-wrapper";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Sliders</h1>
        <Slider />
      </div>
    );
  }
}

export default App;
