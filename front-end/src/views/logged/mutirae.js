import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

class Mutirae extends React.Component {
	constructor() {
		super();
		this.state = {
			mutiroes: [],
		};
	}

	componentDidMount = () => {
		axios
			.get("https://mutirae-backend.herokuapp.com/mutiroes")
			.then((resposta) => {
				this.setState({ mutiroes: resposta.data.query });
				console.log(resposta);
			});
	};

	handleClick = (e) => {
		e.preventDefault();
        let dados = [];
        dados.push({
            user: this.props.userLogged,
            titulo: e.target.name,
        })

		axios({
			method: "DELETE",
			data: dados,
			url: "https://mutirae-backend.herokuapp.com/mutiroes/excluir",
		}).then((res) => {
            alert(res.data.message);
			window.location.reload();
        })
	};

	Remover(id, titulo, user) {
		if (this.props.userLogged == user) {
			return (
				<div class="d-inline m-2">
					<button
						onClick={this.handleClick}
						class="btn-mutiroesRemove btn btn-danger"
						value={id}
                        name={titulo}
					>
						Remover
					</button>
				</div>
			);
		}
	}

	GeraMuti() {
		return this.state.mutiroes.map((mutirao) => {
			var format = require("date-fns/format");
			mutirao.data = new Date(mutirao.data);
			return (
				<div class="col-lg-4 p-3">
					<div class="card card-item ">
						<div class="d-flex justify-content-center align-items-center">
							<img
								class="card-img-top img-fluid"
								style={{ width: "300px", height: "200px" }}
								src={`data:image/png;base64,${mutirao.img}`}
								alt="Card image cap"
							/>
						</div>
						<div class="card-body">
							<div class="">
								<h5 class="card-title">{mutirao.titulo}</h5>
								<p locale="pt" class="card-text">
									{format(
										mutirao.data,
										"dd/MM/yyyy 'às' HH:mm"
									)}
								</p>
							</div>
							<button
								class="btn btn-primary item-mutirao"
								value={mutirao.id}
							>
								Saiba Mais
							</button>
							{this.Remover(mutirao.id, mutirao.titulo, mutirao.user)}
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div class="container">
				<div class="row">
					<div class="col-md-12 d-flex justify-content-end align-items-end">
						<Link to="/criarmutira">
							<i class="fas fa-plus-square icon-plus"></i>
						</Link>
					</div>
				</div>
				<div class="row">{this.GeraMuti()}</div>
			</div>
		);
	}
}

const mapStateToProps = ({ user: { userLogged } }) => ({
	userLogged,
});

export default connect(mapStateToProps)(Mutirae);
