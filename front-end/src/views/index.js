import React from "react";

import "../css/index/index.css";

function Index() {
	return (
		<div>
			<section id="home">
				<div class="container">
					<div class="row">
						<div class="col-md-6 d-flex">
							<div class="align-self-center">
								<h1 class="display-4">Se junte aos seus vizinhos</h1>
								<p>
									Quando trabalhamos em conjunto com a nossa comunidade conseguimos bons resultados, 
									cadastre-se na Mutiraê e mobilize seus vizinhos para realizar ações em prol de todos.
								</p>
								<div class="d-grid gap-2 d-md-block">
									<a href="/inscreverse">
										<button
											class="btn btn-success btn-lg w-50 m-4"
											type="button"
										>
											Cadastre-se
										</button>
									</a>
								</div>

							</div>
						</div>
						<div class="mt-5 col-md-6 p-5 d-none d-md-block">
							<img
								class=" img-fluid"
								src="/img/Team work_Monochromatic.svg"
								style={{width: '100%'}}
								alt=""
							/>
						</div>
					</div>
				</div>
			</section>
			<hr />
			<section class="caixa">
				<div class="container">
					<div class="row" style={{height:"400px"}}>
						<div class="col-md-6 d-flex">
							<div class="align-self-center animeRight">
								<h2>Mutirão do Barra Vela</h2>
								<p>
									Organizamos o mutirão de separação de lixo na região do Barra Vela em Ramos - RJ, como nossa ação piloto. Caso você seja um morador da região, cadastre-se e se junte a seus vizinhos para melhorar a situação do lixo perto de sua casa! 
									Use o Guia de separação de lixo para aprender a melhor maneira de realizar ação, convide seus amigos e vizinhos a participar.
								</p>
								<div class="d-flex justify-content-center">
									<a
										class=" btn btn-outline-success btn-lg "
										href=""
									>
										Saiba mais
									</a>
								</div>
							</div>
						</div>
						<div class="col-md-6 d-none d-md-block">
							<img
								class="animeLeft img-fluid"
								src="/img/Team Work_Isometric.svg"
								style={{width: '100%'}}
								alt=""
							/>
							<br/>
						</div>
					</div>
				</div>
			</section>
			<section class="caixa">
				<div class="container">
					<div class="row" style={{height:"400px"}}>
						<div class="col-md-6  d-none d-md-block">
							<img
								class="animeRight img-fluid"
								src="/img/Wearing a mask _Two Color.svg"
								style={{width: '100%'}}
								alt=""
							/>
						</div>
						<div class="col-md-6 d-flex">
							<div class="align-self-center animeLeft">
								<h2>Seja consciente</h2>
								<p>
									Estamos vivendo num período que atividades presenciais são um grande risco para a saúde dos envolvidos. Então, enquanto estivermos durante a pandemia de COVID-19, não organize mutirões que gerem aglomerações. Preze por sua saúde e pela saúde dos seus vizinhos. 
									
								</p>
								
							</div>
						</div>
					</div>
				</div>
				<section class="caixa box">
					<div class="container">
						<div class="row">
							<div class="col-md-6 animeTop">
								<img class="img-fluid" src="" alt="" />
								<h4>Precisando de ajuda?</h4>
								<p>
									Pode ser um problema na sua casa, na sua rua ou no seu bairro. Crie um mutirão e chame seus vizinhos para ajudarem.
								</p>
							</div>
							<div class="col-md-6 animeTop">
								<img class="img-fluid" src="" alt="" />
								<h4>Ajude seus vizinhos!</h4>
								<p>
									De vez em quando passamos por problemas que com algumas mãozinhas extras se resolveriam mais facilmente. Ao ajudar seu vizinho você está contribuíndo pra comunidade.  
								</p>
							</div>
						</div>
					</div>
				</section>
			</section>
		</div>
	);
}

export default Index;