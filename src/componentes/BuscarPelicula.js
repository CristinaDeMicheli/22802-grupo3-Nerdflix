import React, { useState } from "react";
import VistaPeliculaBuscada from "./VistaPeliculaBuscada";
import { FaSearch } from "react-icons/fa";
import "./estilos/estilos-BuscarPelicula.css";
import "../App.css";
import { Spinner } from "./Spinner";

const API_IMG = "https://image.tmdb.org/t/p/w500/";
/* const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=b99d7773e83eff1759b62bfc0e8a373f&busqueda"; */

const BuscarPelicula = () => {
  const [pelis, setPelis] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const buscarPelicula = async (e) => {
    e.preventDefault();
    console.log("Buscando");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=b99d7773e83eff1759b62bfc0e8a373f&query=${busqueda}&language=es-ES`;
      const res = await fetch(url);
      const data = await res.json();
      console.log("consulta", data);
      setPelis(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const cambios = (e) => {
    setBusqueda(e.target.value);
  };
  return (
    <div>
      <form className="busqueda-contenedor" onSubmit={buscarPelicula}>
        <div className="caja-busqueda">
          <input
            className="inputBusqueda"
            type="text"
            placeholder="buscar peliculas"
            value={busqueda}
            onChange={cambios}
          />
          <button className="btn-buscar" type="submit">
            <FaSearch size={20} />
          </button>

        </div>
      </form>
      <div className="grid">
        {pelis.length === 0 ? (
          <p>No se encuentran resultados</p>
        ) : (
          pelis.map((peli) => {
            return (
              <div key={peli.id}>
                <Spinner />
                <VistaPeliculaBuscada
                  titulo={peli.title}
                  fl={peli.release_date}
                  descripcion={peli.overview}
                  imagen={API_IMG + peli.poster_path}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default BuscarPelicula;
