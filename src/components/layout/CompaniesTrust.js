import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import "./styles/CompaniesTrust.css"

const CompaniesTrust = props => {
  const data = useStaticQuery(graphql`
    query CompaniesQuery {
      allFile(
        filter: {
          relativeDirectory: { eq: "images/companies" }
          extension: { regex: "/png|jpeg|jpg/" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fixed(width: 150, height: 150) {
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
    <section className="layout-section companies-trust-section">
      <section className="companies-trust-section__item companies-trust-section__item-1">
        <h3 className="  companies-trust-section__item-1__title title--contrast">
          Han confiado en nosotros
        </h3>
      </section>
      <section className="companies-trust-section__item-2 companies-trust-section__item-2__companies">
        {data.allFile.edges.map(({ node }) => (
          <figure
            className="companies-trust-section_item companies-trust-section_item-1"
            key={node.id}
          >
            <Img fixed={node.childImageSharp.fixed} />
          </figure>
        ))}
      </section>
    </section>
  )
}

export default CompaniesTrust
