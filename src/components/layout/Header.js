import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./styles/Header.css"

const Header = ({ siteTitle }) => (
  <header class="header">
    <figure class="header__item header__item-1">
      <img src="../images/img/grouping-logo.png" width="350" />
    </figure>
    <section class="header__item header__item-2">
    </section>
    <section class="header__item header__item-3">
      <ul>
        <li>  <img src="../images/icons/phone-solid.svg" width="24px" height="24px" /><a href="tel:+56987572595">+56987572595</a>/ <a href="tel:223780015">223780015</a> </li>
        <li>  <img src="../images/icons/envelope-solid.svg" /> <a href="mailto:info@smoothtalkers.cl">info@smoothtalkers.cl </a></li>
      </ul>
    </section>
  </header>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
