import DefaultComponent from "./comentarios-usuarios/AppComentarios";
import BuscarPelicula from "./componentes/BuscarPelicula";
import Contacto from "./componentes/Contacto";
import Peliculas from "./componentes/Peliculas";

function App() {
  return (
    <div>
      <BuscarPelicula />
      <DefaultComponent />
      <Contacto />
      <Peliculas />
    </div>
  );
}

export default App;
