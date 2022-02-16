import React from 'react';
import { Container, Row, Col, Form, NavbarBrand } from "reactstrap";
import Link from "next/link";
const links = 
    {
        items: [
            { link: "#about", title: "ABOUT" },
            { link: "#roadmap", title: "ROADMAP" },
            { link: "#", title: "STRATEGY" },
            { link: "#team", title: "TEAM" },
            { link: "#", title: "VISIT COLLECTION" },
            { link: "#", title: "MEDIUM" },
            { link: "#", title: "CLAIM ROYALTY" },
            { link: "#faq", title: "FAQ" },
            { link: "#", title: "TWITTER" },
            { link: "#", title: "DISCORD" },
        ],
    };


const Footer = props => {
    return (
        <React.Fragment>
            <footer className="footer">
                <Container>
                    <Row>
                    <Col lg={2}>
                           <img src="/images/crypto-logo.png" height={100} width={100} />
                        </Col>
                        <Col lg={8} className='text-center d-flex justify-content-center align-items-center'>
                                    <ul className="list-inline footer-list">
                                        {links.items.map((fLinkChild, key) => (
                                            <li key={key} className="list-inline-item">
                                                <Link href={fLinkChild.link}><a>{fLinkChild.title}</a></Link>
                                            </li>
                                        ))}
                                    </ul>
                                
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