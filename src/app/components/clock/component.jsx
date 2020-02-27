import React from 'react';

import './component.css';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            date: new Date()
        }
    }

    componentDidMount(){
        this.timer = setInterval( 
            () => {
            this.tickTack()
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    tickTack(){
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className='jam'>
                <h1>Title</h1>
                <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default Clock;
