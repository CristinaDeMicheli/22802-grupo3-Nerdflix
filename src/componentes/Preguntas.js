import "./estilos/estilos-paginas-footer.css";

const Preguntas = () => {
  return (
    <div>
      <div className="container-encabezado">
        <h2 className="text-start mt-2" id="logo">
          NERDFLIX
        </h2>
     
      </div>

      <div className="contenedor-informacion">
        <div className="py-5">
        <a className="py-3 ps-5" href="/">🡸 Regresar a la página de inicio</a>
          <h1 className="text-black pt-3 "> Preguntas Frecuentes</h1>

          <h2 className="text-start text-white-75">
            ¿Qué es Nerdflix?
          </h2>
          <p>
            Nerdflix es un servicio de catálogo de producciones audiovisuales que permite a sus
            usuarios buscar información de series y películas a través de
            cualquier dispositivo conectado a internet.
          </p>

          <h2 className="text-start pt-4 text-white-75">
            ¿Qué puedo encontrar en Nerdflix?
          </h2>
          <p>
            El contenido  incluye una gran variedad de títulos galardonados,
            series, películas, documentales y mucho más.
          </p>

          <h2  className="text-start pt-4 text-white-75">
            ¿En qué dispositivos puedo usar Nerdflix?
          </h2>
          <p >
            Puedes ver Nerdflix 
            a través de cualquier dispositivo conectado a internet que cuente
            con la aplicación de 
             Nerdflix 
            como por ejemplo, Smart TV, consolas de videojuegos, reproductores
            multimedia, smartphones y tabletas. También puedes ver
             Nerdflix en tu
            ordenador, a través de un navegador de internet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preguntas;
