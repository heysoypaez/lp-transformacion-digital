import React, { Component } from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { CompaniesTrust } from "../components/layout/index.js"
import { InlineWidget } from "react-calendly"

class IndexPage extends Component {
  componentDidMount() {
    if (typeof window !== "undefined") {
      if (window.fbq != null) {
        window.fbq("track", "PageView")
      }
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Gracias" />

        <h2
          style={{
            textAlign: "center",
            padding: "0 15%",
          }}
        >
          Gracias por contactarnos, ahora el último paso, necesitamos que
          agendes según tu disponibilidad un horario para nuestra reunión de
          Demostración y resolver tus dudas.
        </h2>
        <InlineWidget
          url="https://calendly.com/fabian-impulsados"
          text="Modern React component module"
        />
        <CompaniesTrust />
      </Layout>
    )
  }
}

export default IndexPage
