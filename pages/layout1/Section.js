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
                
                {/* <div className="bg-overlay"></div>
                <div className="bg-home-greenoverlay"></div> */}
                <Container>
                      
                            <Row >
                                <Col lg={12} className="text-center pt-4">
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
                                <Col lg={4} className="text-center soldmain">
                                   
                                <img
                                    alt="Crypto Dickheads"
                                    src={"/images/home/gameboy.png"}
                                    className="img-fluid sold-image"
                                />
                                 <div className='glitch sold pt-5' text="SOLD OUT">
                                    <span className='glow'>SOLD OUT</span>
                                    <span className='glitch sold-title '>SOLD OUT</span>
                                    <span className='sold-desc '>in 11 mins</span>
                                    <span className='glow'>in 11 mins</span>
                                    </div>
                                </Col>
                                <Col lg={4} className="home-right">
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