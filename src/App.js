import {Routes, Route} from 'react-router-dom';
import {Home} from './componentes/Home';
import {Login} from './componentes/Login';
import { ProtectedRoute } from './componentes/ProtectedRoute';
import {Registro} from './componentes/Registro';
import {AuthProvider} from './contexto/authContext';
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
    </Routes>
    </AuthProvider>
  );
}

export default App;
