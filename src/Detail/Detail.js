import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Sidebar from "../Sidebar/Sidebar";
import error from "../Image/errorgif.gif";
import "./Detail.css";
import { Link } from "react-router-dom";

import modelInstance from "../data/DinnerModel";
// Alternative to passing the moderl as the component property,
// we can import the model instance directly

class Detail extends Component {
  constructor(props) {
    super(props);

    // We create the state to store the various statuses
    // e.g. API data loading or error
    this.state = {
      status: "LOADING",
      detailIndex: this.props.model.getDetailIndex(),
      dishId: this.props.id.match.params.id
    };
  }
  addToMenu() {
    modelInstance.addDishToMenu(this.state.detailDish);
  }
  update() {
    this.setState({
      numberOfGuests: this.props.model.getNumberOfGuests()
    });
  }
  onNumberOfGuestsChanged = e => {
    this.props.model.setNumberOfGuests(e.target.value);
  };
  componentWillUnmount() {
    this.props.model.removeObserver(this);
  }
  componentDidMount() {
    this.props.model.addObserver(this);

    // when data is retrieved we update the state
    // this will cause the component to re-render
    modelInstance
      .getDish(this.state.dishId)
      .then(detailDish => {
        console.log(detailDish);

        this.setState({
          status: "LOADED",
          detailDish: detailDish
        });
      })
      .catch(() => {
        this.setState({
          status: "ERROR"
        });
      });
  }

  render() {
    let detailDish = null;
    let dishTitle = null;
    let dishImage = null;
    let ingredientList = null;
    let dishDescrip = null;
    let subTitle = null;
    var price = 0;

    // depending on the state we either generate
    // useful message to the user or show the list
    // of returned dishes
    switch (this.state.status) {
      case "LOADING":
        detailDish = <em>Loading...</em>;
        break;
      case "LOADED":
        price = this.state.detailDish.extendedIngredients.length;

        dishTitle = <h3>{this.state.detailDish.title}</h3>;
        dishImage = (
          <img
            className="img"
            src={this.state.detailDish.image}
            width="80%"
            alt=""
          />
        );
        ingredientList = this.state.detailDish.extendedIngredients.map(
          ingredient => (
            <tr key={ingredient.id}>
              <td>
                {ingredient.amount * this.props.model.getNumberOfGuests()}
                {ingredient.unit}
              </td>
              <td>{ingredient.name}</td>
              <td>{1 * this.props.model.getNumberOfGuests()}</td>
              <td>SEK</td>
            </tr>
          )
        );
        subTitle = <h4>{this.state.detailDish.sourceName}</h4>;
        dishDescrip = <h4>{this.state.detailDish.instructions}</h4>;

        break;
      default:
        detailDish = <p>Failed to load data, please try again</p>;
        break;
    }

    return (
      <div className="Detail">
        <Container>
          <Row>
            <Col lg="4" xs="12">
              <Sidebar model={this.props.model} />
            </Col>
            <Col lg="4" xs="12">
              <h2>Dish Detail</h2>
              <div>{detailDish}</div>
              <div>{dishTitle}</div>
              <div>{dishImage}</div>
              <div>{subTitle}</div>
              <h3>Preperation</h3>
              <div>{dishDescrip}</div>
              <Link to="/search">
                <button className="btn1 padding2">Back to Search</button>
              </Link>
            </Col>
            <Col lg="4" xs="12">
              <div className="wholeTable">
                <h2 className="center">
                  Ingredients for{this.props.model.getNumberOfGuests()}People
                </h2>
                <table className="ingredientList">
                  <tbody>
                    {ingredientList}
                    <tr>
                      <td colSpan="2">
                        <button
                          onClick={() => this.addToMenu()}
                          className="btn1 padding2"
                        >
                          Add to Menu
                        </button>
                      </td>
                      <td>
                        Cost: {this.props.model.getNumberOfGuests() * price}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Detail;
