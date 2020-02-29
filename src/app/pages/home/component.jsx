import React from 'react';

import SwitchComponent from './../../components/switchComponent';
import Toggle from './../../components/toggle';

function Home() {
    return(
        <div>
            <div style={styles.contentPlaceChild}>
                <Toggle />
            </div>
            <div style={styles.contentPlaceChild}>
                <SwitchComponent />
            </div>
        </div>
    )
}

const styles = {
    contentPlaceChild: {
        width: '40%',
        height: '100%',
        float: 'left',
        margin: '0px 5%',
        backgroundColor: 'greentellow',
    }
}

export default Home;
