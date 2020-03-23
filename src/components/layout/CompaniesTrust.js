
import React from "react";
import "./styles/CompaniesTrust.css";

function CompaniesTrust(props) {
	
	return(
		<section class="layout-section companies-trust-section">
			<section class="companies-trust-section__item companies-trust-section__item-1">
				<h3 class="  companies-trust-section__item-1__title title--contrast">Empresas que confían en nosotros</h3>
			</section>
			<section class="companies-trust-section__item-2 companies-trust-section__item-2__companies">
				<figure class="companies-trust-section_item companies-trust-section_item-1">
					<img src="../images/img/companies/teck.png" width="150" />
				</figure>
				<figure class="companies-trust-section_item companies-trust-section_item-1">
					<img src="../images/img/companies/bci.png" width="150" />
				</figure>
				<figure class="companies-trust-section_item companies-trust-section_item-1">
					<img src="../images/img/companies/gmo.png" width="150" />
				</figure>
				<figure class="companies-trust-section_item companies-trust-section_item-1">
					<img src="../images/img/companies/fresenius.png" width="150" />
				</figure>

			</section>
		</section>
	)
}

export default CompaniesTrust;


