import {Routes, Route} from 'react-router-dom';
// import {Home} from './componentes/Home';
import {Login} from './componentes/Login';
import { ProtectedRoute } from './componentes/ProtectedRoute';
import {Registro} from './componentes/Registro';
import {AuthProvider} from './contexto/authContext';
import DefaultComponent from "./comentarios-usuarios/AppComentarios";
import BuscarPelicula from "./componentes/BuscarPelicula";
import Contacto from "./componentes/Contacto";
import Peliculas from "./componentes/Peliculas";
import Centro from "./componentes/Centro";
import Cookies from "./componentes/Cookies";
import Informacion from "./componentes/Informacion";
import Preguntas from "./componentes/Preguntas";
import Generos from "./componentes/Generos";
//import AddFavourites from "./componentes/AddFavourites";

function App() {
  return (
    <AuthProvider>
    <Routes>
    <Route path='22802-grupo3-Nerdflix/' element={
      <ProtectedRoute>
    <Peliculas/>
    </ProtectedRoute>
    }/> 
    <Route path='22802-grupo3-Nerdflix/login' element={<Login/>}/> 
    <Route path='22802-grupo3-Nerdflix/registro' element={<Registro/>}/> 
    <Route path='22802-grupo3-Nerdflix/centro' element={<Centro/>}/> 
    <Route path='22802-grupo3-Nerdflix/informacion' element={<Informacion/>}/> 
    <Route path='22802-grupo3-Nerdflix/cookies' element={<Cookies/>}/> 
    <Route path='22802-grupo3-Nerdflix/preguntas' element={<Preguntas/>}/> 
    
    <Route path='22802-grupo3-Nerdflix/peliculas' element={<ProtectedRoute><Peliculas /></ProtectedRoute>}/> 
    <Route path='22802-grupo3-Nerdflix/buscar-peliculas' element={<ProtectedRoute><BuscarPelicula /></ProtectedRoute>}/> 
    <Route path='22802-grupo3-Nerdflix/comentarios' element={<ProtectedRoute><DefaultComponent /></ProtectedRoute>}/> 
    <Route path='22802-grupo3-Nerdflix/contacto'element={<ProtectedRoute><Contacto /></ProtectedRoute>}/>
    {/* <Route path='/AddFavourites'element={<ProtectedRoute><AddFavourites /></ProtectedRoute>}/> */}
    <Route path='22802-grupo3-Nerdflix/Generos'element={<ProtectedRoute><Generos /></ProtectedRoute>}/> 
    </Routes>
    </AuthProvider>
  );
}

export default App;
