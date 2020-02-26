import React, { Component } from 'react';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { keyPress, add } from './../TaskList/taskListActions';


class TaskHeader extends Component {
    constructor(props) {
        super(props);
        this.state = { inputTaskField: '' }
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(e) {
         //this.setState({ inputTaskField: '' })
        console.log(e);
        this.props.keyPress(e);  
        //.then(this.setState({ inputTaskField: '' }));
    }

    handleChange(e) {
        this.setState({ inputTaskField: e.target.value });
    }

    render() {
        return (
            // style={{marginLeft:'30%'}}
            <div >
                <span className="p-float-label">
                    <InputText id="in"
                        onKeyPress={()=>{this.handleKeyPress(window.event)}}
                        value={this.state.inputTaskField}
                        onChange={(e) => { this.handleChange(e) }}
                    />
                    <label htmlFor="in">Insert new Task</label>
                    &nbsp;&nbsp;
                    <Button label=""
                        tooltip="add new one!"
                        onClick={() => { this.props.add(this.state.inputTaskField); this.setState({ inputTaskField: '' }) }}
                        className="p-button-secondary"
                        icon="pi pi-plus-circle" />
                </span>
                <br />
            </div>

        );
    }
}


const mapStateToProps = state => ({ list: state.minhasTasks.list })

const mapDispatchToProps = (dispatch) => bindActionCreators({ keyPress, add }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TaskHeader)
