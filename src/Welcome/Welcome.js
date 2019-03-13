import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";
import "bootstrap/dist/css/bootstrap.css";

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <div className="col-md-12 main">
          <div className="row justify-content-center">
            <div className="col-md-6 col-sm-8 col-xs-8 col-md-offset-3 col-sm-offset-2 col-xs-offset-2">
              <p>Welcome to the dinner planner React Startup code!</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-sm-8 col-xs-8 col-md-offset-3 col-sm-offset-2 col-xs-offset-2">
              <Link to="/search">
                <button id="createNewPlanBtn" className="btn1 padding">
                  Start planning
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
