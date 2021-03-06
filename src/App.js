import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navbar from './Organisms/Navbar/navbar';
import LeftBar from './Molecules/LeftBar';
import RightBar from './Molecules/RightBar';
import About from './Organisms/About/index';
import Tasks from './Organisms/Tasks';
import Routes from './Routes/routes';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const spaceBelowNavStyle = {
  marginTop: '70px'
};

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: '',
      list: []
    }
  }

  render() {
    return (
      <Fragment className="layout-wrapper layout-static">

        <Navbar> </Navbar>


        <Row style={spaceBelowNavStyle} >
          <LeftBar />
          <Col sm={12} xl={10}>
            <Router>
              <Route path="/" exact component={Tasks} />
              <Route path="/tasks/" component={Tasks} />
              <Route path="/about/" component={About} />
            </Router>
          </Col>
          {/* <Col sm={12} xl={2} style={{ backgroundColor: '#f4f4f4'}}>
            <RightBar />
          </Col> */}
        </Row>
      </Fragment>

    )
  }
}

export default App;

