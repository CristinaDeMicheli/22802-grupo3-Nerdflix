import { useAuth } from "../contexto/authContext";

export function Home() {
   const {user, logout, loading} = useAuth()
   const handleLogout = async() =>{
      await logout();
   };
   if (loading) return <h1>cargando...</h1>
   //const {user}=useAuth();
   //console.log(user);
   return <div>
   <h1>Esta seguro que desea cerrar sesion  {user.email} ?</h1>
   <button className='btn btn-outline-light btn-lg mt-3' onClick={handleLogout}>Cerrar sessión</button>
      
   </div>
}