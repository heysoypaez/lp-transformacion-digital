import React from "react"
import "./styles/Card.css"
// eslint-disable-next-line
import PropTypes from "prop-types"
import Img from "gatsby-image"

function Card(props) {
  return (
    <article className="Card" key={props.card.image.id}>
      <h3 className="Card__title"> {props.card.title} </h3>
      <Img
        className="Card__image"
        fluid={props.card.image}
        alt={props.card.title || "card image"}
      />
    </article>
  )
}

Card.defaultProps = {
  card: {
    title: "Card",
    image: "image",
  },
}

export default Card
