import { useState, useEffect } from "react";
import PeliculaCaja from "./PeliculaCaja";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "./Spinner";
/* 
const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=b99d7773e83eff1759b62bfc0e8a373f&language=es-ES";
 */
const Peliculas = () => {
  // hooks listado de peliculas y paginas
  const [peliculas, setPeliculas] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [loading, setLoading] = useState(true);

  //el numero de pagina es variable
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=b99d7773e83eff1759b62bfc0e8a373f&page=900&page=${pagina}&language=es-ES`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        //agrega a los valores previos los datos de la consulta
        setPeliculas((prev) => [...prev, ...data.results]);
        setLoading(false);
      });
  }, [pagina]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      //si se da la condicion incrementar el numero de  pagina
      setPagina((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container">
      <Spinner />
      <div className="grid">
        {peliculas.map((item, id) => (
          <PeliculaCaja key={id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Peliculas;
