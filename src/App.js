import { Routes, Route } from "react-router-dom";
// import {Home} from './componentes/Home';
import { Login } from "./componentes/Login";
import { ProtectedRoute } from "./componentes/ProtectedRoute";
import { Registro } from "./componentes/Registro";
import { AuthProvider } from "./contexto/authContext";
import Contacto from "./componentes/Contacto";
import Peliculas from "./componentes/Peliculas";
import Centro from "./componentes/Centro";
import Cookies from "./componentes/Cookies";
import Informacion from "./componentes/Informacion";
import Preguntas from "./componentes/Preguntas";
import Generos from "./componentes/Generos";
import AppSistemaComentarios from "./comentarios-usuarios/AppSistemaComentarios";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Peliculas />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/centro" element={<Centro />} />
        <Route path="/informacion" element={<Informacion />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/preguntas" element={<Preguntas />} />

        <Route
          path="/peliculas"
          element={
            <ProtectedRoute>
              <Peliculas />
            </ProtectedRoute>
          }
        />
        <Route
          path="/generos"
          element={
            <ProtectedRoute>
              <Generos />
            </ProtectedRoute>
          }
        />

        <Route
          path="/comentarios"
          element={
            <ProtectedRoute>
              <AppSistemaComentarios />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contacto"
          element={
            <ProtectedRoute>
              <Contacto />
            </ProtectedRoute>
          }
        />
      
      </Routes>
    </AuthProvider>
  );
}

export default App;
