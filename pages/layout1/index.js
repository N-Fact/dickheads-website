import React from 'react';
import Section from "./Section";
import Footer from '../../components/Footer/Footer';
import Header from '../../components/header/header';

const layout1 = props => {
    return (
        <React.Fragment>
            {/* import Header */}
            <Header />

            <Section />

            {/* import Services */}
            
            <Footer />

        </React.Fragment>
    );
}


export default layout1;