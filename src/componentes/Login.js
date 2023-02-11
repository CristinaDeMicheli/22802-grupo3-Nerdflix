import { useState } from "react";
import { useAuth } from "../contexto/authContext";
import { useNavigate } from "react-router-dom";
import "./estilos/estilos-Login.css";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    /* console.log(user); */
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      /*  console.log(error.message); */
      setError(error.message);
      //se puede preguntar aqui por cada codigo de error
      //y definir una leyenda ams amigable para el usuario
    }
  };
  return (
    <div className="container-fluid">
      {error && <p className="mt-2  text-white text-start">{error}</p>}
      <h1 className="text-start ms-3 mt-3" id="logo">
        NERDFLIX
      </h1>
      <h1 className="text-white text-center titulo">
        Películas y series <br /> ilimitadas y mucho más
      </h1>
      <h3 className="text-white text-center subtitulo pb-3">
        Disfrutá donde quieras.
      </h3>
      <form
        onSubmit={handleSubmit}
        className="container text-center py-2 col-4 ps-5"
      >
        <label htmlFor="email" className="text-white text-start">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="email@gmail.com"
          onChange={handleChange}
        />
        <label htmlFor="password" className="text-white text-start ">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="********"
          id="password"
          onChange={handleChange}
        />
        <button>Iniciar Sesión</button>
        <p className="mt-1  text-white text-start">
          Si no se encuentra registrado aún, haga clic en AQUI para hacerlo
        </p>{" "}
        <a
          className="mt-2  text-red text-start"
          href="http://localhost:3000/registro"
        >
          AQUI
        </a>
      </form>

      <div className="visualizar">
        <div className="row">
          <div className="col-6">
            <h1 className="text-white text-center titulo pt-5">
              Disfruta donde quieras
            </h1>
            <h3 className="text-white text-center subtitulo pb-3">
              Películas y series ilimitadas en tu teléfono, tablet, <br />{" "}
              computadora y TV sin costo adicional.
            </h3>
          </div>
          <div className="col-6">
            <img src="../img/device-pile.png" alt="img-device" />
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container-fluid text-white-50">
          <div className="row">
            <div className="col-12 footer-column">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link mt-1 ms-3"
                    href="http://localhost:3000/preguntas"
                  >
                    ¿Preguntas? Llama al 0800 345 6789
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-3 footer-column">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link  ms-4"
                    href="http://localhost:3000/preguntas"
                  >
                    Preguntas Frecuentes
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link  ms-4"
                    href="http://localhost:3000/cookies"
                  >
                    Preferencias de cookies
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-3  footer-column">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link" href="http://localhost:3000/centro">
                    Centro de ayuda
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-info"
                    href="http://localhost:3000/informacion"
                  >
                    Grupo-3 React Js Front End 2022
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-3 box">
              <ul className="list-inline quick-links">
                <li className="nav-item text-white">
                  <select
                    className="form-select form-select-sm text-white-50 mb-4 mt-2 ms-5"
                    aria-label=".form-select-sm"
                    id="lang"
                  >
                    <option value="2">Español</option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
