import React, { Component } from "react";

import Kendo from "./comp/kendo";
import Syncf from "./comp/syncf";

class App extends Component {
  render() {
    return (
      <div>
        <Kendo />
        <br />
        <Syncf />
      </div>
    );
  }
}

export default App;
