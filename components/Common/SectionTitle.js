import React, { Component } from "react";
import { Row, Col } from "reactstrap";

const SectionTitle = props => {
    return (
        <React.Fragment>
            <Row>
                <Col lg={{ size: 8, offset: 1 }}>
                    <h1 className={props.className ? props.className :"section-title text-left"}>{props.title}</h1>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default SectionTitle;
