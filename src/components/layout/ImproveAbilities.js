
import React from "react";
import "./styles/ImproveAbilities.css";

function ImproveAbilities(props) {
	
	return(
		<section class="layout-section improve-abilities-section">
			<section class="improve-abilities-section__item improve-abilities-section__item-1">
				<h3 class="improve-abilities-section__item-1__title">Perfecciona tus habilidades</h3>
			</section>
			<section class="improve-abilities-section__item improve-abilities-section__item-2">
				<ul>
					<li> <img class="improve-abilities-section__icon" src="../images/icons/pen-square-solid.svg" width="48" />
					<p>Escritura</p></li>
					<li> <img class="improve-abilities-section__icon" src="../images/icons/book-reader-solid.svg" width="48" />  <p>Comprensión lectora</p></li>
					<li> <img class="improve-abilities-section__icon" src="../images/icons/headphones-solid.svg" width="48" /><p>Comprensión auditiva</p></li>
					<li> <img class="improve-abilities-section__icon" src="../images/icons/comments-solid.svg" width="48" /> <p>Fluidez y pronunciación</p></li>
				</ul>
			</section>
		</section>
	)
}

export default ImproveAbilities;


