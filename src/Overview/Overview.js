import React, { Component } from "react";
import "./Overview.css";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import Headbar from "../Headbar/Headbar";
import Dishes from "../Dishes/Dishes";
import { Link } from "react-router-dom";

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: this.props.model.getFullMenu(),
      totalprice: this.props.model.getTotalMenuPrice()
    };
  }

  render() {
    var overview = this.state.menu.map(dish => (
      <div className="meal" key={dish.id}>
        <Link to={"/dish/" + dish.id}>
          <img src={dish.image} className="imagegroup" />

          <div className="block"> {dish.title}</div>
        </Link>
      </div>
    ));
    console.log("price" + this.state.totalprice);

    return (
      <div className="OverView">
        <Headbar model={this.props.model} />
        <Container>
          <Row>
            <Col md={9} sm={3} xs={12}>
              {overview}
            </Col>
            <Col md={3} sm={3} xs={12}>
              <div className="price">
                <h3>Total Price:{this.state.totalprice} SEK</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12} sm={12} xs={12}>
              <div className="center">
                <Link to="/print">
                  <button id="printOutBtn" className="btn5">
                    Print Full Recipe
                  </button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Overview;
