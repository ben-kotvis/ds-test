import React, { Component } from "react";
import { Button, ButtonGroup } from "@progress/kendo-react-buttons";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="a-col">
          <p>Button</p>
          <Button>Default</Button>
          <Button primary={true}>Primary</Button>
          <Button disabled={true}>Disabled</Button>
        </div>
        <div class="b-col">
          <p>ButtonGroup</p>
          <ButtonGroup>
            <Button togglable={true}>Option A</Button>
            <Button togglable={true}>Option B</Button>
            <Button togglable={true}>Option C</Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

export default App;
