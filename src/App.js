import {Routes, Route} from 'react-router-dom';
import {Home} from './componentes/Home';
import {Login} from './componentes/Login';
import { ProtectedRoute } from './componentes/ProtectedRoute';
import {Registro} from './componentes/Registro';
import {AuthProvider} from './contexto/authContext';
import DefaultComponent from "./comentarios-usuarios/AppComentarios";
import BuscarPelicula from "./componentes/BuscarPelicula";
import Contacto from "./componentes/Contacto";
import Peliculas from "./componentes/Peliculas";

function App() {
  return (
    <AuthProvider>
    <Routes>
    <Route path='/' element={
      <ProtectedRoute>
    <Home/>
    </ProtectedRoute>
    }/> 
    <Route path='/login' element={<Login/>}/> 
    <Route path='/registro' element={<Registro/>}/> 
    <Route path='/peliculas' element={<Peliculas />}/> 
    <Route path='/buscar-peliculas' element={<BuscarPelicula />}/> 
    <Route path='/comentarios' element={<DefaultComponent />}/> 
    <Route path='/contacto'element={<Contacto />}/>
      
    </Routes>
    </AuthProvider>
  );
}

export default App;
