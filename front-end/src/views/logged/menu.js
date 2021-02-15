import React from "react";
//import axios from 'axios';
import history from "../../history"

import { connect } from "react-redux";
import { login } from "../../redux/action/login";

class Menu extends React.Component {
	handleClick = (e) => {
		e.preventDefault();
		this.props.login(false);
        history.push('/')
	};

	render() {
		return (
			<nav class="navbar navbar-expand-lg menu">
				<div class="container">
					<div class="navbar-nav">
						<a class="menuItem" href="/timeline">
							Home
						</a>
						<a class="menuItem" onClick={this.handleClick}>
							Sair
						</a>
					</div>
				</div>
			</nav>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	login: (isLogged) => dispatch(login(isLogged)),
});
export default connect(null, mapDispatchToProps)(Menu);
