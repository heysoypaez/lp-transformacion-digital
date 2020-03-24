import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import {
  Principal,
  OurTeam,
  BenefitsSection,
  CompaniesTrust,
  OurProposal,
} from "../components/layout/index.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Gracias" />
    <h1>
      <center>Gracias por confiar en nosotros tú tambien</center>
    </h1>
    <CompaniesTrust />
  </Layout>
)

export default IndexPage
