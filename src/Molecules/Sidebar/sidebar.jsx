import React from 'react';
 
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





