import ComentarioForm from "./ComentarioForm";
import "./indexC.css";

const Comentario = ({ 
  comentario, 
  respuestas, 
  idUsuarioActual,
  borrarComentario, 
  actualizarComentario,
  comentarioActivo, 
  setComentarioActivo,
  idPadre = null,
  agregarComentario
 }) => {
  const cincoMinutos = 300000
  const tiempoTranscurrido = new Date() - new Date(comentario.creadoFecha) > cincoMinutos
  const puedeResponder = Boolean(idUsuarioActual)
  const puedeEditar = idUsuarioActual === comentario.idUsuario && !tiempoTranscurrido
  const puedeBorrar = idUsuarioActual === comentario.idUsuario && !tiempoTranscurrido
  //formato fecha
  const creadoFecha = new Date(comentario.creadoFecha).toLocaleDateString()
  const estaRespondiendo = 
    comentarioActivo &&
    comentarioActivo.type === "respondiendo" &&
    comentarioActivo.id === comentario.id;

  const estaEditando = 
    comentarioActivo &&
    comentarioActivo.type === "editando" &&
    comentarioActivo.id === comentario.id;

  const idRespuesta = idPadre ? idPadre : comentario.id;

  return (
    <div className="comentario">
      <div className="comentario-image-container">
        <img src="/img/user-icon.png" alt="icono usuario" />
      </div>
      <div className="comentario-parte-derecha">
        <div className="comentario-contenido">
          <div className="comentario-autor">{comentario.nombreUsuario}</div>
          <div>{creadoFecha}</div>
        </div>
        {!estaEditando && <div className="comentario-texto">{comentario.cuerpo}</div>}
        {estaEditando && (
          <ComentarioForm 
            submitLabel="Actualizar" 
            hasCancelButton initialText = {comentario.cuerpo}
            handleSubmit={(texto) => actualizarComentario(texto, comentario.id)}
            handleCancel = {() => setComentarioActivo(null)} 
          />
        )}

        <div className="comentario-acciones">
          {puedeResponder && (
            <div 
              className="comentario-accion" 
              onClick={() => 
                setComentarioActivo({ id: comentario.id, type: "respondiendo" })
              }
            >
              Responder
            </div>
          )}

          {puedeEditar && (
            <div 
              className="comentario-accion"
              onClick={() => 
                setComentarioActivo({ id: comentario.id, type: "editando" })
              }
            >
              Editar
            </div>
            )}
          
          {puedeBorrar && (
            <div className="comentario-accion"
            onClick={() => borrarComentario(comentario.id)}
          >
          Borrar
          </div>
        )}
        </div>

        {estaRespondiendo && (
          <ComentarioForm 
            submitLabel="Responder" 
            handleSubmit={texto => agregarComentario(texto, idRespuesta)}
          />
        )}
        {respuestas.length > 0 && (
          <div className="respuestas">
          {respuestas.map(respuesta => (
            <Comentario 
              comentario={respuesta} 
              key={respuesta.id} 
              respuestas = {[]} 
              idUsuarioActual={idUsuarioActual}
              borrarComentario={borrarComentario}
              actualizarComentario={actualizarComentario}
              agregarComentario={agregarComentario}
              setComentarioActivo={setComentarioActivo}
              idPadre= {comentario.id}
            />
          ))}
          </div>
        ) }
      </div>
    </div>
  );
};

export default Comentario;
