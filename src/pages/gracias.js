import React, { Component } from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { CompaniesTrust } from "../components/layout/index.js"

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

        <h1>
          <center>Gracias por confiar en nosotros tú tambien</center>
        </h1>
        <CompaniesTrust />
      </Layout>
    )
  }
}

export default IndexPage
