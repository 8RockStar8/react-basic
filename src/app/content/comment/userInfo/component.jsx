import React from 'react';

import './component.css';

function UserInfo(props) {

    console.log('es gtnvum em userInfo-i mej', props);
    
    return (
        <div className="UserInfo">
            <img className="Avatar"
                src={props.author.avatarUrl}
                alt={props.author.name}
            />
            <div className="UserInfo-name">
                {props.author.name}
            </div>
        </div>
    )
}

export default UserInfo;
