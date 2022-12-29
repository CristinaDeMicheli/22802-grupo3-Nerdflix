import { useAuth } from "../contexto/authContext";
import BuscarPelicula from "./BuscarPelicula";
import { Spinner } from "./Spinner";
export function Menu() {
  const { user, logout, loading } = useAuth();
  const handleLogout = async () => {
    await logout();
  };
  if (loading) return <Spinner />;
  //const {user}=useAuth();
  //console.log(user);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand" href="http://localhost:3000/peliculas">
          <h1 className="text-start ms-3 mt-3" id="logo">
            NERDFLIX
          </h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a
                className="nav-link text-white-50"
                href="http://localhost:3000/peliculas"
              >
                Peliculas
              </a>
            </li>
          </ul>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a
                className="nav-link text-white-50"
                href="http://localhost:3000/comentarios"
              >
                Comentarios
              </a>
            </li>
          </ul>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a
                className="nav-link text-white-50"
                href="http://localhost:3000/contacto"
              >
                Contacto
              </a>
            </li>
          </ul>
         
        
        </div>
        <button className="btn btn-danger  me-3 mt-3" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </nav>
    </div>
  );
}
