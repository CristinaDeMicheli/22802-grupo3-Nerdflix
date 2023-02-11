import { useAuth } from "../contexto/authContext";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import PeliculaCaja from "./PeliculaCaja";
import "./estilos/estilos-BuscarPelicula.css";
import { Spinner } from "./Spinner";
import Peliculas from "./Peliculas";

export function Menu() {
  const [estaBuscando, setEstaBuscando] = useState(false);
  const [buscar, setBuscar] = useState("");
  const [pagina, setPagina] = useState(1);
  const [resultados, setResultados] = useState([]);
  const [cargando, setCargando] = useState(false);
  const { user, logout, loading } = useAuth();

  const manejarBusqueda = (e) => {
    e.preventDefault();
    setEstaBuscando(true);
    setCargando(true);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=b99d7773e83eff1759b62bfc0e8a373f&language=en-US&query=${buscar}&page=${pagina}`
    )
      .then((res) => res.json())
      .then((data) => {
        setResultados(data.results);
        setCargando(false);
      });
  };

  const manejarLeerMas = () => {
    setPagina(pagina + 1);
    setCargando(true);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=b99d7773e83eff1759b62bfc0e8a373f&language=en-US&query=${buscar}&page=${
        pagina + 1
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setResultados([...resultados, ...data.results]);

        setCargando(false);
      });
  };

  const handleLogout = async () => {
    await logout();
  };
  if (loading) return <Spinner />;
  //const {user}=useAuth();
  //console.log(user);

  return (
    <div>
      {/* menu */}
      <nav className="navbar navbar-expand-lg navbar-light bg-dark pe-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="http://localhost:3000/peliculas">
            <h1 className="text-start ms-3 mt-3" id="logo">
              NERDFLIX
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link text-white-50"
                  href="http://localhost:3000/peliculas"
                >
                  Peliculas
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link text-white-50"
                  href="http://localhost:3000/generos"
                >
                  Géneros
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link text-white-50"
                  href="http://localhost:3000/comentarios"
                >
                  Comentarios
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link text-white-50"
                  href="http://localhost:3000/contacto"
                >
                  Contacto
                </a>
              </li>
            </ul>
            <form
              className="busqueda-contenedor ps-1"
              onSubmit={manejarBusqueda}
            >
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
          </div>
        </div>
        <div className="ps-2">
        <button
          className="btn btn-danger  text-sm btn-sm col-2 me-3"
          onClick={handleLogout}
        >
          Cerrar sesión
        </button>
      </div>
      </nav>
    

      {/* resultado de busqueda de peliculas */}
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

      {estaBuscando ? <hr /> : null}
    </div>
  );
}
