import React from "react"
import "./styles/ContactForm.css"

function ContactForm(props) {
  return (
    <form method="post"   className="ContactForm" name="contact-form" action="https://formspree.io/f.palacios@impulsados.cl" netlify>
      <h2 className="ContactForm__title">
        <span className="ContactForm__title-base">Solicita una demo</span>{" "}
        <br />
        <span className="ContactForm__title-constrast"> de tu proyecto</span>
      </h2>
      <input type="text" placeholder="Nombre" name="name" />
      <input type="text" placeholder="Apellido" name="lastname" />
      <input type="email" placeholder="Email" name="_replyto"  />
      <input type="text" placeholder="Teléfono" name="phone" />
      <input type="text" placeholder="Empresa" name="company" />
      <textarea placeholder="Mensaje" rows="8" name="message"></textarea>
      <input type="submit" value="Solicitar Demo" className="call-to-action" />
      <input type="text" name="_gotcha" style={{display:"none"}} />
    </form>
  )
}

export default ContactForm
