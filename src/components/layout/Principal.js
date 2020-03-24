import React from "react"
import "./styles/Principal.css"
import ContactForm from "./ContactForm.js"

function Principal(props) {
  return (
    <section className="principal-section__out">
      <section className="layout-section principal-section">
        <section className="principal-section__item principal-section__item-1">
          <h1 className="principal-section__item principal-section__item-1__title">
            <span>Transformación digital</span> <br />{" "}
            <span className="principal-section__item-1__title-span-2">
              para academias e instituciones
            </span>
          </h1>
          <p className="principal-section__item-1__description">
            Desarrollamos plataformas y sistemas <br /> personalizados para
            adaptar la educación <br /> presencial a una modalidad online con{" "}
            <br />
            foco en el aprendizaje.
          </p>
        </section>
        <section
          className="principal-section__item principal-section__item-2"
          id="mas-info"
        >
          <ContactForm />
        </section>
      </section>
    </section>
  )
}

export default Principal
