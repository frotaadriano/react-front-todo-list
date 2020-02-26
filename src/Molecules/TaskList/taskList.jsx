import 'react-confirm-alert/src/react-confirm-alert.css';
import React, { Component } from 'react'

import { Button } from 'primereact/button';
import ButtonRB from 'react-bootstrap/Button'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Line from './../../Atoms/Line/line';
import { InputText } from 'primereact/inputtext';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { done, undone, remove, search, changeValue, update } from './taskListActions';



const InputEdit = styled(InputText)`
    width: 100%;
    background: #eef6f7;
    margin: 0;
    padding: 3px;
    border-color: #007ad93b;
    `
const ContainerButtons = styled.div`
    width: 100%;
    margin: 0;  
    `

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            idEditing: -1,
            content: ''
        };
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleCancelClick = this.handleCancelClick.bind(this);

    }


    handleEditClick(index, content) {
        this.setState({
            idEditing: index,
            content: content
        })
    }

    handleCancelClick() {
        this.setState({ idEditing: -1 })
    }

    changeContent(ev) { 
        this.setState({ content: ev.target.value }) 
    }

    componentWillMount() {
        this.props.search();
    }

    /**Show/Hide Edit field when able to */
    toggleEditField(index, task) {

  //////      parei aqui
        // if( this.state.idEditing === index){
        //     this.setState({
        //         content: task.content
        //     }) 
        // }


        return (
            this.state.idEditing === index
                ?
                <InputEdit ClassName="EditField" id="in" value={task.content}  //onChange={this.changeContent}
                  />
                :
                task.content
        )
    }

    renderRows = () => {
        return (
            this.props.list.map((task, index) => (
                <Row id="ItemDaLista">
                    <Col sm={1} xl={1}>
                        <i className="pi pi-tag" style={{ 'fontSize': '2em' }}></i>
                    </Col>
                    <Col sm={2} xl={1}>
                        {
                            !task.is_done && this.state.idEditing !== index &&
                            <Button label="Done" className="p-button-raised  p-button-secondary" onClick={() => { this.props.done(task) }} />
                        }

                    </Col>
                    <Col sm={9} xl={7} key={task._id}>

                        {this.toggleEditField(index, task)}

                        <Line />
                    </Col>
                    <Col sm={12} xl={3}>

                        {

                            this.state.idEditing === index
                                ?
                                <ContainerButtons>
                                    <Button label="up" icon="pi pi-save" className="p-button-raised p-button-info"
                                        onClick={() => { this.props.update(task, this.state.content) }} />
                                    &nbsp;
                                    <Button label="Cancel" icon="pi pi-replay" className="p-button-raised p-button-alert"
                                        onClick={() => { this.handleCancelClick() }}
                                    />
                                </ContainerButtons>
                                :
                                (
                                    task.is_done
                                        ?
                                        <ButtonRB variant="success" onClick={() => { this.props.undone(task) }} size="sm"> UnDone? </ButtonRB>
                                        :
                                        (
                                            <ContainerButtons>
                                                <Button label="Edit" icon="pi pi-pencil" className="p-button-raised  p-button-secondary"
                                                    onClick={() => { this.handleEditClick(index) }} />
                                                &nbsp;
                                                <Button label="Delete" icon="pi pi-trash" className="p-button-raised p-button-warning"
                                                    onClick={() => { this.setState({ idEditing: -1 }); this.props.remove(task._id) }} />
                                            </ContainerButtons>
                                        )
                                )
                        }
                        <br /> <br />
                    </Col>

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
        changeValue, update, remove, search, done, undone
    }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
