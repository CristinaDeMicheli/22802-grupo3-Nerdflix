import React from "react";

const Centro = () => {

    return(
        <div className="container-fluid py-5">

        <h1 className= "ms-5"> Centro de Ayuda </h1>

            <h2 className="text-start ms-5 text-white-50 py-2">Cómo comenzar</h2>

            <h4 className="text-start ms-5 text-white-50">Cómo registrarte en<span className="badge badge-danger fs-3">Nerdflix</span></h4>
            <ul>
                <li className="text-start ms-5 text-white-50 fs-5 pe-4">En la página de Inicio presiona el botón <span className="badge badge-pill badge-dark fs-5">Registro</span></li> 
                <li className="text-start ms-5 text-white-50 fs-5 pe-4">Ingresa los datos solicitados</li>
                <li className="text-start ms-5 text-white-50 fs-5 pe-4">Presiona el botón <span className="badge badge-pill badge-dark fs-5">Registrarse</span> para guardar los datos ingresados</li>   
            </ul>           

            <h4 className="text-start ms-5 text-white-50 pt-3" >Cómo loguearte en<span class="badge badge-danger fs-3">Nerdflix</span></h4>
            <ul>
                <li className="text-start ms-5 text-white-50 fs-5 pe-4">En la página de Inicio presiona el botón <span className="badge badge-pill badge-dark fs-5">Login</span></li> 
                <li className="text-start ms-5 text-white-50 fs-5 pe-4">Ingresa los datos solicitados</li>
                <li className="text-start ms-5 text-white-50 fs-5 pe-4">Presiona el botón <span className="badge badge-pill badge-dark fs-5">Iniciar Sesión</span> para acceder a toda la funcionalidad de<span className="badge badge-danger fs-5">Nerdflix.</span></li>   
            </ul> 

            <h2 className="text-start ms-5 text-white-50 py-2">Cómo comunicarte con<span className="badge badge-danger fs-2">Nerdflix</span></h2>
            
            <h4 className="text-start ms-5 text-white-50 pt-3" >Mediante formulario de contacto</h4>
            <ul>
                <li className="text-start ms-5 text-white-50 fs-5 pe-4">En la página de Inicio presiona el botón <span className="badge badge-pill badge-dark fs-5">Contacto</span></li> 
                <li className="text-start ms-5 text-white-50 fs-5 pe-4">Ingresa los datos solicitados</li>
                <li className="text-start ms-5 text-white-50 fs-5 pe-4">Presiona el botón <span className="badge badge-pill badge-dark fs-5">Enviar</span></li>   
            </ul> 

        </div>
    )

}

export default Centro;