import React, { useState } from "react";
import Swal from "sweetalert2";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const PeliculaCaja = ({ item }) => {
  //inicio hooks: mostrar modal,  like

  const [mostrar, setMostrar] = useState(false);
  const [like, setLike] = useState(false);
  const ocultarModal = () => setMostrar(false);

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
      denyButtonText: `Salir`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        setLike(true);

        Swal.fire("Favorita!", "", "success");
      } else if (result.isDenied) {
        setLike(false);
        Swal.fire("Cerrar", "", "info");
      }
    });
    ocultarModal();
  };

  return (
    <div>
      <div className="card text-center mb-3">
        <div className="card-body">
          <p className="btn">
            {like ? (
              <FaHeart className="position-absolute top-0 start-0 text-danger" />
            ) : (
              <FaRegHeart className="position-absolute top-0 start-0 text-danger" />
            )}
          </p>

          <img
            className="card-img-top"
            src={API_IMG + item.poster_path}
            alt={item.title}
          />
        </div>
        <div className="card-body">
          <button onClick={mostrarModal} className="btn btn-dark">
            Ver mas
          </button>
        </div>
      </div>
    </div>
  );
};

export default PeliculaCaja;
