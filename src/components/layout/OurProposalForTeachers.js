import React from "react"
import "./styles/OurProposalForTeachers.css"
import CallToAction from "./CallToAction.js"
import Card from "./Card.js"
import evaluationReportImg from "../../images/proposal/teachers/Diferentes-evaluaciones-de-satisfacción-y-aprendizaje---Profesores.png"
import assitanceReportImg from "../../images/proposal/teachers/Periodos-de-participación-de-alumno-por-clase---Profesores.png"

function OurProposalForTeachers(props) {
  return (
    <section className="OurProposalForTeachers our-team-section">
      <h3 className="OurProposalForTeachers__title">
        Nuestra propuesta para <br /> Profesores y Directores
      </h3>

      <Card
        card={{
          title: "Diferentes evaluaciones de satisfacción y aprendizaje",
          image: evaluationReportImg,
        }}
      />
      <Card
        card={{
          title: "Diferentes evaluaciones de satisfacción y aprendizaje",
          image: assitanceReportImg,
        }}
      />
      <CallToAction />
    </section>
  )
}

export default OurProposalForTeachers
