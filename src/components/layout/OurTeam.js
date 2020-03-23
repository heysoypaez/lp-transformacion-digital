import React from "react"
import "./styles/OurTeam.css"
import TeamMemberCard from "./TeamMemberCard.js"
import fabianPalaciosImg from "../../images/team/equipo-impulsados-fabian-palacios-daniel-paez.jpg"
import nicolasMalgrejoImg from "../../images/team/Foto-Nicolás-melgarejo.jpg"

function OurTeam(props) {
  return (
    <section className="our-team-section__out">
      <section className="layout-section our-team-section">
        <h2 className=" our-team-section__title  title--contrast">
          Nuestros especialistas
        </h2>
        <TeamMemberCard
          teamMember={{
            name: "Nicolás Melgarejo",
            occupation: "Especialista en educación online",
            occupationDetails:
              "Fundador y CEO de TI Class Preuniversitario, con  más de 4000 alumnos año a año. ",
            photo: nicolasMalgrejoImg,
            description:
              "De profesión profesor, es el Autor del primer libro gratuito de PSU Física con más de 150.000 descargas. Se desempeñó como Gerente de innovación educativa y Jefe de Área Académica en OGR PuntajeNacional.cl Desarrolló sistemas de clases online en vivo desde el 2012 y la aplicación educativa PSU 850 con más de 500.000 descargas en Play Store.",
          }}
        />

        <TeamMemberCard
          teamMember={{
            name: "Fabian Palacios",
            occupation: "Especialista en marketing digital",
            occupationDetails:
              "Fundador y CEO de Impulsados, Agencia de Marketing Digital la cual ayuda a empresas a poscionarse y vender por internet habiendo implementado + de 500 campañas publicitarias. ",
            photo: fabianPalaciosImg,
            description:
              "Desde 2018, ha capacitado en el área de marketing digital, destacando instituciones como Universidad Diego Portales, Universidad Tecnológica Metropolitana, Centros de Negocios Sercotec, Mujeres Emprendedoras, Mujeres del Pacífico, Social Marketing Academy,entre otros.",
          }}
          order="inverse"
        />
      </section>
    </section>
  )
}

export default OurTeam
