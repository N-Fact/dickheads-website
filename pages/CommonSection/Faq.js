import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

function Faq(props) {
    return (
        <React.Fragment>
            <section className="section strategy-box" id='faq'>
                <Container>
                <Row className="vertical-content">
                        <h3 className='heavy'>
                        F.A.Q.
                                </h3>
                        <Col lg={6}>
                              <p>
                              <strong>1. What is a royalty share?</strong>
                              </p>
                              <p>
Royalty is a fixed amount of percentage where the owners of the colection will receive in every trade of their NFTs. In Crypto Dickheads, this percentage is %5, meaning in every sale, the owner receives %5 of the transacted amount. Crypto Dickheads are sharing %100 of this amount with their holders.
                              </p>
                              <p>
                              <strong>2. How to receive royalty share as a holder?</strong>
                              </p>
                              <p >
                              Since the royalty cumulates in every transaction occuring in the contract, it needs to be claimed by the holder. Holders can simply press the “claim” button in the link below, and the amount will be transfered to their metamask wallets.
                             
                              </p>
                              <p> <strong><a href='https://go.kalao.io/cryptodickheads/ '>https://go.kalao.io/cryptodickheads </a></strong></p>
                              <p>
                              <strong>3. What is Kalao Stake?</strong>
                              </p>
                              <p >
                              Crypto Dickheads staked 555 AVAX worth of KLO for their holders. The income that obtained from this stake is distributed to holders weekly through giveaways. 

                             
                              </p>
                        </Col>
                        <Col lg={6}>
                            <div className="features-right text-right">
                            <p>
                              <strong>4. What is Dickheads Party?</strong>
                              </p>
                              <p>
                              We are planning to organize the dopest NFT event in Istanbul. Gates would only be open to our holders. This vip event will contain lots of music and shots! Besides, during the party, attendants will receive various surprise merch items!
                              </p>
                              <p>
                              <strong>5. When is Dickheads Party?</strong>
                              </p>
                              <p >
                              The party will be held 1-15 March, exact date & place is TBA. Since the details are decided with the community, make sure to vote for poles regarding the event details.
                             
                              </p>
                              <p>
                              <strong>6. Will holders get whitelisted for 555 Special Collection?</strong>
                              </p>
                              <p >
                              
Yes, our holders will be whitelisted for the special collection. The colection will include 1:1 drawings which would be super rare, including iconic characters from our childhood!
                             
                              </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                
            </section>
        </React.Fragment>
    );
}

export default Faq;