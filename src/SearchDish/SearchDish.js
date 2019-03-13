import React, { Component } from "react";
import "./SearchDish.css";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import Dishes from "../Dishes/Dishes";
import Sidebar from "../Sidebar/Sidebar";

class SearchDish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishTypes: this.props.model.getAllTypes(),
      keyword: "",
      filter: ""
    };

    this.setKeywordHandler = this.setKeywordHandler.bind(this);
    this.setFilterHandler = this.setFilterHandler.bind(this);
  }

  setKeywordHandler(event) {
    this.setState({
      keyword: event.target.value
    });
  }

  setFilterHandler(event) {
    this.setState({
      filter: event.target.value
    });
  }

  searchHandler = () => {
    this.setState({
      filter: this.state.filter,
      keyword: this.state.keyword
    });
  };

  render() {
    var dishTypesRow = this.state.dishTypes.map(type => (
      <option key={type} value={type}>
        {type}
      </option>
    ));
    console.log("filter" + this.state.filter + this.state.keyword);

    return (
      <Container>
        <Row>
          <Col md="4" xs="12">
            <Sidebar model={this.props.model} />
          </Col>
          <Col md="8" xs="12">
            <h3>FIND A DISH</h3>

            <Row>
              <input
                id="selectText"
                type="text"
                placeholder="Search"
                value={this.state.keyword}
                onChange={this.setKeywordHandler}
              />

              <select
                id="selectType"
                placeholder="All"
                value={this.state.filter}
                onChange={this.setFilterHandler}
              >
                <option value="">All</option>
                {dishTypesRow}
              </select>

              <button
                id="searchBtn"
                className="btn2"
                value="Search"
                onClick={() => this.searchHandler()}
              >
                Search
              </button>
            </Row>
            <Row>
              <Dishes type={this.state.keyword} filter={this.state.filter} />
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SearchDish;
