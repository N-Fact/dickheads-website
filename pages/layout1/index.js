import React from 'react';
import Section from "./Section";
import Footer from '../../components/Footer/Footer';
import Header from '../../components/header/header';
import AboutUs from "../CommonSection/AboutUs";
import RoadMap from "../CommonSection/RoadMap";
import Strategy from '../CommonSection/Strategy/Strategy';
import Team from '../CommonSection/Team/Team';
import RoadStep from '../CommonSection/RoadStep/RoadStep';
import FAQ from '../CommonSection/Faq';
import Teaser from '../CommonSection/Teaser';

const layout1 = props => {
    return (
        <React.Fragment>
            {/* import Header */}
            <Header />
            <Section />
            <AboutUs />
            <RoadMap />
            <Strategy />
            <RoadStep />
            <Team />
            <FAQ />
            <Teaser />
            <Footer />

        </React.Fragment>
    );
}


export default layout1;