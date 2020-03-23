
import React from "react";
import "./styles/OurProposalForStudents.css";
import CallToAction from "./CallToAction.js";
import Card from "./Card.js";
import { useStaticQuery, graphql } from "gatsby"


function OurProposalForStudents(props) {

  const data = useStaticQuery(graphql`
    query OurProposalForStudentsQuery {
      allFile(
        filter: {
          relativeDirectory: { eq: "images/proposal/students" }
          extension: { regex: "/png|jpeg|jpg/" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 1000) {
                aspectRatio
                base64
                src
                sizes
                srcSet
              }
            }
          }
        }
      }
    }
  `)

	return(
		<section className="OurProposalForStudents our-team-section">

			<section>
				<Card card={{
					title: "Programación de actividades del día",
					image: allFile.edges[1].node.childImageSharp.fixed
				}} />
				<Card card={{
					title: "Calendarización de actividades en periodos personalizables",
					image: ""
				}}  />
			</section>
			<Card card={{
				title: "Programación de actividades del día",
				image: ""
			}} />
			<Card card={{
				title: "Suscripciones a uno o varios cursos o programas dentro de tu academia",
				image: ""
			}} />
			<CallToAction />
		</section>
	)
}

export default OurProposalForStudents;


