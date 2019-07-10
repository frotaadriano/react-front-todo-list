import 'react-confirm-alert/src/react-confirm-alert.css';
import React, { Component } from 'react'

import { Button } from 'primereact/button';
import ButtonRB from 'react-bootstrap/Button'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Line from './../../Atoms/Line/line';
import { InputText } from 'primereact/inputtext';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { done, undone, remove, search, changeValue, handleSaveClick, handleEditClick } from './taskListActions';


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
                    <Col sm={1} xl={1}>
                    <i class="pi pi-tag" style={{'fontSize': '2em'}}></i>
                    </Col>
                    <Col sm={2} xl={1}> 
                        {
                            task.is_done 
                            ?  
                            <ButtonRB variant="success" onClick={() => { this.props.undone(task) }} size="sm"> UnDone? </ButtonRB>
                            : <Button label="Done" className="p-button-raised  p-button-secondary"
                                onClick={() => { this.props.done(task) }} /> 
                        }  
                           
                    </Col>
                    <Col sm={9} xl={7} key={task._id}>
                        {
                            this.state.idEditing == task._id ? <InputText id="in" value={task.content} /> : task.content
                        }
                        <Line />
                    </Col>
                    <Col sm={12} xl={3}>
                        {
                            this.state.idEditing == task._id
                                ?
                                <Button label="Save" icon="pi pi-save" className="p-button-raised p-button-info" 
                                    onClick={() => { this.props.handleSaveClick(task._id) }}
                                />
                                :
                                <Button label="Edit" icon="pi pi-pencil" className="p-button-raised  p-button-secondary"
                                    onClick={() => { this.props.handleEditClick(task._id) }} />
                        }
                        &nbsp;
                    <Button label="Delete" icon="pi pi-trash" className="p-button-raised p-button-warning"
                            onClick={() => { this.props.remove(task._id) }} />
                    </Col>
                    <br /> <br />
                </Row>
            ))
        )
    }

    render() {
        //console.log('minha lista', this.props.list)
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
        handleEditClick, search, done, undone
    }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
