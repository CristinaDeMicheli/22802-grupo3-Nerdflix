import React from "react";

const Preguntas = () => {

    return(
       <div className="container-fluid py-5">
            <h1 className= "ms-5"> Preguntas Frecuentes</h1>

            <h2 className="text-start ms-5 text-white-50">¿Qué es<span className="badge badge-danger fs-2">Nerdflix</span>?</h2>
            <p className="text-start ms-5 text-white-50 fs-5 pe-4"><span className="badge badge-danger fs-5">Nerdflix</span>es un servicio de catálogo de producciones audiovisuales que permite a sus usuarios buscar información de series y películas a través de cualquier dispositivo conectado a internet.
            </p>

            <h2 className="text-start ms-5 text-white-50 pt-5 ">¿Qué puedo encontrar en<span className="badge badge-danger fs-2">Nerdflix</span>?</h2>
            <p  className="text-start ms-5 text-white-50 fs-5 pe-4">El contenido, incluye una gran variedad de títulos galardonados, series, películas, documentales y mucho más. 
            </p>

            <h2 className="text-start ms-5 text-white-50 pt-5 ">¿En qué dispositivos puedo usar <span className="badge badge-danger fs-2">Nerdflix</span>?</h2>
            <p  className="text-start ms-5 text-white-50 fs-5 pe-4">Puedes ver<span className="badge badge-danger fs-5 ">Nerdflix</span>a través de cualquier dispositivo conectado a internet que cuente con la aplicación de <span class="badge badge-danger  fs-5 ">Nerdflix</span>como por ejemplo, Smart TV, consolas de videojuegos, reproductores multimedia, smartphones y tabletas. También puedes ver<span class="badge badge-danger fs-5 ">Nerdflix</span>en tu ordenador, a través de un navegador de internet. 
            </p>


       </div>
    )
}

export default Preguntas;