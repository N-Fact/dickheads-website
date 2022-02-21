import React from 'react';
import { Col } from "reactstrap";

const TeamBox = ({ teams }) => {
    return (
        <React.Fragment>
            {(teams || []).map((team, key) => (
                <Col key={key} lg={4} sm={6}>
                    <div className="text-center hover-effect">
                        <div className="team-wrapper">
                            <div className="team-member">
                                <div className='team-bird'>
                                <img
                                    alt="team"
                                    src={"/images/team/tw_icon.png"}
                                    className="img-fluid rounded"
                                />
                                </div>
                                <img
                                    alt="team"
                                    src={team.image}
                                    className="img-fluid rounded"
                                />
                            </div>
                        </div>
                        <h4 className="team-name">{team.title}</h4>
                        <p className="team-designation">{team.desc}</p>
                    </div>
                </Col>
            ))}
        </React.Fragment>
    );
}

export default TeamBox;