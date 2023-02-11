import { useAuth } from "../contexto/authContext"
import { Navigate } from "react-router-dom"
import { Spinner } from "./Spinner"
export function ProtectedRoute({children}){
 const {user,loading} = useAuth()
 if  (loading)return  <Spinner />
 if (!user) return <Navigate to='/login'/>

 return <>{children}</>;
}