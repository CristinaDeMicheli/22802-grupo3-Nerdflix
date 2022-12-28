import { useAuth } from "../contexto/authContext"
import { Navigate } from "react-router-dom"
export function ProtectedRoute({children}){
 const {user,loading} = useAuth()
 if  (loading)return <h1>cargando...</h1>
 if (!user) return <Navigate to='/login'/>

 return <>{children}</>;
}