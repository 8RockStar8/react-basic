import React from 'react';

import Pages from './../../pages';

function Content() {
    return (
        <div style={styles.contentPlace}>
            <Pages />
        </div>
    )
}

const styles = {
    contentPlace: {
        width: '100%',
        minHeight: 'calc(100vh - 270px)',
        height: 'auto',
        marginTop: '70px',
        backgroundColor: '#b6d784',
        overflow: 'hidden',
    }
}

export default Content;
