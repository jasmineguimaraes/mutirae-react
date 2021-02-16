import React from 'react';


function Recursos(){
    return(   
        <section>
            <div class="position-relative">
                <div class="position-absolute top-50 start-50"></div>
                <div class="container">
                    <div class="col">
                    <h1 style={{ color: '#5867F0', 'text-align':'center' }}>Seja um voluntário</h1>
                        <figure class="figure">
                            <div class="text-center">
                                <br/>
                                <img src="/img/undraw_outdoors_amdn.svg" style={{width: '70%'}} class="figure-img img-fluid img-center" alt="Mão segurando um pouco de terra com plantas"/>
                                <figcaption class="figure-caption text-right"></figcaption>
                                <br/>
                            </div>
                        </figure>
                        <br/>
                        
                        <h4>Deseja fazer a diferença na sua comunidade?</h4>
                        <p>Então você encontrou o lugar certo para se juntar a outros voluntários dispostos a mudar, começando por
                            pequenas ações, a situação do descarte irregular de resíduos sólidos, seja atuando na sua própria comunidade, seja ajudando nas comunidades próximas à você!
                        </p>
                        <p>Vamos ajudar quem precisa!</p>
                        <br/>
                        <h4>Como ser um voluntário?</h4>
                        <p>Para ser um voluntário é bem simples, clique nos links abaixo para saber mais! </p>
                        <br/>
                        <div class="accordion" id="accordionExample">
                            <div class="card">
                                <div class="card-header" id="headingOne">
                                    <h4 class="mb-0">
                                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Faça seu casdastro;
                                        </button>
                                    </h4>
                                </div>
                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                        Clique no botão "Cadastre-se" localizado no final desta página, fornceça seus dados pessoais e cria sua conta para poder acessar todo o conteúdo do site.
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingTwo">
                                    <h4 class="mb-0">
                                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Acesse os mutirões cadastrados ou crie o seu;
                                        </button>
                                    </h4>
                                </div>
                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div class="card-body">
                                        Depois de já estar logado(a) no site, você poderá acessar os mutiões cadastrados e se voluntariar para participar deles, ou mesmo criar seu próprio mutirão e compartilhar através das redes sociais.
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingThree">
                                    <h4 class="mb-0">
                                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Inscreva-se em um mutirão e compartilhe!
                                        </button>
                                    </h4>
                                </div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <div class="card-body">
                                        Depois de se inscrever, você receberá notificações no email cadastrado, com lembrentes e informações relevantes sobre os mutirões. Não se esqueça de compartilhar e chamar mais gente disposta a ajudar!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
            </div>
        </section>
    )
}

export default Recursos;