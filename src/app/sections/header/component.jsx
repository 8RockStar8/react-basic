import React from 'react';

function Header() {
    return (
        <header style={styles.header}>
            <div style={styles.headerCenter}>
                <ul style={styles.headerMenu}>
                    <li style={styles.headerMenuItem}>
                        Home
                    </li>
                    <li style={styles.headerMenuItem}>
                        About
                    </li>
                    <li style={styles.headerMenuItem}>
                        Contact
                    </li>
                </ul>
            </div>
        </header>
    )
}

const styles = {
    header: {
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        height: '70px',
        backgroundColor: '#956d50',
        boxShadow: '5px 5px 5px rgba(0,0,0,0.8)',
        zIndex: 99
    },
    headerCenter: {
        width: '1100px',
        height: '100%',
        margin: '0px auto',
    },
    headerMenu: {
        width: '100%',
        height: '100%',
        lineHeight: '70px',
        listStyle: 'none',
        textAlign: 'center',
    },
    headerMenuItem: {
        display: 'inline',
        margin: '0px 15px',
        color: '#000',
        fontSize: '26px',
        fontWeight: 'bold',
    }
}

export default Header;
