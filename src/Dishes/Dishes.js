import React, { Component } from "react";
// Alternative to passing the moderl as the component property,
// we can import the model instance directly
import modelInstance from "../data/DinnerModel";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "./Dishes.css";
import loading from "../Image/loading.gif";
import error from "../Image/errorgif.gif";

class Dishes extends Component {
  constructor(props) {
    super(props);
    // We create the state to store the various statuses
    // e.g. API data loading or error
    this.state = {
      status: "LOADING"
    };
  }

  // this methods is called by React lifecycle when the
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to call the API and get the data
  componentDidMount(props) {
    console.log("dish" + this.props.type);

    // when data is retrieved we update the state
    // this will cause the component to re-render
    modelInstance
      .getAllDishes(this.props.type, this.props.filter)
      .then(dishes => {
        this.setState({
          status: "LOADED",
          dishes: dishes.results
        });
      })
      .catch(() => {
        this.setState({
          status: "ERROR"
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    // only update chart if the data has changed
    if (
      prevProps.type !== this.props.type ||
      prevProps.filter !== this.props.filter
    ) {
      modelInstance
        .getAllDishes(this.props.type, this.props.filter)
        .then(dishes => {
          this.setState({
            status: "LOADED",
            dishes: dishes.results
          });
        })
        .catch(() => {
          this.setState({
            status: "ERROR"
          });
        });
    }
  }

  render() {
    let dishesList = null;

    // depending on the state we either generate
    // useful message to the user or show the list
    // of returned dishes
    switch (this.state.status) {
      case "LOADING":
        //dishesList = <em>Loading...</em>;
        dishesList = <img src={loading} alt="loading" />;
        break;
      case "LOADED":
        dishesList = this.state.dishes.map(dish => (
          <div className="meal" key={dish.id}>
            <Link to={"/dish/" + dish.id}>
              <img src={dish.image} className="imagegroup" />

              <div className="block"> {dish.title}</div>
            </Link>
          </div>
        ));
        console.log(this.state.dishes);
        console.log("dish de fileter" + this.props.filter + this.props.type);
        break;
      default:
        dishesList = (
          <div>
            <img src={error} alt="error" />
            <p>Failed to load data, please try again</p>
          </div>
        );
        break;
    }

    return (
      <div className="Dishes">
        <h3>Dishes</h3>
        <ul>{dishesList}</ul>
      </div>
    );
  }
}

export default Dishes;
