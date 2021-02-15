import React from 'react';
import { connect } from 'react-redux';
import { login } from "../redux/action/login";

import '../css/login/login.css'


class LoginBox extends React.Component{
    constructor(){
        super();
        this.state={
            login: '',
            nome: '',
            senha: ''
        }
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        //Fazer a verificaçao do usuario no bd
        this.props.login(true);
        this.setState({ nome: "", senha: "" });
    }

    render(){
        const login = this.state.login == 'erro'
        let divStyle = {}
        if (login){
            divStyle = {
                "display":'flex',
                "position":'absolute',
                "zIndex":'2'
            }
        }

        return(
            <div id="telaLogin" style={divStyle}>
                <div className={this.state.login != 'erro'? 'wrapper fadeInDown': 'wrapper'}>
                    <div id="formContent">
                        <i id="icoIMG" className="far fa-times-circle"></i>
                        <br/>
                        <div className={this.state.login != 'erro'? 'first fadeInDown': 'first'}>
                        </div>
            
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" id="nome" onChange={this.handleChange} className={this.state.login != 'erro'? 'fadeInDown input-text second ': 'input-text second'} name="login" placeholder="login"/>
                            <input type="password" id="senha" onChange={this.handleChange} className={this.state.login != 'erro'? 'input-text third fadeInDown': 'input-text third'} name="senha" placeholder="password"/>
                            <input type="submit" className={this.state.login != 'erro'? 'btn-login fourth fadeInDown': 'btn-login fourth'} value="Log In"/>
                        </form>
                        {this.state.login == 'erro'? <span className="msgErro fadeInDown">Erro na Autenticação</span>:""}
                        <div id="formFooter">
                        <a className="underlineHover" href="#">Esqueceu a senha?</a>
                        </div>
            
                    </div>
                </div>
            </div>
        )
    }
    
}

const mapDispatchToProps = dispatch => ({
    login: isLogged => dispatch(login(isLogged))
})
export default connect(null, mapDispatchToProps)(LoginBox);