import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

function RoadMap(props) {
    return (
        <React.Fragment>
            <section className="section bg-roadmap" id="roadmap">
            <Container>
                    <Row className="vertical-content">
                        <Col lg={9}>
                        <h3 className='heavy'>
                               ROADMAP
                                </h3>
                            <div className="roadmap-box">
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="roadmap-img features-right text-right">
                                <img
                                    alt="Crypto Dickheads roadmap "
                                    src={"/images/roadmap/roadmap-maskot.png"}
                                    className="img-fluid-9"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default RoadMap;