import React, { useEffect } from 'react';

const Peliculas = () => {

    let pagina = 1;

    useEffect(() => {
        const btnAnterior = document.getElementById("btnAnterior");
        const btnPosterior = document.getElementById("btnPosterior");

        btnAnterior.addEventListener("click", () => {
            if (pagina > 1) {
                pagina -= 1;
                obtenerPeliculas();
            }
        })

        btnPosterior.addEventListener("click", () => {
            if (pagina < 1000) {
                pagina += 1;
                obtenerPeliculas();
            }
        })

        obtenerPeliculas()
    }, [pagina])

    const obtenerPeliculas = async () => {

        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b99d7773e83eff1759b62bfc0e8a373f&languaje=es-MX&page=${pagina}`)

        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            console.log(datos);
            let peliculas = "";
            datos.results.forEach(pelicula => {
                peliculas += `
                        <div  class="card">
                            <img class="card-img-top" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                            <div class="card-body">
                                <h3 class="card-title">${pelicula.title}</h3>
                                <p class="card-text">${pelicula.overview}</p>
                            </div>                           
                        </div>
                    `;
            });

            document.getElementById("contenedor").innerHTML = '<div class="tarjetas">' + peliculas + '</div>'
        }

    }

}


export default Peliculas;