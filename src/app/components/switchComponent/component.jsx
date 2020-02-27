import React from 'react';

import Clock from './../clock';
import Comment from './../comment';

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/150/150',
    },
};

class SwitchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClockShow: false,
            isShowText: true,
        }
    }

    hideShowClock = () => {
        this.setState({
            isClockShow: !this.state.isClockShow,
            isShowText: !this.state.isShowText
        });
    }

    render() {
        return(
            <div>
                <button onClick={this.hideShowClock} style={styles.btn}>
                    {this.state.isShowText === true ? 'Show Clock' : 'Show Comment'}
                </button>
                {
                    this.state.isClockShow === true ? <Clock /> : <Comment user={comment} />
                }
            </div>
        )
    }
}

const styles = {
    btn: {
        display: 'block',
        width: '200px',
        height: '40px',
        margin: '10px auto',
        backgroundColor: 'darkcyan',
        color: '#fff',
        fontSize: '22px',
        cursor: 'pointer',
        outline: 'none',
        border: 'none',
        borderRadius: '10px',
    }
}

export default SwitchComponent;
