import React, { Component } from "react";

// import "@progress/kendo-ui";
// import { Slider } from "@progress/kendo-inputs-react-wrapper";

import { SliderComponent } from "@syncfusion/ej2-react-inputs";

class App extends Component {
  render() {
    return (
      <div className="m-8">
        <h1>Sliders</h1>
        {/* <Slider /> */}
        <SliderComponent value={30} />
      </div>
    );
  }
}

export default App;
