import React from 'react';

import Comment from './comment';
import Clock from './clock';

import './component.css';

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/200/200',
    },
};

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClockShow: false,
            isShowText: true
        }
    }

    hideShowClock = () => {
        this.setState({
            isClockShow: !this.state.isClockShow,
            isShowText: !this.state.isShowText
        });
    }

    render() {
        return (
            <div className='content-place'>
                <button onClick={this.hideShowClock} className='btn'>
                    {this.state.isShowText === true ? 'Show Clock' : 'Show Comment'}
                </button>
                {
                    this.state.isClockShow === true ? <Clock /> : <Comment user={comment} />
                }
            </div>
        )
    }
}

export default Content;
