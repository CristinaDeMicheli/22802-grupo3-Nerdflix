import "./estilos/estilos-paginas-footer.css";

const Centro = () => {
  return (
    <div>
      <div className="container-encabezado">
        <h2 className="text-start mt-2" id="logo">
          NERDFLIX
        </h2>
      </div>

      <div className="contenedor-informacion py-5">
        <a className="py-5 ps-5" href="/">
          🡸 Regresar a la página de inicio
        </a>
        <h1 className="ms-5 text-black">Centro de Ayuda </h1>

        <h2 className="text-start text-white-75 pt-2">Cómo comenzar</h2>

        <h4 className="text-start text-danger">
          Cómo registrarte en Nerdflix?
        </h4>
        <ul>
          <li className="text-start ms-5  text-white-75  fs-5 pe-4">
            En la página de Inicio presiona el botón <b>Aqui</b>
          </li>
          <li className="text-start ms-5 text-white-75 fs-5 pe-4">
            Ingresa los datos solicitados
          </li>
          <li className="text-start ms-5 text-white-75 fs-5 pe-4">
            Presiona el botón <b>Registrarse </b>
            para guardar los datos ingresados
          </li>
        </ul>

        <h4 className="text-start text-danger">
          Cómo loguearte en Nerdflix?
        </h4>
        <ul>
          <li className="text-start ms-5 text-white-75 fs-5 pe-4">
            En la página de Inicio presiona el botón <b>Login </b>
          </li>
          <li className="text-start ms-5 text-white-75 fs-5 pe-4">
            Ingresa los datos solicitados
          </li>
          <li className="text-start ms-5 text-white-75 fs-5 pe-4">
            Presiona el botón <b>Iniciar Sesión</b> para acceder a toda la
            funcionalidad de Nerdflix.
          </li>
        </ul>

        <h2 className="text-start text-white-75 pt-2">
          Cómo comunicarte con Nerdflix
        </h2>

        <h4 className="text-start text-danger">
          Mediante formulario de contacto
        </h4>
        <ul>
          <li className="text-start ms-5 text-white-75 fs-5 pe-4">
            En la página de Inicio presiona el botón <b>Contacto </b>
          </li>
          <li className="text-start ms-5 text-white-75 fs-5 pe-4">
            Ingresa los datos solicitados
          </li>
          <li className="text-start ms-5 text-white-75 fs-5 pe-4">
            Presiona el botón <b>Enviar </b>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Centro;
