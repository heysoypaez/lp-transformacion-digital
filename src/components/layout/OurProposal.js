
import React from "react";
import "./styles/OurProposal.css";
import OurProposalForStudents from "./OurProposalForStudents.js"
import OurProposalForTeachers from "./OurProposalForTeachers.js"

function OurProposal(props) {
	
	return(
    <section className="our-team-section__out">
        <OurProposalForStudents />
        <OurProposalForTeachers />
    </section>
	)
}

export default OurProposal;