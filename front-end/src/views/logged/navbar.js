import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


function Navbar({userLogged}) {
	return (
		<nav id="sidebar">
			<div class="sidebar-header">
				<div class="row justify-content-center ">
					<img
						src="img/together-w.png"
						style={{width:"50px", height:"50px"}}
						class="mr-3"
					/>
					<h3>Menu</h3>
				</div>
			<h4>Olá, {userLogged}!</h4>
			</div>
			<ul class="list-unstyled components">
				<li>
					<a id="mutiras" href="/Appmutira">
						Mutirões
					</a>
				</li>
				<li>
					<a id="rede" href="/Apprede">
						Rede
					</a>
				</li>
				<li>
					<a id="perfil" href="/perfil">
						Perfil
					</a>
				</li>

				<li>
					<a class="block" href="#">
						Configurações
					</a>
				</li>
				<li>
					<a class="block" href="#">
						Contato
					</a>
				</li>
				<li>
					<a class="block" href="#">
						Calendário
					</a>
				</li>
				<li>
					<a
						href="#pageSubmenu"
						data-toggle="collapse"
						aria-expanded="false"
						class="dropdown-toggle block"
					>
						Ajuda
					</a>
					<ul class="collapse list-unstyled" id="pageSubmenu">
						<li></li>
					</ul>
				</li>
			</ul>
		</nav>
	);
}

const mapStateToProps = ({ user: { userLogged } }) => ({
	userLogged,
});

export default connect(mapStateToProps)(Navbar);
