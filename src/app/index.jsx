import React from  'react';
import { BrowserRouter as Router } from 'react-router-dom';
 
import Header from './sections/header';
import Content from './sections/content'
import Footer from './sections/footer';

function App(){
    return(
        <Router>
            <Header />
            <Content />
            <Footer />
        </Router>
    )
}

export default App;
