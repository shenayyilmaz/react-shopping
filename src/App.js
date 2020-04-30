import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import "./pages/homepage/homepage.styles.scss";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
