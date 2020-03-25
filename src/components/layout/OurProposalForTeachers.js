import React from "react"
import "./styles/OurProposalForTeachers.css"
import CallToAction from "./CallToAction.js"
import Card from "./Card.js"
import { useStaticQuery, graphql } from "gatsby"
import evaluationReportImg from "../../images/proposal/teachers/Diferentes-evaluaciones-de-satisfacción-y-aprendizaje---Profesores.png"
import assitanceReportImg from "../../images/proposal/teachers/Periodos-de-participación-de-alumno-por-clase---Profesores.png"

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
              fluid(maxWidth: 1000, quality: 100, pngQuality: 80) {
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
        Nuestra propuesta para <br /> Profesores y Directores
      </h3>

      <Card
        card={{
          title: "Diferentes evaluaciones de satisfacción y aprendizaje",
          image: evaluationReportImg
        }}
      />
      <Card
        card={{
          title: "Diferentes evaluaciones de satisfacción y aprendizaje",
          image: assitanceReportImg
        }}
      />
      <CallToAction />
    </section>
  )
}

export default OurProposalForTeachers
