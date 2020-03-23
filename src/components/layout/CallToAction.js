
import React from "react";
import "./styles/CallToAction.css";
import PropTypes from "prop-types"

function CallToAction({title, linkTo}) {
	
	return(
		<section class="call-to-action text">
			<a href={linkTo} class="call-to-action text">
				{title}
			</a>
		</section>
	)
}

export default CallToAction;



CallToAction.defaultProps = {
  title: `Más información`,
  linkTo: `#mas-info`
}