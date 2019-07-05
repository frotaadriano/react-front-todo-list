import React, { Component } from 'react'


const estiloLinhaListaDeTarefas = {
    color: 'grey',  
    width: '100%' ,
            
};

class Line extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <hr style={estiloLinhaListaDeTarefas}></hr> );
    }
} 

export default Line;