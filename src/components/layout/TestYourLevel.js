
import React from "react";
import "./styles/TestYourLevel.css";

function TestYourLevel(props) {
	
	return(
		<section class="layout-section test-your-level-section">
			<section class="test-your-level-section__item test-your-level-section__item-1">
				<h2 class="test-your-level-section__item-1__title">Niveles</h2>
				<ul>
					<li>TEST DE EVALUACIÓN ONLINE GRATIS +</li>
					<li>EVALUACIÓN PRESENCIAL U ONLINE PERSONALIZADA</li>
					<li>PARA DEFINIR EL NIVEL DE INGLÉS JUNTO CON LAS HABILIDADES QUE SE DEBEN REFORZAR (LISTENING, SPEAKING, READING Y WRITING)</li>
				</ul>
			</section>
			 <section class="test-your-level-section__item test-your-level-section__item-2">
			 		<img src="../images/img/niveles-de-idioma.png" alt="test-your-level" />
			 </section> 
		</section>
	)
}

export default TestYourLevel;


