import React, { Component } from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from "react-bootstrap/Nav";
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'

import Sidebar from "primereact/sidebar"
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { RadioButton } from "primereact/radiobutton";

export default class MySideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        }
    }
    render() {
        return (
            <div>
                <h1> sodebar works </h1>
            </div>

            // <Sidebar visible={this.state.visible}
            //     fullScreen={true}
            //     onHide={(e) => this.setState({ visible: false })}>
            //     Content
            // </Sidebar>

        )
    }
}





