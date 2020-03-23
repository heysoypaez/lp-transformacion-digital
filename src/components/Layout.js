/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import Header from "./layout/Header"
import Footer from "./layout/Footer"
import "./Layout.css"

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
