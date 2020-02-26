import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { search } from './../../Actions/tagActions';

import Tag from './../../Atoms/Tag/tag';
import styled from 'styled-components';
import Col from "react-bootstrap/Col";

const DivMenu = styled.div`
    padding:50px 0 0 30px;
`

class LeftBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount() {
        this.props.search();
    }

    render() {
        return (
            <Col sm={12} xl={2} style={{ backgroundColor: '#f4f4f4' }}>
                <DivMenu>
                    {

                        this.props.tagList.map(t =>
                            <Tag name={t.name} color={t.color ? t.color : ''} />
                        )

                    }
                </DivMenu>
            </Col>
        );
    }
}

const mapStateToProps = state => ({
    tagList: state.myTags.tagList
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ search }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LeftBar) 