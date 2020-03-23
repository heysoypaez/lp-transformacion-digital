import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import "./styles/BenefitsSection.css"

function BenefitsSection(props) {
  const data = useStaticQuery(graphql`
    query BenefitsQuery {
      allFile(
        filter: {
          relativeDirectory: { eq: "images/icons" }
          extension: { regex: "/png/" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fixed(width: 100) {
                aspectRatio
                base64
                width
                height
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section className="layout-section improve-abilities-section">
      <section className="improve-abilities-section__item improve-abilities-section__item-1">
        <h3 className="improve-abilities-section__item-1__title">
          Te ayudamos a
        </h3>
      </section>
      <section className="improve-abilities-section__item improve-abilities-section__item-2">
        <ul>
          <li>
            {" "}
            <Img fixed={data.allFile.edges[2].node.childImageSharp.fixed} />
            <p>Digitalizar tu contenido</p>
          </li>
          <li>
            {" "}
            <Img fixed={data.allFile.edges[0].node.childImageSharp.fixed} />
            <p>Desarrollar una plataforma personalizada</p>
          </li>
          <li>
            {" "}
            <Img fixed={data.allFile.edges[3].node.childImageSharp.fixed} />
            <p>Generar un sistema personalizado</p>
          </li>
          <li>
            {" "}
            <Img fixed={data.allFile.edges[1].node.childImageSharp.fixed} />
            <p>Captar Alumnos</p>
          </li>
        </ul>
      </section>
    </section>
  )
}

export default BenefitsSection
