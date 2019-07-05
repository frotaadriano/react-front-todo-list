import React, { Component } from 'react';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";


class TaskHeader extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }
    }
    render() {
        return (
            // style={{marginLeft:'30%'}}
            <div >
                <span className="p-float-label">
                    <InputText id="in"
                        onKeyPress={this.props.handleKeyPress}
                        value={this.props.value}
                        onChange={(e) => this.props.handleInputChange(e)} />
                    <label htmlFor="in">Insert new Task</label>
                    &nbsp;&nbsp;
                    <Button label=""
                    tooltip="add new one!"
                    onClick={this.handleClick}
                    className="p-button-secondary"
                    icon="pi pi-plus-circle" />
                </span>
                <br/>
            </div>

        );
    }
}

export default TaskHeader;
