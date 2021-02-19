import React from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import pt from "date-fns/locale/pt-BR";
import { connect } from "react-redux";
import axios from "axios";
import history from "../../history";

import "react-datepicker/dist/react-datepicker.css";
registerLocale("pt-BR", pt);
class CriarMutira extends React.Component {
	constructor() {
		super();
		this.state = {
			titulo: "",
			date: new Date(),
			image: undefined,
			local: "",
			desc: "",
		};
		this.handleTituloChange = this.handleChange.bind(this, "titulo");
		this.handleDataChange = this.handleChange.bind(this, "date");
		this.onImageChange = this.onImageChange.bind(this);
		this.handleLocalChange = this.handleChange.bind(this, "local");
		this.handleDescChange = this.handleChange.bind(this, "desc");
	}

	_handleReaderLoaded = (readerEvt) => {
		let binaryString = readerEvt.target.result;
		this.setState({
			image: btoa(binaryString),
		});
	};

	onImageChange = (event) => {
		if (event.target.files && event.target.files[0]) {
			let img = event.target.files[0];
			if (img) {
				const reader = new FileReader();
				reader.onload = this._handleReaderLoaded.bind(this);
				reader.readAsBinaryString(img);
			}
		}
	};

	handleChange(keyName, e) {
		if (keyName == "date") {
			this.setState({ [keyName]: e });
		} else {
			this.setState({ [keyName]: e.target.value });
		}
	}

	handleSumbit = (e) => {
		e.preventDefault();
		let dados = [];
		dados.push({
			titulo: this.state.titulo,
			data: this.state.date.toISOString().slice(0, 19).replace("T", " "),
			img: this.state.image,
			local: this.state.local,
			texto: this.state.desc,
			user: this.props.userLogged,
		});
		axios({
			method: "POST",
			data: dados,
			url: "https://mutirae-backend.herokuapp.com/mutiroes/salvar",
		}).then((res) => {
			alert(res.data.message);
			history.push("/Appmutira");
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSumbit} enctype="multipart/form-data">
				<div class="row">
					<div class="col-md-4 d-flex justify-content-center  align-items-center">
						<div class="form-group">
							<label for="exampleFormControlInput1">Título</label>
							<input
								value={this.state.titulo}
								onChange={this.handleTituloChange}
								name="titulo-mutira"
								type="text"
								class="form-control"
								id="exampleFormControlInput1"
							/>
						</div>
					</div>
					<div class="col-md-4 d-flex justify-content-center  align-items-center">
						<div class="form-group">
							<label for="exampleFormControlFile1">Data</label>
							<DatePicker
								locale="pt-BR"
								showTimeSelect
								timeFormat="p"
								timeIntervals={15}
								dateFormat="Pp"
								selected={this.state.date}
								onChange={this.handleDataChange}
								name="data-mutira"
								type="datetime-local"
								class="form-control-file"
								id="exampleFormControlFile1"
							/>
						</div>
					</div>
					<div class="col-md-4 d-flex justify-content-center  align-items-center">
						<div class="form-group">
							<label
								class="label btn btn-primary"
								for="exampleFormControlFile2"
							>
								Imagem
							</label>
							<img
								style={{
									"max-width": "300px",
									"max-height": "200px",
								}}
								src={`data:image/png;base64,${this.state.image}`}
							/>
							<input
								type="file"
								onChange={this.onImageChange}
								name="imagem-mutira"
								type="file"
								class="form-control-file"
								id="exampleFormControlFile2"
								accept=".jpeg .png .jpg"
							/>
						</div>
					</div>

					<div class="col-md-4 d-flex justify-content-center  align-items-center">
						<div class="form-group">
							<label for="exampleFormControlInput1">Local</label>
							<input
								value={this.state.local}
								onChange={this.handleLocalChange}
								name="local-mutira"
								type="text"
								class="form-control"
								id="exampleFormControlInput1"
							/>
						</div>
					</div>
					<div class="col-md-4"></div>

					<div class="col-md-4"></div>
				</div>
				<div class="row">
					<div class="col-md-12 d-flex justify-content-center align-items-center">
						<div class="form-group text-center">
							<label for="exampleFormControlTextarea1">
								Texto do Mutirão
							</label>
							<textarea
								value={this.state.desc}
								onChange={this.handleDescChange}
								name="texto-mutira"
								class="form-control texto-mutira"
								style={{ width: "600px", height: "200px" }}
								id="exampleFormControlTextarea1"
								rows="3"
							></textarea>
						</div>
					</div>
				</div>
				<div class="row d-flex justify-content-end p-0 m-0">
					<input type="submit" class="btn btn-primary"></input>
				</div>
			</form>
		);
	}
}

const mapStateToProps = ({ user: { userLogged } }) => ({
	userLogged,
});

export default connect(mapStateToProps)(CriarMutira);
