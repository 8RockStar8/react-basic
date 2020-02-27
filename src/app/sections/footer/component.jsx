import React from 'react';

function Footer () {
    return (
        <footer style={styles.footer}>
            Some Footer
        </footer>
    )
}

const styles = {
    footer: {
        height: '200px',
        fontSize: '56px',
        color: 'green',
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000',
    }
}

export default Footer
