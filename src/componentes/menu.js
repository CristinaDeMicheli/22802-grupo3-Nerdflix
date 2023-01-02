import { useAuth } from "../contexto/authContext";
export function Menu() {
  const { user, logout, loading } = useAuth();
  const handleLogout = async () => {
    await logout();
  };
  if (loading) return <h1>cargando...</h1>;
  //const {user}=useAuth();
  //console.log(user);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand" href="#/peliculas">
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
                href="22802-grupo3-Nerdflix/#/peliculas"
              >
                Peliculas
              </a>
            </li>
          </ul>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a
                className="nav-link text-white-50"
                href="22802-grupo3-Nerdflix/#/AddFavourites"
              >
                Favouritos
              </a>
            </li>
          </ul>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a
                className="nav-link text-white-50"
                href="22802-grupo3-Nerdflix/#/Generos"
              >
                Generos
              </a>
            </li>
          </ul>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a
                className="nav-link text-white-50"
                href="22802-grupo3-Nerdflix/#/comentarios"
              >
                Comentarios
              </a>
            </li>
          </ul>
          <ul className="navbar-nav mr-auto text-white">
            <li className="nav-item">
              <a
                className="nav-link text-white-50"
                href="22802-grupo3-Nerdflix/#/contacto"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <button
          className="btn btn-danger text-sm btn-sm col-2 me-3"
          onClick={handleLogout}
        >
          Cerrar sessión
        </button>
      </nav>
    </div>
  );
}
