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
import AddFavourites from './componentes/AddFavourites';
import RemoveFavourites from './componentes/RemoveFavourites';

function App() {
  return (
    <AuthProvider>
    <Routes>
    <Route path='/' element={
      <ProtectedRoute>
    <Peliculas/>
    </ProtectedRoute>
    }/> 
    <Route path='/login' element={<Login/>}/> 
    <Route path='/registro' element={<Registro/>}/> 
    
    <Route path='/peliculas' element={<ProtectedRoute><Peliculas /></ProtectedRoute>}/>
    <Route path='/addfavourites' element={<ProtectedRoute><AddFavourites /></ProtectedRoute>}/> 
    <Route path='/buscar-peliculas' element={<ProtectedRoute><BuscarPelicula /></ProtectedRoute>}/> 
    <Route path='/comentarios' element={<ProtectedRoute><DefaultComponent /></ProtectedRoute>}/> 
    <Route path='/contacto'element={<ProtectedRoute><Contacto /></ProtectedRoute>}/>
      
    </Routes>
    </AuthProvider>
  );
}

export default App;
