import React from 'react';

import '../css/header/header.css'
import '../css/login/login.css'


class LoginBox extends React.Component{
    constructor(){
        super();
        this.state={
            login: ''
        }
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
                <div className={"wrapper " + this.state.login != 'erro'? 'fadeInDown': ''}>
                    <div id="formContent">
                        <i id="icoIMG" className="far fa-times-circle"></i>
                    
                        <div className={"first " + this.state.login != 'erro'? 'fadeInDown': ''}>
                        </div>
            
                        <form action="/autenticar" method="post">
                            <input type="text" id="login" className={"input-text second " + this.state.login != 'erro'? 'fadeInDown': ''} name="login" placeholder="login"/>
                            <input type="password" id="password" className={"input-text third " + this.state.login != 'erro'? 'fadeInDown': ''} name="senha" placeholder="password"/>
                            <input type="submit" className={"btn-login fourth" + this.state.login != 'erro'? 'fadeInDown': ''} value="Log In"/>
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

export default LoginBox;