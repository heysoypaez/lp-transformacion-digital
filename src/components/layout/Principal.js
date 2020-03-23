
import React from "react";
import "./styles/Principal.css";
import ContactForm from "./ContactForm.js"

function Principal(props) {
	
	return(
	  <section className="principal-section__out">
		<section className="layout-section principal-section" >
			<section className="principal-section__item principal-section__item-1">
				<h1 className="principal-section__item principal-section__item-1__title">Transformación digital para academias e instituciones</h1>
				<p className="principal-section__item-1__description">Desarrollamos plataformas y sistemas personalizados para adaptar la educación presencial a una modalidad online con foco en el aprendizaje.</p>
			</section>
			<section className="principal-section__item principal-section__item-2" id="mas-info">
				<ContactForm />
			</section>
		</section>
		</section>
	)
}

export default Principal;


