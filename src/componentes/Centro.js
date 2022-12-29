import React from "react";

const Centro = () => {

    return(
        <div>

            <h1> Centro de Ayuda </h1>

            <h2>Cómo comenzar</h2>

            <h4>Cómo registrarte en <span class="badge badge-danger">Nerdflix</span></h4>
            <ul>
                <li>En la página de Inicio presiona el botón <span class="badge badge-pill badge-dark">Registro</span></li> 
                <li>Ingresa los datos solicitados</li>
                <li>Presiona el botón <span class="badge badge-pill badge-dark">Registrarse</span> para guardar los datos ingresados</li>   
            </ul>           

            <h4>Cómo loguearte en <span class="badge badge-danger">Nerdflix</span></h4>
            <ul>
                <li>En la página de Inicio presiona el botón <span class="badge badge-pill badge-dark">Login</span></li> 
                <li>Ingresa los datos solicitados</li>
                <li>Presiona el botón <span class="badge badge-pill badge-dark">Inciar Sesión</span> para acceder a toda la funcionalidad de <span class="badge badge-danger">Nerdflix</span></li>   
            </ul> 

            <h2>Cómo comunicarte con <span class="badge badge-danger">Nerdflix</span></h2>
            
            <h4>Mediante formulario de contacto</h4>
            <ul>
                <li>En la página de Inicio presiona el botón <span class="badge badge-pill badge-dark">Contacto</span></li> 
                <li>Ingresa los datos solicitados</li>
                <li>Presiona el botón <span class="badge badge-pill badge-dark">Enviar</span></li>   
            </ul> 

        </div>
    )

}

export default Centro;