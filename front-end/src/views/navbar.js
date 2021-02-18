import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

import "../css/header/header.css";

class Navbar extends React.Component {
	componentDidMount = () => {
		$(document).ready(function () {
			$("#entrar").on("click", () => {
				$("#telaLogin").css("display", "block");
				$("#telaLogin").css("position", "absolute");
				$("#telaLogin").css("z-index", "2");
			});

			$("#icoIMG").on("click", () => {
				$("#telaLogin").css("display", "none");
			});

			//Efeito menu navegacao com scroll

			//Efeitos scroll index
			//Right
			$(window).scroll(function () {
				var windowTop = $(this).scrollTop();
				$(".animeRight").each(function () {
					if (windowTop > $(this).offset().top - 400) {
						$(this).addClass("animeRight-init");
					} else {
					}
				});
			});

			//Left
			$(window).scroll(function () {
				var windowTop = $(this).scrollTop();
				$(".animeLeft").each(function () {
					if (windowTop > $(this).offset().top - 400) {
						$(this).addClass("animeLeft-init");
					} else {
					}
				});
			});

			//TOP
			$(window).scroll(function () {
				var windowTop = $(this).scrollTop();
				$(".animeTop").each(function () {
					if (windowTop > $(this).offset().top - 700) {
						$(this).addClass("animeTop-init");
					} else {
					}
				});
			});
		});
	};

	render() {
		return (
			<nav class=" nave-bar navbar navbar-expand-sm navbar-light ">
				<div class="container">
					<Link to="/" class="navbar-brand">
						<img
							style={{ width: "80px", height: "80px" }}
							src={"img/together-w.png"}
							alt=""
						/>
					</Link>

					<Link to="/" class="navbar-brand">
						<a  class='navbar-logo' style={{'font-family':'Fredoka One, cursive', 'font-size':'2.3rem', color:'#fafafa' }}>Mutiraê</a>
					</Link>
					<button
						class="navbar-toggler"
						data-toggle="collapse"
						data-target="#nav-principal"
					>
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse" id="nav-principal">
						<ul class="navbar-nav ml-auto align-items-center ">
							<li class="nav-item">
								<Link class="nav-link" to="/recursos">
									Comece um mutirão
								</Link>
							</li>
							{/*<li class="nav-item">
								<Link class="nav-link link-block " to="/lixo">
									O problema do lixo
								</Link>
							</li>*/}
							<li class="nav-item">
								<Link class="nav-link link-block" to="/guia">
									Como separar o lixo?
								</Link>
		</li> 

							<li class="nav-item">
								<Link class="nav-link" to="/sobreNos">
									Sobre Nós
								</Link>
							</li>
							<li class="nav-item">
								<a
									id="entrar"
									class="btn btn-outline-light ml-sm-4"
									href="#"
								>
									Entrar
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
