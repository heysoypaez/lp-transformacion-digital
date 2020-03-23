import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/Seo"
import { 
	Principal, HowWeDo, AboutUs,
	CallToAction, OurTeachers, ImproveAbilities,
	TestYourLevel, CompaniesTrust, StudentsComment,
	Footer
} from "../components/layout/index.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />	
		<Principal />
		<HowWeDo />
		<AboutUs />
		<CallToAction />

		<OurTeachers />
		<ImproveAbilities />
		<TestYourLevel />
		<CallToAction 
			title="Realiza el test de evaluación" 
			linkTo="https://my.questbase.com/take.aspx?pin=5847-9444-6118" />
				
		<CompaniesTrust />
		<StudentsComment />
		<CallToAction />
  </Layout>
)

export default IndexPage
