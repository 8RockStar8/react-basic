import React from 'react';

import ToggleOne from './toggleOne';
import ToggleTwo from './toggleTwo';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOne: true,
            isToggleTwo: false
        }
    }

    handleToggle = () => {
        this.setState({
            isToggleOne: !this.state.isToggleOne,
            isToggleTwo: !this.state.isToggleTwo
        });
    }

    render() {
        return(
            <div>
                <ToggleOne isToggleOne={this.state.isToggleOne} toggle={this.handleToggle} />
                <ToggleTwo isToggleTwo={this.state.isToggleTwo} toggle={this.handleToggle} />
            </div>
        )
    }
}

export default Toggle;
