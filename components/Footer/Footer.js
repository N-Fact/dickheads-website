import React from 'react';
import { Container, Row, Col, Form } from "reactstrap";
import Link from "next/link";
import FooterLink from './FooterLink';

const links = [
    {
        title: "CRYPTO DICKHEADS",
        child: [
            { link: "#", title: "ABOUT" },
            { link: "#", title: "ROADMAP" },
            { link: "#", title: "STRATEGY" },
            { link: "#", title: "TEAM" },
        ],
    },
    {
        title: "Information",
        child: [
            { link: "#", title: "VISIT COLLECTION" },
            { link: "#", title: "MEDIUM" },
            { link: "#", title: "CLAIM ROYALTY" },
        ],
    },
    {
        title: "Support",
        child: [
            { link: "#", title: "FAQ" },
            { link: "#", title: "TWITTER" },
            { link: "#", title: "DISCORD" },
        ],
    },
];

const Footer = props => {
    return (
        <React.Fragment>
            <footer className="footer">
                <Container>
                    <Row>
                        {links.map((fLink, key) => (
                            <Col key={key} lg={3} className="mt-4">
                                <h4>{fLink.title}</h4>
                                <div className="text-muted mt-4">
                                    <ul className="list-unstyled footer-list">
                                        {fLink.child.map((fLinkChild, key) => (
                                            <li key={key}>
                                                <Link href={fLinkChild.link}><a>{fLinkChild.title}</a></Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Col>
                        ))}

                        <Col lg={3} className="mt-4">
                            <div className="text-muted-subscribe mt-4">
                            <img src="/images/crypto-logo.png" height={150} width={150} />
                            </div>
                            {/* <Form className="subscribe">
                                <input
                                    placeholder="Email"
                                    className="form-control"
                                    required
                                />
                                <Link href="#">
                                    <a className="submit"><i className="pe-7s-paper-plane"></i></a>
                                </Link>
                            </Form> */}
                        </Col>
                    </Row>
                </Container>
            </footer>
            {/* import Footer link */}
            {/* <FooterLink /> */}
        </React.Fragment>
    );
}

export default Footer;