import React, { Component } from "react";
import { Route } from "react-router-dom";
import Welcome from "./Welcome/Welcome";
import modelInstance from "./data/DinnerModel";
import SelectDish from "./SearchDish/SearchDish";
import Detail from "./Detail/Detail";
import PrintOut from "./PrintOut/PrintOut";
import Overview from "./Overview/Overview";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Dinner Planner"
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.title}</h1>

          {/* We rended diffrent component based on the path */}
          <Route exact path="/" component={Welcome} />
          <Route
            path="/search"
            render={() => <SelectDish model={modelInstance} />}
          />
          <Route
            path="/detail/"
            render={() => <Detail model={modelInstance} />}
          />
          <Route
            path="/dish/:id"
            render={props => <Detail id={props} model={modelInstance} />}
          />
          <Route
            path="/print"
            render={() => <PrintOut model={modelInstance} />}
          />
          <Route
            path="/overview"
            render={() => <Overview model={modelInstance} />}
          />
        </header>
      </div>
    );
  }
}

export default App;
