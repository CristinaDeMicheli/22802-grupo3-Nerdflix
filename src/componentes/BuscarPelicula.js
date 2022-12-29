import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import PeliculaCaja from "./PeliculaCaja";
import "./estilos/estilos-BuscarPelicula.css";
import "../App.css";
import { Spinner } from "./Spinner";

const API_IMG = "https://image.tmdb.org/t/p/w500/";
/* const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=b99d7773e83eff1759b62bfc0e8a373f&busqueda"; */

const BuscarPelicula = () => {
  const [pelis, setPelis] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [loading, setLoading] = useState(false);
  
 
  const buscarPelicula = async (e) => {
    e.preventDefault();
    console.log("Buscando");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=b99d7773e83eff1759b62bfc0e8a373f&query=${busqueda}&language=es-ES`;
      const res = await fetch(url);
      const data = await res.json();
      console.log("consulta", data);
      setPelis((prev) => [...prev, ...data.results]);
   
    } catch (e) {
      console.log(e);
    }
  };
 

  const cambios = (e) => {
    setBusqueda(e.target.value);
  };


  return (
    <div>
      <h4 className="py-5 text-white text-center">
        
        Busca tu Película favorita
      </h4>
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
        {pelis.length === 0 && loading ? (
          <p className="text-danger">No se encuentran resultados</p>
        ) : (
          pelis.map((peli) => {
            return (
              <div key={peli.id}>
                <PeliculaCaja item={peli} />
              </div>
            );
          })
        )}
        {loading && <Spinner />}
      </div>
    </div>
  );
};

export default BuscarPelicula;
