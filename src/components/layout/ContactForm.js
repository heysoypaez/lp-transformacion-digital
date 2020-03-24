import React from "react"
import { navigate } from "gatsby-link"
import "./styles/ContactForm.css"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

function ContactForm(props) {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <form
      method="POST"
      className="ContactForm"
      name="contact-form"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/gracias"
      onSubmit={handleSubmit}
    >
      <h2 className="ContactForm__title">
        <span className="ContactForm__title-base">Solicita una demo</span>{" "}
        <br />
        <span className="ContactForm__title-constrast"> de tu proyecto</span>
      </h2>
      <input
        onChange={handleChange}
        type="hidden"
        name="form-name"
        value="contact"
      />
      <input
        onChange={handleChange}
        type="text"
        placeholder="Nombre"
        name="name"
      />
      <input
        onChange={handleChange}
        type="text"
        placeholder="Apellido"
        name="lastname"
      />
      <input
        onChange={handleChange}
        type="email"
        placeholder="Email"
        name="_replyto"
      />
      <input
        onChange={handleChange}
        type="text"
        placeholder="Teléfono"
        name="phone"
      />
      <input
        onChange={handleChange}
        type="text"
        placeholder="Empresa"
        name="company"
      />
      <textarea placeholder="Mensaje" rows="8" name="message"></textarea>
      <input
        onChange={handleChange}
        type="submit"
        value="Solicitar Demo"
        className="call-to-action"
      />
      <input
        onChange={handleChange}
        type="text"
        name="_gotcha"
        style={{ display: "none" }}
      />
    </form>
  )
}

export default ContactForm
