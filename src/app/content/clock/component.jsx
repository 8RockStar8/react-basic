import React from 'react';

import './component.css';

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.timer = setInterval(
            () => {
                this.tickTack()
            }, 1000
        )
        console.log('componentDidMount erb vor jam@ erevac kam texadrvec');
    }

    componentWillUnmount() {
        clearInterval(this.timer)
        console.log('componentWillUnmount erb vor jam@ heracvec');
    }

    tickTack() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return(
            <div className='jam'>
                <h1>Title</h1>
                <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default Clock;
