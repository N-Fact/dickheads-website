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
            <div className='container'>
            <div className='bg-home'>
            <Header  play={play}/>
            </div>
            </div>
            {/* <Section />
            <AboutUs />
            <div className="clearfix"></div>
            <RoadMap />
            <div className="clearfix"></div>
            <Strategy />
            <div className="clearfix"></div>
            <RoadStep />
            <div className="clearfix"></div>
            <Team />
            <div className="clearfix"></div>
            <FAQ />
            <TeaserV1  />
            <Footer /> */}
        </React.StrictMode>
    );
}


export default layout1;