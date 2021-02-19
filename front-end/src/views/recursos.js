import React from 'react';


function Recursos(){
    return(   
        <section>
            <div class="position-relative">
                <div class="position-absolute top-50 start-50"></div>
                <div class="container">
                    <div class="col">
                    <h1 style={{ color: '#5867F0', 'text-align':'center' }}>Comece um mutirão</h1>
                        <figure class="figure">
                            <div class="text-center">
                                <br/>
                                <img src="/img/Email campaign_Monochromatic.svg" style={{width: '60%'}} class="figure-img img-fluid img-center" alt="Mão segurando um pouco de terra com plantas"/>
                                <figcaption class="figure-caption text-right"></figcaption>
                                <br/>
                            </div>
                        </figure>
                        <br/>
                        
                        <h4>Deseja trazer mudança para sua comunidade?</h4>
                        <p>Então você encontrou o lugar certo para começar, nós vamos te ajudar a se organizar e convidar seus vizinhos para ajudar a comunidade. 
                            Crie um mutirão e chame seus vizinhos para começar a realizar a mudança que vocês precisam.
                        </p>
                        <p>Vamos ajudar quem precisa!</p>
                        <br/>
                        <h4>Como começar um mutirão?</h4>
                        <p>É bem simples, vem com a gente! </p>
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
                                        
                                        Para se cadastrar no Mutirae, clique no botão abaixo, forneça 
                                        seus dados pessoais e crie sua conta para poder acessar todo o conteúdo do site.
                                        <br/>
                                        <br/>
                                        <div className='text-center'>
                                        <a href="/inscreverse">
                                            <button
                                                class="btn btn-success btn-md"
                                                type="button"
                                            >
                                                Cadastre-se
                                            </button>
									    </a>
                                        </div>
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
                                        Depois de já estar logado no site, você poderá acessar os mutirões cadastrados, confirmar sua participação em mutirões, 
                                        ou até mesmo criar seu próprio mutirão e compartilhar através das redes sociais.
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
                                        Depois de se inscrever, você receberá notificações no e-mail cadastrado, com lembrentes e 
                                        informações relevantes sobre os mutirões. Não se esqueça de compartilhar e convidar seus vizinhos e amigos.
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