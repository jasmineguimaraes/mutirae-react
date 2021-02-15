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
								<h1 class="display-4">Cuidados com o lixo</h1>
								<p>
									Quando o lixo é recolhido de forma regular,
									toda a comunidade é beneficiada. Melhorando
									o aspecto do ambiente onde se vive, evitando
									doenças e aparecimento de animais
									indesejados.
								</p>
								<div class="d-grid gap-2 d-md-block">
									<a href="/inscreverse">
										<buton
											class="btn btn-success btn-lg w-50 m-4"
											type="button"
										>
											Cadastre-se
										</buton>
									</a>
								</div>

							</div>
						</div>
						<div class="mt-5 col-md-6 p-5 d-none d-md-block">
							<img
								class=" img-fluid rounded"
								src="/img/natureIMGR.jpg"
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
								<h2>Mutirão da ajuda</h2>
								<p>
									Estamos vivendo em época de pandemia. Como
									não podemos aglomerar, que tal fazer um
									mutirão diferente e de forma simples? Ajudar
									um vizinho idoso, a descartar o lixo de
									forma correta e segura. Começando pela
									separação do lixo, entre orgânicos e não
									orgânicos. Assim evita que a lixeira dentro
									de casa encha mais rápido, evitando sair de
									casa todo dia para o descarte do lixo.
								</p>
								<div class="d-flex justify-content-center">
									<a
										class=" btn btn-outline-success btn-lg "
										href=""
									>
										Veja mais
									</a>
								</div>
							</div>
						</div>
						<div class="col-md-6 d-none d-md-block">
							<img
								class="animeLeft img-fluid rounded"
								src="/img/naturezaLataR.jpg"
								alt=""
							/>
						</div>
					</div>
				</div>
			</section>
			<section class="caixa">
				<div class="container">
					<div class="row" style={{height:"400px"}}>
						<div class="col-md-6  d-none d-md-block">
							<img
								class="animeRight img-fluid rounded"
								src="/img/naturezaLixoR.jpg"
								alt=""
							/>
						</div>
						<div class="col-md-6 d-flex">
							<div class="align-self-center animeLeft">
								<h2>Área inicial analisada</h2>
								<p>
									Começamos o no projeto no Bairro Barra Vela,
									em Ramos, no subúrbio do Rio de Janeiro. A
									comunidade sofre regularmente com a falta de
									coleta de lixo, ainda mais nas áreas mais
									altas da comunidade. Onde o lixo acumula
									regularmente, trazendo muita sujeira, mau
									cheiro, bichos na região.
								</p>
								<div class="d-flex justify-content-center">
									<a
										class="btn btn-outline-success btn-lg"
										href=""
									>
										Veja mais
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<section class="caixa box">
					<div class="container">
						<div class="row">
							<div class="col-md-6 animeTop">
								<img class="img-fluid" src="" alt="" />
								<h4>Participe você também/Junte-se a nós</h4>
								<p>
									Mutiraê é uma plataforma jovem focada na
									conscientização das pessoas sobre o meio
									ambiente. Através de mutirões, podemos
									ajudar uma comunidade ou nossos vizinhos.
									Trabalhamos com a Associação de Moradores da
									comunidade Barra Vela, que nos auxilia em
									ações na comunidade.
								</p>
							</div>
							<div class="col-md-6 animeTop">
								<img class="img-fluid" src="" alt="" />
								<h4>Reciclagem</h4>
								<p>
									A maior parte do lixo recolhido é composta
									de materiais recicláveis. Um comportamento
									muito comum em uma sociedade que ainda não
									tem o hábito de separar o lixo e pensar no
									meio ambiente. Por anos, o Brasil deixa de
									ganhar 14 bilhões por falta de reciclagem
									adequada do lixo. Pense onde esse dinheiro
									poderia ser investido, se o lixo fosse
									descartado e reciclado de forma correta.l!
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