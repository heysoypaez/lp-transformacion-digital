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
    <SEO title="Inicio" />
    <Principal />
    <BenefitsSection /> {/*Benefits*/}
    <OurTeam /> {/*OurTeam*/}
    <CompaniesTrust />
    <OurProposal />
  </Layout>
)

export default IndexPage
