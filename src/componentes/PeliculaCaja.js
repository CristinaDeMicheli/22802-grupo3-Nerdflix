import React, { useState } from "react";
import html2canvas from "html2canvas";
import Swal from "sweetalert2";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./estilos/estilos-PeliculaCaja.css";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

// IMAGEN que se usa en caso de que la pelicula no tenga poster
const IMG_PREDEF = "/img/movieVacia.jpg";

const PeliculaCaja = ({ item }) => {
  //inicio hooks: mostrar modal, like
  const [mostrar, setMostrar] = useState(false);
  const [like, setLike] = useState(false);
  const ocultarModal = () => setMostrar(false);

  const descargarPoster  = async () => {
    const poster = document.querySelector('#poster');
    const canvas = await html2canvas(poster);
    const imgData = canvas.toDataURL('image/jpeg',1);
    const link = document.createElement('a');
    link.download = item.title;
    link.href = API_IMG + item.poster_path;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); 

  };
  
  

  const mostrarModal = () => {
    setMostrar(true);
    Swal.fire({
      title: item.title,
      text: item.overview,
      imageUrl: API_IMG + item.poster_path,
      imageWidth: 400,
      imageHeight: 500,
      imageAlt: item.title,
      showDenyButton: true,
      confirmButtonText: "Agregar a favoritos",
      confirmButtonColor: "#808080",
      denyButtonText: `Salir`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        setLike(true);

        Swal.fire("Favorita!", "");
      } else if (result.isDenied) {
        setLike(false);
      }
    });

    ocultarModal();
  };

  return (
    <div className="contenedor"> 
      <div className="card text-center  pt-3">
        <div className="card-body">
          
            {like ? (
              <FaHeart className="position-absolute top-0 start-0  text-danger" />
            ) : (
              <FaRegHeart className="position-absolute top-0 start-0 text-danger" />
            )}
         
          
          <img
            className="card-img-top"
            src={
              item.poster_path === null
                ? IMG_PREDEF
                : API_IMG + item.poster_path
            }
            alt={item.title}
            id="poster"
          />
          
        </div>
        
        <div className="card-body">
          <button
            onClick={descargarPoster}
            className="btn btn-danger "
            type="button"
            id="descargar"
          >
            Poster
          </button>
          <button
            id="ver"
            onClick={mostrarModal}
            className="btn btn-secondary text-white ms-2"
          >
            Ver mas
          </button>
        </div>
      </div>
    </div>
  );
};

export default PeliculaCaja;
