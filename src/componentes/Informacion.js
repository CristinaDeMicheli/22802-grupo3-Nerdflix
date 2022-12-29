import React from "react";
import {
    BrowserRouter as Router,
  } from "react-router-dom";

const Informacion = () => {

    return(
        <div>

        <h1> Información Corporativa </h1>

		<div className="card" style={{width: 500}}>
				<div className="card-header">
					<h5> REACT JS - CODO A CODO</h5>
					<h4> Agencia de Aprendizaje</h4>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<p>Comisión: 22802 - Grupo N°3 </p>
					</li>
					<li className="list-group-item">
						<p>Trabajo Integrador - Repositorio</p>
						<p>   
							<Router>
								<a href="https://github.com/CristinaDeMicheli/22802-grupo3-Nerdflix/" target="_blank">
								https://github.com/CristinaDeMicheli/22802-grupo3-Nerdflix/
								</a>
							</Router>
						</p>
					</li>
				</ul>
			</div>


        <h2>Grupo</h2>

			<div className="card" style={{width: 500}}>
				<div className="card-header">
					<h5> Cristina de Micheli</h5>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<p>Correo: cristinademichelicd@gmail.com</p>
					</li>
					<li className="list-group-item">
						<p>LinkedIn: 	
							<Router>
								<a href="https://www.linkedin.com/in/cristina-de-micheli" target="_blank">
									https://www.linkedin.com/in/cristina-de-micheli
								</a>
							</Router>
						</p> 
					</li>
					<li className="list-group-item">
						<p>Github:  
							<Router>
								<a href="https://github.com/CristinaDeMicheli" target="_blank">
									https://github.com/CristinaDeMicheli
								</a>
							</Router>
						</p>
					</li>
				</ul>
			</div>

			<div className="card" style={{width: 500}}>
				<div className="card-header">
					<h5> Teresita Gallardo</h5>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<p>Correo: ing.teresitagallardo@gmail.com</p>
					</li>
					<li className="list-group-item">
						<p>LinkedIn: 	
							<Router>
								<a href="https://www.linkedin.com/in/mtgl/" target="_blank">
								https://www.linkedin.com/in/mtgl/
								</a>
							</Router>
						</p> 
					</li>
					<li className="list-group-item">
						<p>Github:  
							<Router>
								<a href="https://github.com/tere2021" target="_blank">
								https://github.com/tere2021
								</a>
							</Router>
						</p>
					</li>
				</ul>
			</div>

			<div className="card" style={{width: 500}}>
				<div className="card-header">
					<h5> Sajjad Samiei Naserani </h5>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<p>Correo: salijorji6@gmail.com  </p>
					</li>
					<li className="list-group-item">
						<p>LinkedIn: 	
							<Router>
								<a href="https://www.linkedin.com/in/samcodehub" target="_blank">
								https://www.linkedin.com/in/samcodehub
								</a>
							</Router>
						</p> 
					</li>
					<li className="list-group-item">
						<p>Github:  
							<Router>
								<a href="https://github.com/samcodehub" target="_blank">
								https://github.com/samcodehub
								</a>
							</Router>
						</p>
					</li>
				</ul>
			</div>

			<div className="card" style={{width: 500}}>
				<div className="card-header">
					<h5> Guido Cacciatore </h5>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<p>Correo: guidocacha@hotmail.com </p>
					</li>
					<li className="list-group-item">
						<p>LinkedIn: 	
							<Router>
								<a href="https://www.linkedin.com/in/guido-cacciatore-240093162" target="_blank">
								https://www.linkedin.com/in/guido-cacciatore-240093162
								</a>
							</Router>
						</p> 
					</li>
					<li className="list-group-item">
						<p>Github:  
							<Router>
								<a href="https://github.com/guidocacha" target="_blank">
								https://github.com/guidocacha
								</a>
							</Router>
						</p>
					</li>
				</ul>
			</div>

			<div className="card" style={{width: 500}}>
				<div className="card-header">
					<h5> Servio López </h5>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<p>Correo: serviolopez@gmail.com </p>
					</li>
					<li className="list-group-item">
						<p>LinkedIn: 	
							<Router>
								<a href="https://www.linkedin.com/in/serviolopez10" target="_blank">
								https://www.linkedin.com/in/serviolopez10
								</a>
							</Router>
						</p> 
					</li>
					<li className="list-group-item">
						<p>Github:  
							<Router>
								<a href="https://github.com/ServioLopez" target="_blank">
								https://github.com/ServioLopez
								</a>
							</Router>
						</p>
					</li>
				</ul>
			</div>


			<div className="card" style={{width: 500}}>
				<div className="card-header">
					<h5> Griselda Remedi</h5>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<p>Correo: griseldaremedi@gmail.com </p>
					</li>
					<li className="list-group-item">
						<p>LinkedIn: 	
							<Router>
								<a href="https://www.linkedin.com/in/griseldaremedi/" target="_blank">
								https://www.linkedin.com/in/griseldaremedi/
								</a>
							</Router>
						</p> 
					</li>
					<li className="list-group-item">
						<p>Github:  
							<Router>
								<a href="https://github.com/griseldaRemedi" target="_blank">
								https://github.com/griseldaRemedi
								</a>
							</Router>
						</p>
					</li>
				</ul>
			</div>
	


        </div>
    )

}

export default Informacion;