import React from 'react';

import UserInfo from './userInfo';

import './component.css';

function formatDate(date) {
    return date.toLocaleDateString();
}

function Comment(props) {
    console.log('es gtnvum em comment-i mej', props);
    
    return (
        <div className="Comment">
            <UserInfo author={props.user.author} />
            <div className="Comment-text">
                {props.user.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.user.date)}
            </div>
        </div>
    );
}

export default Comment;
