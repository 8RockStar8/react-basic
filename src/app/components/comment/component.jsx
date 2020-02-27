import React from 'react';

import UserInfo from '../userInfo';

import './component.css';

function formatDate(date) {
    let met = date.toLocaleDateString();
    return met
} 

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: [1, 2, 3, 5, 6, 7, 4, 9]
        }
    }

    foo = (num) => {
        let met = num.map((item, index) => {
            return (
                <li key={index} >
                    <span>{item}</span>
                </li>
            )
        });
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
                    {this.foo(this.state.numbers)}
                </ul>
            </div>
       
        );
    }
}

export default Comment;
