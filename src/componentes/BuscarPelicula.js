import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import PeliculaCaja from "./PeliculaCaja";
import Swal from "sweetalert2";
import "./estilos/estilos-BuscarPelicula.css";
import { Spinner } from "./Spinner";

/* const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=b99d7773e83eff1759b62bfc0e8a373f&busqueda"; */

const BuscarPelicula = () => {
  const [buscar, setBuscar] = useState("");
  const [pagina, setPagina] = useState(1);
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const manejarBusqueda = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=b99d7773e83eff1759b62bfc0e8a373f&language=en-US&query=${buscar}&page=${pagina}`
    )
      .then((res) => {
        res.json()
      })
      .then((data) => {
        setResultados(data.results);
        setLoading(false);
      })
    
  };


  const manejarLeerMas = () => {
    setPagina(pagina + 1);
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=b99d7773e83eff1759b62bfc0e8a373f&language=en-US&query=${buscar}&page=${
        pagina + 1
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setResultados([...resultados, ...data.results]);
        setLoading(false);
      });
  };

  return (
    <div>
      <form className="busqueda-contenedor" onSubmit={manejarBusqueda}>
        <div className="caja-busqueda">
          <input
            className="inputBusqueda  border-0"
            type="text"
            placeholder="buscar peliculas"
            value={buscar}
            onChange={(e) => setBuscar(e.target.value)}
          />
          <button className="btn-buscar" type="submit">
            <FaSearch size={20} />
          </button>
        </div>
      </form>

      <div className="grid">
        {resultados.map((result) => (
          <div key={result.id}>
            <PeliculaCaja item={result} />
          </div>
        ))}
        {resultados.length > 0 && (
          <button
            onClick={manejarLeerMas}
            className="btn btn-danger text-white ms-2"
          >
            Ver más
          </button>
        )}
        {loading && <Spinner />}
      </div>
    </div>
  );
};

export default BuscarPelicula;
