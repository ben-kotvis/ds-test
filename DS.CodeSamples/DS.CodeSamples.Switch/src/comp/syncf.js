import React, { Component } from "react";

import { SwitchComponent } from "@syncfusion/ej2-react-buttons";
import "../../node_modules/bm-malt-css/syncfusion-theme.css";
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);
class Syncf extends Component {
  render() {
    return (
      <div>
        <h1>Switch syncfusion</h1>
        <SwitchComponent />
      </div>
    );
  }
}

export default Syncf;
