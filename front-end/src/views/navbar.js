import React from 'react';
import { Link } from 'react-router-dom'

import '../css/header/header.css'

function Navbar(){
    return(
        <nav class=" nave-bar navbar navbar-expand-sm navbar-light ">
			<div class="container">
			    <Link to="/" class="navbar-brand">
				    <img style={{width:"80px", height:"80px"}}src={"img/together-w.png"} alt=""/>
			    </Link>

                <button class="navbar-toggler" data-toggle="collapse" data-target="#nav-principal">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="nav-principal">
                    <ul class="navbar-nav ml-auto align-items-center ">
                    <li class="nav-item">
                        <Link class="nav-link" to="/recursos">Seja um voluntário</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link link-block " to="#">O problema do lixo</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link link-block" to="#">Como separar o lixo?</Link>
                    </li>
                    
                    <li class="nav-item">
                        <Link class="nav-link" to="/sobreNos">Sobre Nós</Link>
                    </li>
                    <li class="nav-item">
                        <a id="entrar" class="btn btn-outline-light ml-sm-4" href="#">Entrar</a>
                    </li>
                    </ul>
                </div>
			</div>
		</nav>
    )
}

export default Navbar;