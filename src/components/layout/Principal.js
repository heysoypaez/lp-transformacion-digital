
import React from "react";
import "./styles/Principal.css";

function Principal(props) {
	
	return(
		<section class="layout-section principal-section" >
			<section class="principal-section__item principal-section__item-1">
				<h1 class="principal-section__item principal-section__item-1__title">Encuentra tu partner de idiomas ideal</h1>
				<ul>
					<li>Modalidad de estudio de idiomas personalizada.</li>
					<li>Toma clases en tu horario de preferencia.</li>
					<li>Estudia con personas de tu mismo nivel y mismo perfil.</li>
					<li>Bajo costo.</li>
				</ul>
			</section>
			<section class="principal-section__item principal-section__item-2" id="mas-info">
				<iframe id="inlineFrameExample"
			    title="Inline Frame Example"
			    width="100%"
			    height="500px"
			    src="https://form.jotform.com/200316876539663">
			</iframe>

			</section>
		</section>
	)
}

export default Principal;


