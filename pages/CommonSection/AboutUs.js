import React from 'react';
import { Container, Row, Col } from "reactstrap";
const AboutUs = props => {
    return (
        <React.Fragment>
            <section className="section bg-light" id="about">
                <Container>
                    <Row className="vertical-content">
                        <Col lg={6}>
                            <div className="features-box">
                                <h3>
                                WHO ARE THE
                                </h3>
                                <h3>
                               DICKHEADS ?
                                </h3>
                                <p className="text-about-p web-desc">
                                Crypto Dickheads is an NFT collection of 5.555 ai generated unique dickheads. They are a nostalgic flashback to our childhood, the glorious 90’s. Created with over 300 attributes, dickheads are coming to mess with the metaverse!


                                </p>
                                <p className="text-about-p web-desc">
                                When humankind succeeded exploring new planets that are suitable for humans to live, they started new colonies over the universe. Leading space tech companies selected eligible people to join the colonies first. Privileged people made their way to other planets one by one, leaving few people behind.

                                </p>
                                <p className="text-about-p web-desc">
                                
Those people who left behind wasn't happy about it and decided to unite! A small riot started in abandoned caravan park. Day by day, the outcasts of the world started gathering around this caravan park and they started their own community against the rest, and they called theirselves...The Dickheads!

                                </p>
                                <p className="text-about-p web-desc">
                                
                                So the story begins!
                                 </p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="features-img features-right text-right">
                                <img
                                    alt="Crypto Dickheads"
                                    src={"/images/about/aboutman.png"}
                                    className="img-fluid"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default AboutUs;