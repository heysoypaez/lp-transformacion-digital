import React from "react"
import "./styles/OurProposalForStudents.css"
import CallToAction from "./CallToAction.js"
import Card from "./Card.js"
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
    <section className="OurProposalForStudents our-team-section">
      <h3 className="OurProposalForStudents__title">
        Nuestra propuesta para Alumnos
      </h3>
      <section className="OurProposalForStudents__division">
        <Card
          card={{
            title: "Programación de actividades del día",
            image: data.allFile.edges[0].node.childImageSharp.fluid,
          }}
        />
        <Card
          card={{
            title: "Calendarización de actividades en periodos personalizables",
            image: data.allFile.edges[1].node.childImageSharp.fluid,
          }}
        />
      </section>
      <Card
        card={{
          title: "Programación de actividades del día",
          image: data.allFile.edges[3].node.childImageSharp.fluid,
        }}
      />
      <Card
        card={{
          title:
            "Suscripciones a uno o varios cursos o programas dentro de tu academia",
          image: data.allFile.edges[2].node.childImageSharp.fluid,
        }}
      />
      <CallToAction />
    </section>
  )
}

export default OurProposalForStudents
