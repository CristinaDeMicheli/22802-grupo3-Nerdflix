import React, { useState } from "react";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Swal from "sweetalert2";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "../App.css"
const API_IMG = "https://image.tmdb.org/t/p/w500/";



const PeliculaCaja = ({ item }) => {
  //inicio hooks: mostrar modal,  like

  const [mostrar, setMostrar] = useState(false);
  const [like, setLike] = useState(false);
  const ocultarModal = () => setMostrar(false);
  
  const printDocument =() =>{
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        let imgWidth = 208;
        let imgHeight = canvas.height * imgWidth / canvas.width;
        const imgData = canvas.toDataURL('img/jpg');
        const pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(imgData, 'JPG', 0, 0, imgWidth, imgHeight);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
    ;
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
    <div className="contenedor"  >
      <div className="card text-center mb-3" >
        <div className="card-body" id="divToPrint" >
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
        <div className="card-body" >
        <button onClick={printDocument} className="btn btn-success " type="button" id="descargar" >Descargar</button>
          <button id="ver" onClick={mostrarModal} className="btn btn-info text-white ms-2">
            Ver mas
          </button>

         
        </div>
      </div>
    </div>
  );
};

export default PeliculaCaja;
