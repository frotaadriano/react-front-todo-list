import React, { Component } from 'react';
import TaskList from '../../Molecules/TaskList/taskList';
import TaskHeader from '../../Molecules/TaskHeader/taskHeader';

import Col from "react-bootstrap/Col";



class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }
  render() {
    return (
      <Col id="ColunaMaisExterna" sm={12} xl={8} style={{ flexDirection: 'column' }}>
        <TaskHeader></TaskHeader>
        <TaskList></TaskList>
      </Col>
    );
  }
}

export default Tasks
 