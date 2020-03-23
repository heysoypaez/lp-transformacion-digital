import React from "react"
import "./styles/ContactForm.css"

function ContactForm(props) {
  return (
    <form className="ContactForm" name="contact-form" netlify>
      <h2 className="ContactForm__title">
        <span className="ContactForm__title-base">Solicita una demo</span>{" "}
        <br />
        <span className="ContactForm__title-constrast"> de tu proyecto</span>
      </h2>
      <input type="text" placeholder="Nombre" name="name" />
      <input type="text" placeholder="Apellido" name="lastname" />
      <input type="text" placeholder="Teléfono" name="phone" />
      <input type="text" placeholder="Empresa" name="company" />
      <textarea placeholder="Mensaje" rows="8" name="message"></textarea>
      <input type="submit" value="Solicitar Demo" className="call-to-action" />
    </form>
  )
}

export default ContactForm
