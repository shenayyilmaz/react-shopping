import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import { Switch, Route } from "react-router-dom";
import "./pages/homepage/homepage.styles.scss";
import "./App.css";

const HatsPage = () => (
  <div>
    <h1>Hats PAGE</h1>
  </div>
);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
