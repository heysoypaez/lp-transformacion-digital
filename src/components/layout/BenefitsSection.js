import React from "react"
import "./styles/BenefitsSection.css"

function BenefitsSection(props) {
  return (
    <section class="layout-section improve-abilities-section">
      <section class="improve-abilities-section__item improve-abilities-section__item-1">
        <h3 class="improve-abilities-section__item-1__title">Te ayudamos a</h3>
      </section>
      <section class="improve-abilities-section__item improve-abilities-section__item-2">
        <ul>
          <li>
            {" "}
            <img
              class="improve-abilities-section__icon"
              src="../images/icons/pen-square-solid.svg"
              width="48"
            />
            <p>Digitalizar tu contenido</p>
          </li>
          <li>
            {" "}
            <img
              class="improve-abilities-section__icon"
              src="../images/icons/book-reader-solid.svg"
              width="48"
            />{" "}
            <p>Desarrollar una plataforma personalizada</p>
          </li>
          <li>
            {" "}
            <img
              class="improve-abilities-section__icon"
              src="../images/icons/headphones-solid.svg"
              width="48"
            />
            <p>Generar un sistema personalizado</p>
          </li>
          <li>
            {" "}
            <img
              class="improve-abilities-section__icon"
              src="../images/icons/comments-solid.svg"
              width="48"
            />{" "}
            <p>Captar Alumnos</p>
          </li>
        </ul>
      </section>
    </section>
  )
}

export default BenefitsSection
