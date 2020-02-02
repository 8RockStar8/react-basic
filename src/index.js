import React from 'react';
import ReactDOM from 'react-dom';

// import App from './app';

import './index.css';

import * as serviceWorker from './serviceWorker';

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
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    tickTack() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return(
            <div>
                <h1>Title</h1>
                <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
