import {Routes, Route} from 'react-router-dom';
import {Home} from './Componentes/Home';
import {Login} from './Componentes/Login';
import Mostrar from './Componentes/Mostrar';
import Crear from './Componentes/Crear';
import Editar from './Componentes/Editar';
import { ProtectedRoute } from './Componentes/ProtectedRoute';
import {Registro} from './Componentes/Registro';
import {AuthProvider} from './contexto/authContext';
function App() {
  return (
    <AuthProvider>
    <Routes>
   {/*  <Route path='/' element={
      <ProtectedRoute>
    <Home/>
    </ProtectedRoute>
    }/> */}  
    <Route path='/' element={
      <ProtectedRoute>
        <Mostrar/>
      </ProtectedRoute>
    
    }/>
    <Route path='/crearproducto' element={
      <ProtectedRoute>
        <Crear/>
      </ProtectedRoute>
    
    }/>
    <Route path='/editarproducto/:id' element={
      <ProtectedRoute>
         <Editar/>
      </ProtectedRoute>   
    }/>
     <Route path='/cerrar_sesion' element={
      <ProtectedRoute>
         <Home/>
      </ProtectedRoute>   
    }/>
    <Route path='/login' element={<Login/>}/> 
    <Route path='/registro' element={<Registro/>}/> 
    </Routes>
    </AuthProvider>
  );
}

export default App;
