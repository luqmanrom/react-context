import React, { Component } from "react";
import { render } from "react-dom";
import ParentContext from "./ParentsContext.js";
import Container from "./Components/Container";
import state from "./globalState";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = state;
  }

  render() {
    const { primaryColor, secondaryColor, backgroundColor } = this.state.themes[
      this.state.activeTheme
    ];

    console.log(Object.keys(this.state.themes));

    return (
      <ParentContext.Provider value={this.state}>
        <div style={styles}>
          <div
            style={{
              backgroundColor: backgroundColor,
              color: primaryColor,
              padding: 10,
              margin: 20
            }}
          >
            Component on root
          </div>

          <Container />

          <select
            onChange={event => {
              this.setState({ activeTheme: event.target.value });
            }}
          >
            {Object.keys(this.state.themes).map(key => {
              return <option value={key}>{key}</option>;
            })}
          </select>
        </div>
      </ParentContext.Provider>
    );
  }
}

render(<App />, document.getElementById("root"));
