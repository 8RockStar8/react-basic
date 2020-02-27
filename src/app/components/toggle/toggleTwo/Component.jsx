import React, { Component } from 'react';

import './component.css';

class ToggleTwo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='toggle-two' style={{color: this.props.isToggleTwo === false ? '#fff' : '#000'}} onClick={this.props.toggle}>
                <p>Toggle Two</p>
            </div>
        )
    }
}

export default ToggleTwo;
