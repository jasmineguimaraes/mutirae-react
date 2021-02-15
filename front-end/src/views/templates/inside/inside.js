import React from "react";

import Navbar from "../../logged/navbar";
import Menu from '../../logged/menu'

import "../../../css/App/mutirae/mutirae.css"

const InsidePages = (props) => {
	return (
		<div className="wrapper">
			<Navbar />
			<div id="content">
				<nav class="navbar navbar-expand-lg navbar-light bg-light">
					<div class="container-fluid">
						<button
							type="button"
							id="sidebarCollapse"
							class="btn btn-info"
						>
							<i class="fas fa-align-left"></i>
						</button>
					</div>
				</nav>
				<div id="conteudo">
					<Menu/>
					<div class="render">{props.children}</div>
				</div>
			</div>
		</div>
	);
};

export default InsidePages;
