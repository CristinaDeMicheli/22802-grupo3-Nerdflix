import React, { useState, useEffect } from "react";
import "./estilos/estilos-genero.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Menu } from "./menu";
import PeliculaCaja from "./PeliculaCaja";

const Generos = () => {
  const [resultados, setResultados] = useState([]);
  const [genero, setGenero] = useState([]);

  // petición a la API de TMDb para obtener una lista de películas populares
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=b99d7773e83eff1759b62bfc0e8a373f&language=es-ES&&with_genres=${genero}`
    )
      .then((res) => res.json())
      .then((data) => setResultados(data.results));
  }, [genero]);

  return (
    <div>
      <Menu />

      <div>
        <div className="contenedor-genero py-5 ps-3">
          <select className="my-4" value={genero} onChange={(e) => setGenero(e.target.value)}>
            <option value="">Seleccione un género</option>
            <option value="28">Acción</option>
            <option value="12">Aventura</option>
            <option value="16">Animación</option>
            <option value="35">Comedia</option>
            <option value="80">Crimen</option>
            <option value="99">Documentales</option>
            <option value="18">Drama</option>
            <option value="10751">Familia</option>
            <option value="14">Fantasia</option>
            <option value="36">Historia</option>
            <option value="27">Horror</option>
            <option value="10402">Musica</option>
            <option value="9648">Misterio</option>
            <option value="10749">Romance</option>
            <option value="878">Ciencia F.</option>
            <option value="10770">TV Movie</option>
            <option value="53">Thriller</option>
            <option value="10752">War</option>
            <option value="37">Wester</option>
            ...
          </select>
          {resultados.map((result) => (
            <div key={result.id}>
              <h5 className="text-danger ps-5 pe-5">{result.title}</h5>
              <p className="text-white ps-5 pe-5 pb-3">{result.overview}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Generos;
