
import React from "react";
import "./styles/CallToAction.css";
import PropTypes from "prop-types"

function CallToAction({title, linkTo}) {
	
	return(
		<section className="call-to-action text">
			<a href={linkTo} className="call-to-action text">
				{title}
			</a>
		</section>
	)
}

export default CallToAction;



CallToAction.defaultProps = {
  title: `Solicitar Demo`,
  linkTo: `#mas-info`
}