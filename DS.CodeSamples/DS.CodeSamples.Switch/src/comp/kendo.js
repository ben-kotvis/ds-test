import React, { Component } from "react";
import "../../node_modules/bm-malt-css/kendo-themed.css";
import "@progress/kendo-ui";
import { Switch } from "@progress/kendo-react-inputs";

class Kendo extends Component {
  render() {
    return (
      <div>
        <h1>Switch kendo</h1>
        <Switch />
      </div>
    );
  }
}

export default Kendo;
