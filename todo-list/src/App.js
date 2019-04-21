import React, { Component } from 'react';  
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Checkbox} from "primereact/checkbox";
import {RadioButton} from "primereact/radiobutton";

class App extends Component {
  render() {
    return (
      <div className="App">
         React works
         
         <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TODO APP</h1> 
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3 className="first">Teste Prime Component InputText</h3>
                    <div className="p-grid p-fluid">
                      <div className="p-col-12 p-md-4">
                        <div className="p-inputgroup">
                          <span className="p-inputgroup-addon">
                          <i className="pi pi-user"></i>
                          </span>
                          <InputText placeholder="Username" />
                        </div>
                      </div>
                    </div>
                </div> 
          </div> 
      </div>
    );
  }
}

export default App;
