import React from "react"
import "./styles/ContactForm.css"

function ContactForm(props) {
  return (
    <form className="ContactForm">
      <h2 className="ContactForm__title">
        <span className="ContactForm__title-base">Solicita una demo</span> <br />
        <span className="ContactForm__title-constrast"> de tu proyecto</span>
      </h2>
      <input type="text" placeholder="Nombre" />
      <input type="text" placeholder="Apellido" />
      <input type="text" placeholder="Teléfono" />
      <input type="text" placeholder="Empresa" />
      <textarea placeholder="Mensaje" rows="8"></textarea>
      <input type="submit" value="Solicitar Demo" className="call-to-action" />
    </form>
  )
}

export default ContactForm
