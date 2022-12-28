import { useState } from "react"
import { useAuth } from "../contexto/authContext";
import { useNavigate } from "react-router-dom";
export function Login() {
    const [user, setUser] =useState({
        email:'',
        password:'',
    });
    const {login} = useAuth()
    const navigate = useNavigate()
    const [error, setError] =useState();

    const handleChange = ({target:{name,value}})=>
       setUser({...user,[name]: value})
       

    const handleSubmit = async (e) =>{
        e.preventDefault()
        /* console.log(user); */
        setError('');
       try {
        await login(user.email, user.password)
        navigate('/')
       } catch (error) {
       /*  console.log(error.message); */
       setError(error.message);
       //se puede preguntar aqui por cada codigo de error
       //y definir una leyenda ams amigable para el usuario
       }
    };
    return (
        <div class="container-fluid">
         
         {error && <p class="mt-2  text-white text-start">{error}</p>}
         <h1 class="text-start ms-3 mt-3" id="logo">NERDFLIX</h1>
         <form  onSubmit={handleSubmit} class="container text-center  mt-3 mb-5 pt-5 col-5">
        <label htmlFor="email" class="mt-2  text-white text-start">Email</label>
        <input type="email" name="email" placeholder="example@gmail.com"  onChange={handleChange}/>
        <label htmlFor="password" class="mt-2  text-white text-start ">Password</label>
        <input type="password" name="password" placeholder="********" id="password" onChange={handleChange}/>
        <button>Iniciar Sesión</button>

        </form>

 
 
 
         <footer className="footer">
   <div className="container-fluid  text-white-50">
     <div class="row">
       <div class="col-12 footer-column">
         
       <ul class="nav flex-column">
           <li class="nav-item">
             <a class="nav-link mt-4 ms-4" href="http://localhost:3000/">¿Preguntas? Llama al 0800 345 6789</a>
           </li>
           </ul>
           </div>
           </div>
           
           <div class="row">
       <div class="col-3 footer-column">
         <ul class="nav flex-column">
           <li class="nav-item">
             <a class="nav-link mt-4 ms-4" href="http://localhost:3000/">Preguntas Frecuentes</a>
           </li>
           <li class="nav-item">
             <a class="nav-link  ms-4" href="http://localhost:3000/">Preferencias de cookies</a>
           </li>
           <li class="nav-item text-white">
           <select className="form-select form-select-sm text-white-50 mb-5 mt-4 ms-5" aria-label=".form-select-sm" id="lang">
   
          
          <option value="2">Español</option>
   
          </select>
           </li>
         </ul>
       </div>
       <div class="col-3  footer-column">
         <ul class="nav flex-column">
           <li className="mt-4"></li>
           <li class="nav-item">
             <a className="nav-link  " href="http://localhost:3000/">Centro de ayuda</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="http://localhost:3000/">Información corporativa</a>
           </li>
           
         </ul>
       </div>
       
       <div class="col-3 box">
         <ul class="list-inline quick-links">
          <li className="mt-4"></li>
           <li class="list-inline-item mt-2">
             <a href="http://localhost:3000/">Término de uso</a>
           </li>
         </ul>
       </div>
 
     
     
  
       <div class="col-3 box">
         <ul class="list-inline quick-links">
          <li className="mt-4"></li>
           <li class="list-inline-item mt-2">
             <a href="http://localhost:3000/">Privacidad</a>
           </li>
           
         </ul>
       </div>
 
       
     </div>
   </div>
 </footer>
 </div>
     
 )
}