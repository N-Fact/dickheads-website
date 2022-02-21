import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Button } from "reactstrap";
import { Player, ControlBar, PlayToggle ,BigPlayButton  } from 'video-react';
import EventContext from '../Context/EventContext';
// Modal Video
import dynamic from 'next/dynamic';
import Link from 'next/link';
const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false });


const Teaserv1 = (props) => {

    const [isOpen, setisOpen] = useState(false);
    //navtoggle menu
    const openModal = () => {
        setisOpen(!isOpen);
    }

    //   const {isplay}  = useContext(EventContext);
    //   const player = useRef(Player);
    //   useEffect(() => {
    //     if(isplay){
    //         player.play();
    //     }
    //   }, [player,isplay]);
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
                <div  className='container-fluid teaser-image'>
                <p className="play-shadow mmt-4">
                                        <Link href="/images/teaser/revize1.mp4">
                                            <a
                                                onClick={() => {
                                                    openModal();
                                                }}
                                                className="play-btn video-play-icon"><i className="mdi mdi-play text-center"></i></a>
                                        </Link>
                   </p>
                <ModalVideo
                    channel="vimeo"
                    isOpen={isOpen}
                    videoId="287684225"
                    onClose={() => setisOpen(!isOpen)}
                />
                </div>
            </section>
        </React.StrictMode>
    );
}

export default Teaserv1;