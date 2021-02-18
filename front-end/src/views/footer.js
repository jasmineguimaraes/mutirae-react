import React from 'react';
import {Link} from 'react-router-dom';

import '../css/footer/footer.css'


function Footer(){
    return(
        <footer class="mt-4 mb-4">
		<div class="container">
			<div class="row">
				<div class="col-md-8">
				<p style={{color: '#5867F0', 'font-weight':'400'}}>
					<Link class="" to="/">
						<a>Home</a>
					</Link>

					<Link class="" to="/guia">
						<a>Como separar o lixo?</a>
					</Link>
					<Link class="" to="/sobreNos">
						<a>Sobre nós</a>
					</Link>
					

				</p>
				</div>
				{/*<div class="col-md-4 d-flex justify-content-center align-items-center">
					<a class="btn btn-outline-success link-block ml-2"href="#">
						<i class="fab fa-youtube fa-lg"></i>
					</a>
					<a class="btn btn-outline-success link-block ml-2"href="#">
						<i class="fab fa-facebook fa-lg"></i>
					</a>
					<a class="btn btn-outline-success link-block ml-2"href="#">
						<i class="fab fa-twitter link-block fa-lg"></i>
					</a>
					<a class="btn btn-outline-success link-block ml-2"href="#">
						<i class="fab fa-instagram fa-lg"></i>
					</a>

	</div> */}
			</div> 
		</div>
  	</footer>
    )
}
export default Footer;