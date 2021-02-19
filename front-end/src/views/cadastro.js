import React from "react";
import axios from "axios";
import history from "../history";

import "../css/cadastro/formulario.css";

class Cadastro extends React.Component {
	constructor() {
		super();
		this.state = {
			errors: {},
			nome: "",
			senha: "",
			senhaConf: "",
			cep: "",
			endereco: "",
			endNum: "",
			endComp: "",
			cidade: "",
		};
		this.handleNomeChange = this.handleChange.bind(this, "nome");
		this.handleSenhaChange = this.handleChange.bind(this, "senha");
		this.handleSenhaConfChange = this.handleChange.bind(this, "senhaConf");
		this.handleCepChange = this.handleChange.bind(this, "cep");
		this.handleEnderecoChange = this.handleChange.bind(this, "endereco");
		this.handleEndNumChange = this.handleChange.bind(this, "endNum");
		this.handleEndCompChange = this.handleChange.bind(this, "endComp");
		this.handleCidadeChange = this.handleChange.bind(this, "cidade");
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(keyName, e) {
		this.setState({ [keyName]: e.target.value });
	}
	//<span class="text text-danger">* Nome de usuário errado</span>
	handleSubmit = (e) => {
		e.preventDefault();
		if (this.validate()){
            let dados = [];
            dados.push({
                nome_usuario: this.state.nome,
                senha_usuario: this.state.senha,
                cep: this.state.cep,
                numero_usuario: this.state.endNum,
                cidade_usuario: this.state.cidade,
                endereco_usuario: this.state.endereco,
                complemento_usuario: this.state.endComp,
            });
            axios({
                method: "POST",
                data: dados,
                withCredentials: true,
                url: "http://localhost:4000/users/cadastrar",
            }).then((res) => {
                alert(res.data.message);
                history.push("/");
            });
        } else {
			alert("Dados invalidos!");
			window.location.reload();
		}
	};

	validate() {
		let nome = this.state.nome;
		let senha = this.state.senha;
		let senhaConf = this.state.senhaConf;
		let cep = this.state.cep;
		let endereco = this.state.endereco;
		let endNum = this.state.endNum;
		let endComp = this.state.endComp;
		let cidade = this.state.cidade;
		let errors = {};

		let isValid = true;

		if (!nome) {
			isValid = false;

			errors["name"] = "Por favor preencha o usuário.";
		}
		if (!senha) {
			isValid = false;

			errors["password"] = "Por favor preencha sua senha.";
		}
		if (!senhaConf) {
			isValid = false;

			errors["senhaConf"] = "As senha não são iguais.";
		}
		if (senha != senhaConf) {
			isValid = false;

			errors["senhaConf"] = "As senha não são iguais.";
		}
		if (!cep) {
			isValid = false;

			errors["cep"] = "Por favor preencha seu cep.";
		}
		if (!endereco) {
			isValid = false;

			errors["endereco"] = "Por favor preencha seu endereco.";
		}
		if (!endNum) {
			isValid = false;

			errors["endNum"] = "Por favor preencha seu endereco.";
		}
		if (!endComp) {
			isValid = false;

			errors["endComp"] = "Por favor preencha seu endereco.";
		}
		if (!cidade) {
			isValid = false;

			errors["cidade"] = "Por favor preencha sua cidade.";
		}
		this.setState({
			errors: errors,
		});
		return isValid;
	}

	render() {
		return (
			<div class="row justify-content-center align-items-center formulario">
				<div class="col-md-5">
					<div class="container">
						<div class="text-center">
							<br />
							<fieldset>
								<legend
									class="h1 titulo-ins"
									style={{ "font-weight": "500" }}
								>
									Cadastre-se
								</legend>
								<form
									class="row g-3 form"
									onSubmit={this.handleSubmit}
								>
									<div class="col-md-12">
										<input
											style={{ width: "300px" }}
											type="text"
											onChange={this.handleNomeChange}
											value={this.state.nome}
											name="nome"
											placeholder="Nome Completo"
											class="form-control"
											id="inputEmail4"
										/>
										<div className="text-danger">
											{this.state.errors.name}
										</div>
									</div>

									<div class="col-md-12">
										<input
											style={{ width: "300px" }}
											type="password"
											onChange={this.handleSenhaChange}
											value={this.state.senha}
											name="senha"
											placeholder="Senha"
											class="form-control"
											id="inputPassword4"
										/>
										<div className="text-danger">
											{this.state.errors.password}
										</div>
									</div>
									<div class="col-md-12">
										<input
											style={{ width: "300px" }}
											type="password"
											onChange={
												this.handleSenhaConfChange
											}
											value={this.state.senhaConf}
											name="csenha"
											placeholder="Confirmar Senha"
											class="form-control"
											id="inputPassword4"
										/>
										<div className="text-danger">
											{this.state.errors.senhaConf}
										</div>
									</div>
									<div class="col-md-12">
										<input
											type="text"
											style={{ width: "200px" }}
											onChange={this.handleCepChange}
											value={this.state.cep}
											name="cep"
											class="form-control"
											id="inputCity"
											placeholder="CEP"
										/>
										<div className="text-danger">
											{this.state.errors.cep}
										</div>
									</div>
									<div class="col-md-12">
										<input
											style={{ width: "200px" }}
											type="text"
											onChange={this.handleEndNumChange}
											value={this.state.endNum}
											name="numero"
											class="form-control"
											id="inputCity"
											placeholder="Número"
										/>
										<div className="text-danger">
											{this.state.errors.endNum}
										</div>
									</div>

									<div class="col-md-12">
										<input
											style={{ width: "200px" }}
											type="text"
											onChange={this.handleCidadeChange}
											value={this.state.cidade}
											name="cidade"
											class="form-control"
											id="inputCity"
											placeholder="Cidade"
										/>
										<div className="text-danger">
											{this.state.errors.cidade}
										</div>
									</div>
									<div class="col-12">
										<input
											style={{ width: "400px" }}
											type="text"
											onChange={this.handleEnderecoChange}
											value={this.state.endereco}
											name="endereco"
											class="form-control"
											id="inputAddress"
											placeholder="Endereço"
										/>
										<div className="text-danger">
											{this.state.errors.endereco}
										</div>
									</div>
									<div class="col-12">
										<input
											style={{ width: "300px" }}
											type="text"
											onChange={this.handleEndCompChange}
											value={this.state.endComp}
											name="complemento"
											class="form-control"
											id="inputAddress2"
											placeholder="Complemento"
										/>
										<div className="text-danger">
											{this.state.errors.endComp}
										</div>
									</div>

									<div class="col-12">
										<div class="text-center">
											<button
												type="submit"
												class=" btn btn-success"
											>
												Cadastrar
											</button>
										</div>
									</div>
								</form>
							</fieldset>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Cadastro;
