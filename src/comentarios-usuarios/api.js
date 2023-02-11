export const obtenerComentarios = async () => {
    return [
      {
        id: "1",
        cuerpo: "Primer comentario",
        nombreUsuario: "Juan",
        idUsuario: "1",
        idPadre: null,
        creadoFecha: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "2",
        cuerpo: "Segundo comentario",
        nombreUsuario: "Jose",
        idUsuario: "2",
        idPadre: null,
        creadoFecha: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "3",
        cuerpo: "Primer comentario primer hijo",
        nombreUsuario: "Jose",
        idUsuario: "2",
        idPadre: "1",
        creadoFecha: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "4",
        cuerpo: "Segundo comentario segundo hijo",
        nombreUsuario: "Juan",
        idUsuario: "2",
        idPadre: "2",
        creadoFecha: "2021-08-16T23:00:33.010+02:00",
      },
    ];
  };
  
  export const crearComentario = async (texto, idPadre = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      cuerpo: texto,
      idPadre,
      idUsuario: "1",
      nombreUsuario: "Juan",
      creadoFecha: new Date().toISOString(),
    };
  };
  
  export const actualizarComentario = async (texto) => {
    return { texto };
  };
  
  export const borrarComentario = async () => {
    return {};
  };