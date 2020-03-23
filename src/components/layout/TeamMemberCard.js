import React from "react"
import "./styles/TeamMemberCard.css"
import PropTypes from "prop-types"

function TeamMemberCard({ teamMember, order }) {
  const writtenContent = (
    <section>
      <h3>{teamMember.name}</h3>
      <h4>{teamMember.occupation}</h4>
      <p className="TeamMemberCard__description">
        {teamMember.occupationDetails}
      </p>
      <p className="TeamMemberCard__description">{teamMember.description}</p>
    </section>
  )

  const photoTeamMember = (
    <figure>
      <img src={teamMember.photo} alt={teamMember.name} width="200" />
    </figure>
  )

  if (order === "inverse") {
    return (
      <article className="TeamMemberCard inverse">
        {writtenContent}
        {photoTeamMember}
      </article>
    )
  } else {
    return (
      <article className="TeamMemberCard">
        {photoTeamMember}
        {writtenContent}
      </article>
    )
  }
}

TeamMemberCard.defaultProps = {
  order: "default",
}

export default TeamMemberCard
