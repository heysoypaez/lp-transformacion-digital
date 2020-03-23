import React from "react"
import "./styles/OurProposalForTeachers.css"
import CallToAction from "./CallToAction.js"
import Card from "./Card.js"
import { useStaticQuery, graphql } from "gatsby"

function OurProposalForTeachers(props) {
  const data = useStaticQuery(graphql`
    query OurProposalForTeachersQuery {
      allFile(
        filter: {
          relativeDirectory: { eq: "images/proposal/teachers" }
          extension: { regex: "/png|jpeg|jpg/" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 600) {
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

  return (
    <section className="OurProposalForTeachers our-team-section">

      <h3 className="OurProposalForTeachers__title">
        Nuestra propuesta para Profesores y Directores
      </h3> 

      <Card
        card={{
          title: "Diferentes evaluaciones de satisfacción y aprendizaje",
          image: data.allFile.edges[0].node.childImageSharp.fluid,
        }}
      />
      <Card
        card={{
          title:
            "Diferentes evaluaciones de satisfacción y aprendizaje",
          image: data.allFile.edges[1].node.childImageSharp.fluid,
        }}
      />
      <CallToAction />
    </section>
  )
}

export default OurProposalForTeachers
