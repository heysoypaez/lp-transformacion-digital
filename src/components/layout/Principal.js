
import React from "react";
import "./styles/Principal.css";
import ContactForm from "./ContactForm.js"

function Principal(props) {
	
	return(
		<section class="layout-section principal-section" >
			<section class="principal-section__item principal-section__item-1">
				<h1 class="principal-section__item principal-section__item-1__title">Transformación digital para academias e instituciones</h1>
				<p>Desarrollamos plataformas y sistemas personalizados para adaptar la educación presencial a una modalidad online con foco en el aprendizaje.</p>
			</section>
			<section class="principal-section__item principal-section__item-2" id="mas-info">
				<ContactForm />
			</section>
		</section>
	)
}

export default Principal;


