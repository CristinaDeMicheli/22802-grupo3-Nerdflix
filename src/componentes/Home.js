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
   <h1>Bienvenido {user.email}</h1>   
   <button onClick={handleLogout}>Cerrar sessión</button>   
   </div>
}