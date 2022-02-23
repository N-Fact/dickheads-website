import React from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../../../components/Common/SectionTitle";

import TeamBox from './TeamBox';


const teams = [
    {
        image: "/images/team/jessica.png",
        title: "JESSICA HYDE",
        desc: "artis,doomer",
    },
    {
        image: "/images/team/uykusuz.png",
        title: "UYKUSUZ TRADER",
        desc: "marketing manager,go-getter",
    },
    {
        image: "/images/team/devdawrf.png",
        title: "DEV DWARF",
        desc: "web3 developer,day dreamer",
    },
    {
        image: "/images/team/leeroy.png",
        title: "LEEROY JENKINS",
        desc: "commnity manger,hardcore gammer",
    },
    {
        image: "/images/team/alp.png",
        title: "ALP CHEF ",
        desc: "developer,nerd",
    },
    {
        image: "/images/team/macavity.png",
        title: "MACAVITY",
        desc: "motion desinger,drunk",
    },
];

const Team = props => {
    return (
        <React.Fragment>
            <section className="section pt-2 team-box" id="team">
            <SectionTitle
                        title="TEAM DICKHEADS"
                        className="team-title"
                    />
                <Container>
                    <Row className="mt-2">
                        <TeamBox teams={teams} />
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Team;