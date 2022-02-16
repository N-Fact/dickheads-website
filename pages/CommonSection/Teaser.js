import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

const Teaser = () => {
    return (
        <React.Fragment>
            <section className="bg-dark" id='teaser'>
                <Container >
                    <Row className="align-items-center">
                        <Col lg={12}>
                            <div className='teaser-box text-center pt-5'>
                                    <h1>JOIN OUR COMMUNITY!</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className='teaser-image'>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Teaser;