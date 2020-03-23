import React from "react";
import "./styles/WhatsappButton.css";

function WhatsappButton(props) {
	
	return(
		<section class="whatsapp-button">
			<figure class="whatsapp-button__container">
				<a 
					href="#" 
					onclick="return gtag_report_conversion('https://wa.me/56987572595')"
				> 
					<img src="../images/img/whatsapp-logo-1.png" alt="botón de Whatsapp" width="80" class="whatsapp-button__image" />
				</a>
			</figure>
		</section>
	)
}

export default WhatsappButton;


