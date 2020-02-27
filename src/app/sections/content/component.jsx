import React from 'react';

import SwitchComponent from './../../components/switchComponent';
import Toggle from './../../components/toggle';

class Content extends React.Component {
    render() {
        return (
            <div style={styles.contentPlace}>
                <div style={styles.contentPlaceChild}>
                    <Toggle />
                </div>
                <div style={styles.contentPlaceChild}>
                    <SwitchComponent />
                </div>
            </div>
        )
    }
}

const styles = {
    contentPlace: {
        width: '100%',
        minHeight: 'calc(100vh - 270px)',
        height: 'auto',
        marginTop: '70px',
        backgroundColor: '#b6d784',
        overflow: 'hidden',
    },
    contentPlaceChild: {
        width: '40%',
        height: '100%',
        float: 'left',
        margin: '0px 5%',
        backgroundColor: 'greentellow',
    }
}

export default Content;
