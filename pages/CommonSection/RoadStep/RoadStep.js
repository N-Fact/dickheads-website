import React from 'react';
import { Container, Row, Col } from "reactstrap";

const RoadStep = () => {
    return (
        <React.Fragment>
            <section className="section roadstep-box" id="roadStep">
                <Container>
                    <Row>
                        <Col lg={6} className='text-center' >
                            <h1 className="roadstep-title text-black">
                            Roadmap step 3/9
                            </h1>
                            <p className="roadstep-subtitle font-secondary text-black text-center">
                            We fulfilfed the 3rd step in our roadmap in only 10 days! 
                            </p>
                            <img src='/images/roadstep/roadmap-king.png' width={50} />
                        </Col>
                        <Col lg={6} className='text-center'>
                            <h1 className="roadstep-title text-black">
                            %100  of  Royalty 
                            </h1>
                            <p className="roadstep-subtitle font-secondary text-black text-center">
                                Far far away, behind the word mountains, far from the countries
                            </p>
                            <img src='/images/roadstep/starts.png' width={50} />
                        </Col>

                        <Col lg={6} className='pt-5 text-center'>
                            <h1 className="roadstep-title text-black">
                            Sold out in 11 mins
                            </h1>
                            <p className="roadstep-subtitle font-secondary text-black text-center">
                            Our public sale lasted only 11 minutes!  
                            </p>
                            <img src='/images/roadstep/beer.png' width={100} />
                        </Col>

                        <Col lg={6}  className='pt-5 text-center'>
                            <h1 className="roadstep-title text-black">
                            555 Avax Stake
                            </h1>
                            <p className="roadstep-subtitle font-secondary text-black text-center">
                            Income will be distributed to our holders!
                            </p>
                            <img src='/images/roadstep/diamond.png' width={55} />
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default RoadStep;