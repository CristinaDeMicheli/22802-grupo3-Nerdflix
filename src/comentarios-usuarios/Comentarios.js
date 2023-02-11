import { useState, useEffect } from "react";
import {
  obtenerComentarios as obtenerComentariosApi,
  crearComentario as crearComentarioApi,
  borrarComentario as borrarComentarioApi,
  actualizarComentario as actualizarComentarioApi,
} from "./api";
import Comentario from "./Comentario";
import ComentarioForm from "./ComentarioForm";
import "./indexC.css";

const Comentarios = ({ idUsuarioActual }) => {
  const [backendComentarios, setBackendComentarios] = useState([]);
  const [comentarioActivo, setComentarioActivo] = useState(null);

  //obtenemos comentarios raiz  (identificacion nula)
  const rootComentarios = backendComentarios.filter(
    (backendComentario) => backendComentario.idPadre === null
  );

  const obtenerRespuestas = (comentarioId) => {
    return backendComentarios
      .filter((backendComentario) => backendComentario.idPadre === comentarioId)
      .sort(
        (a, b) =>
          new Date(a.creadoFecha).getTime() - new Date(b.creadoFecha).getTime()
      );
  };

  const agregarComentario = (texto, idPadre) => {
    crearComentarioApi(texto, idPadre).then((comentario) => {
      setBackendComentarios([comentario, ...backendComentarios]);
      setComentarioActivo(null);
    });
  };

  const borrarComentario = (idComentario) => {
    if (window.confirm("Esta seguro que desea borrar el comentario")) {
      borrarComentarioApi(idComentario).then(() => {
        const actualizarBackendComentarios = backendComentarios.filter(
          (backendComentario) => backendComentario.id !== idComentario
        );
        setBackendComentarios(actualizarBackendComentarios);
      });
    }
  };

  const actualizarComentario = (texto, idComentario) => {
    actualizarComentarioApi(texto, idComentario).then(() => {
      const comentariosBackendActualizados = backendComentarios.map(
        (comentarioBackend) => {
          if (comentarioBackend.id === idComentario) {
            return { ...comentarioBackend, cuerpo: texto };
          }
          return comentarioBackend;
        }
      );
      setBackendComentarios(comentariosBackendActualizados);
      setComentarioActivo(null);
    });
  };

  useEffect(() => {
    obtenerComentariosApi().then((data) => {
      setBackendComentarios(data);
    });
  }, []);

  return (
    <div className="contenedor-comentarios">
      <div className="comentarios">
        <h4 className="comentarios-titulo">Comentarios</h4>
        <div className="comentario-form-titulo">Escriba comentario</div>
        <ComentarioForm submitLabel="Post" handleSubmit={agregarComentario} />
        <div className="comentarios-container">
          {rootComentarios.map((rootComentario) => (
            <Comentario
              key={rootComentario.id}
              comentario={rootComentario}
              respuestas={obtenerRespuestas(rootComentario.id)}
              idUsuarioActual={idUsuarioActual}
              borrarComentario={borrarComentario}
              actualizarComentario={actualizarComentario}
              comentarioActivo={comentarioActivo}
              setComentarioActivo={setComentarioActivo}
              agregarComentario={agregarComentario}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comentarios;
