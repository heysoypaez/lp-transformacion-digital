import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/Seo"
import { 
	Principal, HowWeDo, AboutUs,
	CallToAction, OurTeachers, BenefitsSection,
	TestYourLevel, CompaniesTrust, OurProposal, StudentsComment,
	Footer
} from "../components/layout/index.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />	
		<Principal />
		<BenefitsSection /> {/*Benefits*/}
		<OurTeachers /> {/*OurTeam*/}
		<CompaniesTrust />
		<OurProposal />
  </Layout>
)

export default IndexPage
