
import React from "react";
//import "./styles/ContactForm.css";

function ContactForm(props) {
	
	return(
		<form className="ContactForm">
			<h2>Solicita una demo de tu proyecto</h2>
			<input type="text" placeholder="Nombre" />
			<input type="text" placeholder="Nombre" />
			<input type="text" placeholder="Nombre" />		
			<input type="text" placeholder="Nombre" />
			<input type="text" placeholder="Nombre" />		
			<input type="submit" value="Solicitar Demo" />
		</form>
	)
}

export default ContactForm;


