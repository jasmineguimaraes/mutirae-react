import React from 'react';

class Cadastro extends React.Component{
    constructor(){ 
        super();
        this.state={
            nome:"",
            senha:"",
            senhaConf:"",
            cep:"",
            endereco:"",
            endNum:"",
            endComp:"",
            cidade:"",
        };
        this.handleNomeChange = this.handleChange.bind(this, 'nome');
        this.handleSenhaChange = this.handleChange.bind(this, 'senha');
        this.handleSenhaConfChange = this.handleChange.bind(this, 'senhaConf');
        this.handleCepChange = this.handleChange.bind(this, 'cep');
        this.handleEnderecoChange = this.handleChange.bind(this, 'endereco');
        this.handleEndNumChange = this.handleChange.bind(this, 'endNum');
        this.handleEndCompChange = this.handleChange.bind(this, 'endComp');
        this.handleCidadeChange = this.handleChange.bind(this, 'cidade');
        //this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(keyName, e) {
        this.setState({ [keyName]: e.target.value });
    }
    //<span class="text text-danger">* Nome de usuário errado</span>
    render(){
        return(
            <div class="row justify-content-center align-items-center formulario">
                <div class="col-md-5">
                    <fieldset>
                        <legend class="h1 titulo-ins">Cadastro de Usuário</legend>
                        <form class="row g-3 form" action="/registrar" method="post">
                            <div class="col-md-12">
                                <input style={{width:"300px"}} type="text" value={this.state.nome} name="nome" placeholder="Nome Completo" class="form-control" id="inputEmail4"/>
                            </div>

                            <div class="col-md-12">
                                <input style={{width:"300px"}} type="password" value={this.state.senha} name="senha" placeholder="Senha" class="form-control" id="inputPassword4"/>
                            </div>
                            <div class="col-md-12">
                                <input style={{width:"300px"}} type="password" value={this.state.senhaConf} name="csenha" placeholder="Confirmar Senha" class="form-control" id="inputPassword4"/>
                            </div>
                            <div class="col-md-12">
                                <input type="text" style={{width:"200px"}} value={this.state.cep} name="cep" class="form-control" id="inputCity" placeholder="Cep"/>
                            </div>
                            <div class="col-md-12">
                                <input style={{width:"200px"}} type="text" value={this.state.endNum} name="numero" class="form-control" id="inputCity" placeholder="Número"/>
                            </div>

                            <div class="col-md-12">
                                <input style={{width:"200px"}} type="text" value={this.state.cidade} name="cidade" class="form-control" id="inputCity" placeholder="Cidade"/>
                            </div>
                            <div class="col-12">
                                <input style={{width:"400px"}} type="text" value={this.state.endereco} name="endereco" class="form-control" id="inputAddress" placeholder="Endereço"/>
                            </div>
                            <div class="col-12">
                                <input style={{width:"300px"}} type="text" value={this.state.endComp} name="complemento" class="form-control" id="inputAddress2" placeholder="Complemento"/>
                            </div>

                            <div class="col-12">
                                <button type="submit" class="btn btn-success w-100">Cadastrar</button>
                            </div>
                        </form>
                    </fieldset>
                </div>
            </div>
        )
    }
}

export default Cadastro;