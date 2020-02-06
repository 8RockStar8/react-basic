import React from 'react';

import UserInfo from './userInfo';

import './component.css';

function formatDate(date) {
    return date.toLocaleDateString();
}

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: [1, 2, 3, 5, 6, 7, 4, 9]
        }
    }

    inch = (num) => {
        let met = num.map((item, index) => {
            return (
                <li key={index} className='esimInch'>
                    <span>{item}</span>
                </li>
            )
        })
        console.log(met);
        return met
    }

    render() {
        return (
            <div className="Comment">
                <UserInfo author={this.props.user.author} />
                <div className="Comment-text">
                    {this.props.user.text}
                </div>
                <div className="Comment-date">
                    {formatDate(this.props.user.date)}
                </div>
                <ul>
                    {this.inch(this.state.numbers)}
                </ul>
            </div>
        );
    }
}

export default Comment;
