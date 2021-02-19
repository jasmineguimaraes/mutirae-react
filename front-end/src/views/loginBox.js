import React from "react";
import axios from "axios";

import { connect } from "react-redux";
import { login } from "../redux/action/login";
import { user } from '../redux/action/user'
import history from "../history";

import "../css/login/login.css";

class LoginBox extends React.Component {
	constructor() {
		super();
		this.state = {
			errors: {},
			login: "",
			nome: "",
			senha: "",
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		//Fazer a verificaçao do usuario no bd
		if (this.validate()){
            axios
			.post("https://mutirae-backend.herokuapp.com/login", {
				username: this.state.nome,
				password: this.state.senha,
			})
			.then((res) => {
				console.log(res.data.success);
				if (res.data.success) {
					this.props.login(true);
					this.props.user(this.state.nome);
					this.setState({ nome: "", senha: "" });
					history.push("/timeline");
				} else {
					alert(res.data.message);
					window.location.reload();
				}
			});
		} else {
			alert("Dados invalidos!");
			window.location.reload();
		}
	};

	validate() {
		let name = this.state.nome;
		let senha = this.state.senha;
		let errors = {};

		let isValid = true;

		if (!name) {
			isValid = false;

			errors["name"] = "Please enter your name.";
		}
		if (!senha) {
			isValid = false;

			errors["password"] = "Please enter your password.";
		}
		this.setState({
			errors: errors,
		});
		return isValid;
	}

	render() {
		const login = this.state.login == "erro";
		let divStyle = {};
		if (login) {
			divStyle = {
				display: "flex",
				position: "absolute",
				zIndex: "2",
			};
		}

		return (
			<div id="telaLogin" style={divStyle}>
				<div
					className={
						this.state.login != "erro"
							? "wrapper-login fadeInDown"
							: "wrapper-login"
					}
				>
					<div id="formContent">
						<i id="icoIMG" className="far fa-times-circle"></i>
						<br />
						<div
							className={
								this.state.login != "erro"
									? "first fadeInDown"
									: "first"
							}
						></div>

						<form onSubmit={this.handleSubmit}>
							<input
								type="text"
								id="nome"
								onChange={this.handleChange}
								className={
									this.state.login != "erro"
										? "fadeInDown input-text second "
										: "input-text second"
								}
								name="login"
								placeholder="usuário"
							/>
                            <div className="text-danger">{this.state.errors.name}</div>
							<input
								type="password"
								id="senha"
								onChange={this.handleChange}
								className={
									this.state.login != "erro"
										? "input-text third fadeInDown"
										: "input-text third"
								}
								name="senha"
								placeholder="senha"
							/>
                            <div className="text-danger">{this.state.errors.password}</div>
							<input
								type="submit"
								className={
									this.state.login != "erro"
										? "btn-login fourth fadeInDown"
										: "btn-login fourth"
								}
								value="Log In"
							/>
						</form>
						{this.state.login == "erro" ? (
							<span className="msgErro fadeInDown">
								Erro na Autenticação
							</span>
						) : (
							""
						)}
						<div id="formFooter">
							<a className="underlineHover" href="#">
								Esqueceu a senha?
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	login: (isLogged) => dispatch(login(isLogged)),
	user: (userLogged) => dispatch(user(userLogged)),
});
export default connect(null, mapDispatchToProps)(LoginBox);
