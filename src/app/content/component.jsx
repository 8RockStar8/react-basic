import React from 'react';

import Comment from './comment';

import './component.css';

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/200/200',
    },
};

function Content() {
    return(
        <div className='content-place'>
            <Comment user={comment} />
        </div>
    )
}

export default Content;
