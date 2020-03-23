
import React from "react";
import "./styles/OurTeachers.css";

function OurTeachers(props) {
	
	return(
		<section class="layout-section our-teachers-section">
			<section class="our-teachers-section__item our-teachers-section__item-1">
				<iframe width="100%" height="470" src="https://www.youtube.com/embed/wIsTAQ6-p-A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</section>
			<section class="our-teachers-section__item our-teachers-section__item-2">
				<h2 class=" our-teachers-section__item-2__title  title--contrast">Conoce a nuestros profesores</h2>
				<p>En este video de preguntas y respuestas con algunos de nuestros profesores, responden a preguntas divertidas para conocer más acerca de sus gustos personales y aprender más vocabulario relacionado a la vida cotidiana.</p>
			</section>

		</section>
	)
}

export default OurTeachers;


