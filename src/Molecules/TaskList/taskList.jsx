import 'react-confirm-alert/src/react-confirm-alert.css';
import React, { Component } from 'react'

import { Button } from 'primereact/button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Line from './../../Atoms/Line/line';
import { InputText } from 'primereact/inputtext';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { remove, search, changeValue, handleSaveClick, handleEditClick } from './taskListActions';


const URL = 'http://localhost:3003/api/todos';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            showList: true,
            toggleEditSave: true,
            idEditing: 0,
            selectedIdToEdit: -1
        };
        this.handleFinishClick = this.handleFinishClick.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle(id) {
        this.setState({ toggleEditSave: !this.state.toggleEditSave });
        if (this.state.toggleEditSave) {
            this.setState({
                idEditing: id,
                selectedIdToEdit: id
            })
        }
        else {
            this.setState({
                idEditing: 0,
                selectedIdToEdit: -1
            })
        }
    }

    handleFinishClick = () => {
        // console.log('fazer update')
    }

    assignItem = item => {
        // bound arrow function handler
        //console.log(item);
    }

    componentWillMount() {
        this.props.search();
    }

    renderRows = () => {
        return (
            this.props.list.map(task => (
                <Row id="ItemDaLista">
                    <Col sm={2} xl={2}>
                        <Button label="Finish" className="p-button-raised  p-button-secondary"
                            onClick={() => { this.handleFinishClick(task._id) }} />
                    </Col>
                    <Col sm={10} xl={7} key={task._id}>
                        {
                            this.state.idEditing == task._id ? <InputText id="in" value={task.content} /> : task.content
                        }
                        <Line />
                    </Col>
                    <Col sm={12} xl={3}>
                        {
                            this.state.idEditing == task._id
                                ?
                                <Button label="Save" className="p-button-raised p-button-info"
                                    // onClick={() => { this.handleSaveClick(task._id) }} 
                                    onClick={() => { this.props.handleSaveClick(task._id) }}
                                />
                                :
                                <Button label="Edit" className="p-button-raised  p-button-secondary"
                                    onClick={() => { this.props.handleEditClick(task._id) }} />
                        }
                        &nbsp;
                    <Button label="Delete" className="p-button-raised p-button-warning"
                            onClick={() => { this.props.remove(task._id) }} />
                    </Col>
                    <br /> <br />
                </Row>
            ))
        )
    }

    render() {
        console.log('minha lista', this.props.list)
        return (
            <div id="renderRows">
                {this.renderRows()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    list: state.minhasTasks.list
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        changeValue, handleSaveClick, remove,
        handleEditClick, search
    }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
