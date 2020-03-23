
import React from "react";
import "./styles/HowWeDo.css";

function HowWeDo(props) {
	
	return(
		<section class="layout-section how-we-do-section">
			<section class="how-we-do-section__item how-we-do-section__item-1">
				
			
				<img src="./../images/img/estudia-en-pareja.gif" width="70%" />
 
			</section>


			<section class="how-we-do-section__item how-we-do-section__item-2">
				<h2 class="how-we-do-section__item-1__title   title--contrast">¿Cómo lo hacemos?</h2>

				<p>Al guardar tu cupo, usaremos tus datos (nivel, disponibilidad, objetivos e intereses) y buscaremos en nuestra base de datos tu class match ideal para que compartas tus clases y ahorres entre 40 y 60% en tus clases de inglés o portugués personalizadas</p>
			</section>
		</section>
	)
}

export default HowWeDo;


