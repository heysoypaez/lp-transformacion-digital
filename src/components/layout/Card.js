import React from "react"
import "./styles/Card.css"
// eslint-disable-next-line
import PropTypes from "prop-types"

function Card(props) {
  return (
    <article className="Card" key={props.card.image.id}>
      <h3 className="Card__title"> {props.card.title} </h3>
      <img
        className="Card__image"
        src={props.card.image}
        lazy={true}
        alt={props.card.title || "card image"}
        style={{
          maxWidth: 800,
          maxHeight: 400,
          justifySelf: "center"
        }}
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
