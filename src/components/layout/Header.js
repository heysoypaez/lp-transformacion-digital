import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./styles/Header.css"
import phoneIcon from "../../images/icons/phone-solid.svg"
import envelopeIcon from "../../images/icons/envelope-solid.svg"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    fragment logoImage on File {
      childImageSharp {
        fluid(maxHeight: 100) {
          src
          srcSet
          sizes
          aspectRatio
          base64
        }
      }
    }

    query HeaderQuery {
      file(
        relativePath: { eq: "images/logos/impulsados-fondo-transparente.png" }
      ) {
        ...logoImage
      }
    }
  `)

  return (
    <header className="header">
      <figure className="header__item header__item-1">
        <Img fluid={data.file.childImageSharp.fluid} />
      </figure>
      <section className="header__item header__item-2">
        <ul>
          <li>
            {" "}
            <img
              src={phoneIcon}
              width="24px"
              height="24px"
              className="header_icon"
            />
            <a href="tel:+56983870290">+569 8387 0290</a>
          </li>
          <li>
            {" "}
            <img src={envelopeIcon} className="header_icon" />{" "}
            <a href="mailto:f.palacios@impulsados.cl">f.palacios@impulsados.cl </a>
          </li>
        </ul>
      </section>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
