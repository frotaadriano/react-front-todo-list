import React, {Fragment} from 'react';
 import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Tasks from '../Organisms/Tasks';
import About from '../Organisms/About';

export default props => (
    <Fragment>
    <Route path="/" exact component={Tasks} />
    <Route path="/tasks/" component={Tasks} />
    <Route path="/about/" component={About} />
    </Fragment>
)