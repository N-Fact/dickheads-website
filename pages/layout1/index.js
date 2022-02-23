import React, { useCallback, useState } from 'react';
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
import TeaserV1 from '../CommonSection/Teaserv1';
const layout1 = props => {

    const [isplay,setisplay] = useState(false);
     const play = useCallback((data)=> {
        console.log(data)
     },[])
    return (
        <React.StrictMode>
            {/* import Header */}
            <Header  play={play}/>
            <Section />
            <AboutUs />
            <div class="clearfix"></div>
            <RoadMap />
            <div class="clearfix"></div>
            <Strategy />
            <div class="clearfix"></div>
            <RoadStep />
            <div class="clearfix"></div>
            <Team />
            <div class="clearfix"></div>
            <FAQ />
            <TeaserV1  />
            <Footer />
        </React.StrictMode>
    );
}


export default layout1;