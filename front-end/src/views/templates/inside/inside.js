import React from "react";

import Navbar from "../../logged/navbar";


const OutsidePages = (props) => {
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
					<nav class="navbar navbar-expand-lg menu">
						<div class="container">
							<div class="navbar-nav">
								<a class="menuItem" href="/timeline">
									Home
								</a>
								<a class="menuItem" href="/sair">
									Sair
								</a>
							</div>
						</div>
					</nav>
					<div class="render">{props.children}</div>
				</div>
			</div>
		</div>
	);
};

export default OutsidePages;
