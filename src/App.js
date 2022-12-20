
import DefaultComponent from "./comentarios-usuarios/AppComentarios";
import Contacto from "./componentes/Contacto";
import Peliculas from "./componentes/Peliculas";


function App() {
 
  return (
    <div>
      <Peliculas />
      <DefaultComponent />
      <Contacto />
    </div>
  );
}

export default App;
