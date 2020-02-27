import React, { Component } from 'react';

import './component.css';

class ToggleOne extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='toggle-one' style={{color: this.props.isToggleOne === false ? '#fff' : '#000'}} onClick={this.props.toggle}>
                <p>Toggle One</p>
            </div>
        )
    }
}

export default ToggleOne;
