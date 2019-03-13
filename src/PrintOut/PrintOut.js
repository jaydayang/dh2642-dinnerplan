import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Headbar from "../Headbar/Headbar";
import "./PrintOut.css";
class PrintOut extends Component {
  constructor(props) {
    super(props);
    // We create the state to store the various statuses
    // e.g. API data loading or error
    this.state = {
      menu: this.props.model.getFullMenu()
    };
  }
  render() {
    let printList = null;
    printList = this.state.menu.map((dish, index) => (
      <Row key={index}>
        <Col lg="3" xs="12">
          <img src={dish.image} alt="" width="80%" />
        </Col>
        <Col lg="3" xs="12">
          <h3>{dish.title}</h3>
          <h4>{dish.sourceName}</h4>
        </Col>
        <Col lg="6" xs="12">
          <h3>Preperation</h3>
          <h4>{dish.instructions}</h4>
        </Col>
      </Row>
    ));
    return (
      <div className="PrintOut">
        <Headbar model={this.props.model} />
        <Container>{printList}</Container>
      </div>
    );
  }
}
export default PrintOut;
