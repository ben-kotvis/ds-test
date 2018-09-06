import React, { Component } from "react";

import Kendo from "./comp/kendo";
import Syncf from "./comp/syncf";
import Syncf2 from "./comp/syncf2";

class App extends Component {
  render() {
    return (
      <div>
        <Kendo />
        <br />
        <Syncf />
        <br />
        <Syncf2 />
      </div>
    );
  }
}

export default App;
