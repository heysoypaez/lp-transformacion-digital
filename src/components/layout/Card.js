import React from "react"
import "./styles/Card.css"
import PropTypes from "prop-types"
import Img from "gatsby-image"

function Card(props) {
  return (
    <section className="Card">
      <h3> {props.card.title} </h3>
      <Img
        className="Card__image"
        fluid={props.card.image}
        alt={props.card.title || "card image"}
      />
    </section>
  )
}

Card.defaultProps = {
  card: {
    title: "Card",
    image: "image",
  },
}

export default Card
