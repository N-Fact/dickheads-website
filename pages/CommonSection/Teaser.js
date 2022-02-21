import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { Container, Row, Col, Button } from "reactstrap";
import { Player, ControlBar, PlayToggle ,BigPlayButton  } from 'video-react';
import EventContext from '../Context/EventContext';

const Teaser = (props) => {

      const {isplay}  = useContext(EventContext);
      const player = useRef(Player);
      useEffect(() => {
        if(isplay){
            player.play();
        }
      }, [player,isplay]);
    return (
        <React.StrictMode>
            <section className="bg-black" id='teaser'>
                <Container >
                    <Row className="align-items-center">
                        <Col lg={12}>
                            <div className='teaser-box text-center pt-5'>
                                    <h1>JOIN OUR COMMUNITY!</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div  className='container-fluid dickhead-video'>
                  <div>
                  <Player
                   ref={p => {
                    player = p;
                  }}
                playsInline
                src="/images/teaser/revize1.mp4"
                autoPlay ={false}
                fluid = {true}
                muted={true}
                >
            <BigPlayButton position="center" />
                </Player>
                  </div>
                </div>
            </section>
        </React.StrictMode>
    );
}

export default Teaser;