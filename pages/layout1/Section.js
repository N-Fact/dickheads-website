import React, { useState } from 'react';
import Link from 'next/link'

import { Container, Row, Col } from "reactstrap";

// Modal Video
import ModalVideo from "react-modal-video";

const Section = () => {
    const [isOpen, setisOpen] = useState(false);

    //navtoggle menu
    const openModal = () => {
        setisOpen(!isOpen);
    }
    return (
        <React.Fragment>
            <section
                className="section bg-home home-half"
                id="home"
            >
                  <div className="bg-home-greenoverlay"></div>
                <Container>
                      
                            <Row >
                                <Col lg={12} className="text-center">
                                <h1 className="home-title">
                                    CRYPTO DICKHEADS
                                    </h1>
                                </Col>
                            </Row>
                            <Row >
                                <Col lg={4} className='home-left'>
                               <img
                                    alt="Crypto Dickheads"
                                    src={"/images/home/home-man_01.png"}
                                    className="img-fluid"
                                />
                                 <img
                                    alt="Crypto Dickheads"
                                    src={"/images/home/home-woman_02.png"}
                                    className="img-fluid"
                                />
                                 <img
                                    alt="Crypto Dickheads"
                                    src={"/images/home/home-man_03.png"}
                                    className="img-fluid"
                                />
                                
                                </Col>
                                <Col lg={4} className="text-center ">
                                   <div className='soldmain'>
                                   <img
                                    alt="Crypto Dickheads"
                                    src={"/images/home/gameboy.png"}
                                    className="img-fluid sold-image"
                                />
                                   <div className='glitch sold' text="SOLD OUT">
                                    <span className='glow'> SOLD </span>
                                    <span className='glow'> OUT</span>
                                    <span className='glitch sold-title '> SOLD </span>
                                    <span className='glitch sold-out'> OUT</span>
                                    <span className='sold-desc '>in 11 mins</span>
                                    <span className='glow'>in 11 mins</span>
                                    </div>
                                   </div>
                               <div className='home-info '>
                               <img
                                    alt="Crypto Dickheads"
                                    src={"/images/home/homeinfo.png"}
                                    className="img-fluid sold-image"
                                />
                                <div className='home-desc'>
                                    <p>DROP COUNT: 5555</p>
                                    <p>TRAIT CLASSES: 10</p>
                                    <p>TRAITS: 600+</p>
                                    <p>PRICE: 1 AVAX </p>
                                </div>
                               </div>
                                </Col>
                                <Col lg={4} className="home-right ">
                                <img
                                    alt="Crypto Dickheads"
                                    src={"/images/home/home-man_04.png"}
                                    className="img-fluid"
                                />
                                 <img
                                    alt="Crypto Dickheads"
                                    src={"/images/home/home-man_05.png"}
                                    className="img-fluid"
                                />
                                 <img
                                    alt="Crypto Dickheads"
                                    src={"/images/home/home-man_06.png"}
                                    className="img-fluid"
                                />
                                </Col>
                            </Row>
                 </Container>
                   <Container className='mobilehead'>
                   <Row >
                                <Col lg={12} >
                               
                                 <img
                                    alt="Crypto Dickheads"
                                    src={"/images/home/home-woman_02.png"}
                                    className="img-fluid"
                                />
                                 <img
                                    alt="Crypto Dickheads"
                                    src={"/images/home/home-man_03.png"}
                                    className="img-fluid"
                                />
   <img
                                    alt="Crypto Dickheads"
                                    src={"/images/home/home-man_04.png"}
                                    className="img-fluid"
                                />
                                 <img
                                    alt="Crypto Dickheads"
                                    src={"/images/home/home-man_05.png"}
                                    className="img-fluid"
                                />
                                 <img
                                    alt="Crypto Dickheads"
                                    src={"/images/home/home-man_06.png"}
                                    className="img-fluid"
                                />
                                </Col>
                                </Row>
                   </Container>
            </section>
        </React.Fragment>
    );
}

export default Section;