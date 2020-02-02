import React from 'react';

import './component.css';

function Header() {
    return (
        <header>
            <div className='header-center'>
                <ul className='header-menu'>
                    <li className='header-menu-item'>
                        Home
                    </li>
                    <li className='header-menu-item'>
                        About
                    </li>
                    <li className='header-menu-item'>
                        Contact
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;
