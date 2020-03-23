
import React from "react";
import "./styles/AboutUs.css";

function AboutUs(props) {
	
	return(
		<section class="layout-section about-us-section">
			<section class="about-us-section__item about-us-section__item-1">
				<h2 class="about-us-section__item-1__title   title--contrast">¿Quiénes somos?</h2>
				<p>Smooth Talkers es una empresa constituida en febrero del 2012, ganadores del Capital Semilla Emprendimiento durante el año 2012.</p>

				<p>Nos dedicamos al entrenamiento personalizado de los idiomas inglés, portugués y español en modalidad presencial y online.</p>
				<p> Todos nuestros profesores cuentan con experiencia y acreditación en la enseñanza de idiomas, los cuales se destacan especialmente por su dedicación y método pedagógico. </p>
				<p>Dictamos clases en distintas modalidades: clases particulares, clases grupales, clases franquicia SENCE, clases para niños, preparación para TOELF/IELTS, clases con enfoque al inglés de negocios, preparación para entrevistas laborales en inglés y clases online.</p>
			</section>


			<section class="about-us-section__item about-us-section__item-2">
				<img src="./../images/img/equipo-en-oficina-smooth-talkers.jpg" width="100%" />
			</section>
		</section>
	)
}

export default AboutUs;


