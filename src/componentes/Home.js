import { useAuth } from "../contexto/authContext";
import { Menu } from "./menu";
import { Spinner } from "./Spinner";


export function Home() {
   const {user, logout, loading} = useAuth()
   const handleLogout = async() =>{
      await logout();
   };
   if (loading) return <Spinner />
   //const {user}=useAuth();
   //console.log(user);
   return <div>
      <Menu/>
   <h1>Bienvenido {user.email}</h1>   
   <button onClick={handleLogout}>Cerrar sessión</button>   
   </div>
}