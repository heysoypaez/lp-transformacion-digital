import React from "react"
import "./styles/OurProposalForStudents.css"
import CallToAction from "./CallToAction.js"
import Card from "./Card.js"
import activitiesCalendarImg from "../../images/proposal/students/Calendarización-de-actividades-en-periodos-personalizables---Alumnos.png"
import tasksOftheDayImg from "../../images/proposal/students/Programación-de-actividades-del-día---Alumno.png"

import stateOfProgressyImg from "../../images/proposal/students/Estados-de-avance-por-curso-y-contenidos---Alumnos.png"

import suscriptionsImg from "../../images/proposal/students/Suscripciones-a-uno-o-varios-cursos-o-programas-dentro-de-tu-academia---Alumnos.png"

function OurProposalForStudents(props) {
  return (
    <section className="OurProposalForStudents our-team-section">
      <h3 className="OurProposalForStudents__title">
        Nuestra propuesta para Alumnos
      </h3>
      <section className="OurProposalForStudents__division">
        <Card
          card={{
            title: ["Programación de", <br />, "actividades del día"],
            image: tasksOftheDayImg,
          }}
        />
        <Card
          card={{
            title: [
              "Calendarización de actividades",
              <br />,
              "en periodos personalizables",
            ],
            image: activitiesCalendarImg,
          }}
        />
      </section>
      <Card
        card={{
          title: "Programación de actividades del día",
          image: suscriptionsImg,
        }}
      />
      <Card
        card={{
          title:
            "Suscripciones a uno o varios cursos o programas dentro de tu academia",
          image: stateOfProgressyImg,
        }}
      />
      <CallToAction />
    </section>
  )
}

export default OurProposalForStudents
