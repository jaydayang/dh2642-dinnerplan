import React, { Component } from "react";
import "./Sidebar.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form
} from "reactstrap";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    // we put on state the properties we want to use and modify in the component
    this.state = {
      numberOfGuests: this.props.model.getNumberOfGuests(),
      menu: this.props.model.getFullMenu(),
      totalPrice: this.props.model.getTotalMenuPrice(),
      isOpen: true
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  // this methods is called by React lifecycle when the
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to setup model observer
  componentDidMount() {
    this.props.model.addObserver(this);
  }

  // this is called when component is removed from the DOM
  // good place to remove observer
  componentWillUnmount() {
    this.props.model.removeObserver(this);
  }

  // in our update function we modify the state which will
  // cause the component to re-render
  update() {
    this.setState({
      numberOfGuests: this.props.model.getNumberOfGuests(),
      //numberOfGuests: 0,
      menu: this.props.model.getFullMenu(),
      totalPrice: this.props.model.getTotalMenuPrice()
    });
  }

  // our handler for the input's on change event
  onNumberOfGuestsChanged = e => {
    this.props.model.setNumberOfGuests(e.target.value);
  };

  countDishPrice(dish) {
    let dishPrice = 0;
    dish.extendedIngredients.map(ingredient => (dishPrice += 1));

    return dishPrice;
  }

  render() {
    var dishrow = this.state.menu.map(dish => (
      <tr key={dish.id.toString()}>
        <td>{dish.title}</td>
        <td>{this.countDishPrice(dish)}</td>
      </tr>
    ));

    return (
      <Container>
        <Navbar color="light" light expand="md">
          <p>
            <NavbarBrand href="/">Dinner Planner</NavbarBrand>
          </p>
          <NavbarToggler>SEK{this.state.totalPrice}</NavbarToggler>
          <NavbarToggler onClick={this.toggle} aria-expanded="false" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="info" navbar>
              <NavItem>
                <div className="info">
                  People
                  <input
                    type="number"
                    value={this.state.numberOfGuests}
                    onChange={this.onNumberOfGuestsChanged}
                  />
                  <table className="wholetable2">
                    <thead>
                      <tr>
                        <th>Dish</th>
                        <th>Cost</th>
                      </tr>
                    </thead>
                    <tbody>{dishrow}</tbody>
                  </table>
                  <p> Cost:{this.state.totalPrice}</p>
                  <Link to="/overview">
                    <button id="confirmBtn" className="btn3">
                      Confirm Dinner
                    </button>
                  </Link>
                </div>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default Sidebar;
