import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

function RoadMap(props) {
    return (
        <React.Fragment>
            <section className="section bg-roadmap" id="roadmap">
            
                    <Row >
                        <Col lg={10}>
                        <h3 className='heavy'>
                               ROADMAP
                                </h3>
                            <div className="roadmap-box">
                                <img
                                   alt="Crypto Dickheads roadmap "
                                    src={"/images/roadmap/roadmap.png"}
                                    className="img-fluid-9"
                                />
                            </div>
                        </Col>
                        <Col lg={2}>
                        <div className='roadmap-img'>
                                <img
                                    alt="Crypto Dickheads roadmap "
                                    src={"/images/roadmap/roadmap-maskot.png"}
                                    className="img-fluid"
                                />
                                </div>
                        </Col>
                    </Row>
               
            </section>
        </React.Fragment>
    );
}

export default RoadMap;