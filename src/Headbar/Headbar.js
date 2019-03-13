import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Headbar.css";
import { Link } from "react-router-dom";

class Headbar extends Component {
  constructor(props) {
    super(props);
    // We create the state to store the various statuses
    // e.g. API data loading or error
    this.state = {
      numberOfGuests: this.props.model.getNumberOfGuests()
    };
  }
  render() {
    return (
      <div className="Headbar">
        <Container>
          <Row>
            <Col>
              <h3>MyDinner: {this.state.numberOfGuests} People</h3>
            </Col>
            <Col className="right">
              <Link to="/search">
                <button className="btn1 ">Go Back and Edit Dinner</button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Headbar;
