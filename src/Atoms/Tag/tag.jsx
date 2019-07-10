import React, { Component } from 'react';
import styled from 'styled-components';

const DivMenuItem = styled.div` 
    padding: 3px;
    border: solid 1px #d6d0d0;
    border-radius: 5px;
    margin: 11px;
    font-size: 12px;
    background-color: #e3e3e336;
`

class Tag extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        const iconColor = this.props.color ? this.props.color : 'blue';
        return (
            <DivMenuItem>
                <i class="pi pi-circle-on" style={{ marginRight: '8px', fontSize: '1em', color: iconColor }}></i>
                {this.props.name ? this.props.name : 'Tag no name'}
            </DivMenuItem>
        );
    }
}

export default Tag;
