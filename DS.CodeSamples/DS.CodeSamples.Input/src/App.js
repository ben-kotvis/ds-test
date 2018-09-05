import React, { Component } from "react";

import { NumericTextBoxComponent } from "@syncfusion/ej2-react-inputs";
class App extends Component {
  render() {
    return (
      <div className="m-8">
        <h1 className="App-title">Numeric TextBox</h1>
        <NumericTextBoxComponent value={10} />
      </div>
    );
  }
}

export default App;
