import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

//Import Section Title
import SectionTitle from "../../../components/Common/SectionTitle";

import StrategyBox from './StrategyBox'

const processes = [
    {
        icon: "pe-7s-pen",
        title: "Tell us what you need",
        desc: "The Big Oxmox advised her not to do so.",
    },
    {
        icon: "pe-7s-id",
        title: "Get free quotes",
        desc: "Little Blind Text didn’t listen.",
    },
    {
        icon: "pe-7s-target",
        title: "Deliver high quality product",
        desc: "When she reached the first hills.",
    },
];

const Strategy= props => {
    return (
        <React.Fragment>
            <section className="section strategy-box" id='strategy'>
                <Container>
                        <Row className="vertical-content">
                        <h3 className='heavy'>
                        MARKETIN STRATEGIES
                                </h3>
                        <Col lg={6}>
                              <p>
                              1. Kalao stake income raffle will held live on twitter.</p>
                              <p>2. Raid suggestion channel will be created on discord, users can leave related links and community managers or team member will lead the raid.</p>

                              <p>3. A whitelist group will be created to be given to holders, regarding upcoming other projects. </p>

                              <p>4. A new chinese speaker moderator is hired to strengthen the bond with our asian community. </p>

                              <p>5. Regular twitter spaces will be held for a long term, sustainable global marketing. </p>

                              <p>6. Global “Content Contest” will be held. </p>

                              <p>7. “Floor sweeping challenge” & “floor hunt” contests will be held. </p>

                              <p>8. There will be spontaneous gatherings for our holders rather than the grand dickheads party.</p>
                              <p>9. Hodl chat will be eligible for many privileges such as Alpha Mints & Whitelist spots. </p>

                              <p>10. Global promoters will be hired for advertisement and giveaways. </p>

                                  
                        </Col>
                        <Col lg={6}>
                            <div className="features-right text-right">
                            <p>
                              1. Kalao stake income raffle will held live on twitter.</p>
                              <p>2. Raid suggestion channel will be created on discord, users can leave related links and community managers or team member will lead the raid.</p>

                              <p>3. A whitelist group will be created to be given to holders, regarding upcoming other projects. </p>

                              <p>4. A new chinese speaker moderator is hired to strengthen the bond with our asian community. </p>

                              <p>5. Regular twitter spaces will be held for a long term, sustainable global marketing. </p>

                              <p>6. Global “Content Contest” will be held. </p>

                              <p>7. “Floor sweeping challenge” & “floor hunt” contests will be held. </p>

                              <p>8. There will be spontaneous gatherings for our holders rather than the grand dickheads party.</p>
                              <p>9. Hodl chat will be eligible for many privileges such as Alpha Mints & Whitelist spots. </p>

                              <p>10. Global promoters will be hired for advertisement and giveaways. </p>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Strategy;