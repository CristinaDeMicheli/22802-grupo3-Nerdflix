import { useState } from "react"
import { useAuth } from "../contexto/authContext";
import { useNavigate } from "react-router-dom";
export function Registro() {
    const [user, setUser] =useState({
        email:'',
        password:'',
    });
    const {signup} = useAuth()
    const navigate = useNavigate()
    const [error, setError] =useState();

    const handleChange = ({target:{name,value}})=>
       setUser({...user,[name]: value})
       

    const handleSubmit = async (e) =>{
        e.preventDefault()
        /* console.log(user); */
        setError('');
       try {
        await signup(user.email, user.password)
        navigate('/')
       } catch (error) {
       /*  console.log(error.message); */
       setError(error.message);
       //se puede preguntar aqui por cada codigo de error
       //y definir una leyenda ams amigable para el usuario
       }
    };
    return (
        <div className="container-fluid">
         
         {error && <p>{error}</p>}
         <h1 className="text-start ms-3 mt-3" id="logo">NERDFLIX</h1>
          <form  onSubmit={handleSubmit} className="container text-center  mt-3 mb-5 pt-5 col-5">
             <div className="col-10  mx-auto">
             
          <p id="Iniciasesión" className="mt-2  text-white text-start ">Registrarse</p>
         
          <div id="form" className="form-floating mb-3">
   <input type="email" className="form-control bg-dark text-white-50" id="floatingInput" placeholder="name@example.com" onChange={handleChange}/>
   <label id="label" className="text-white-50" for="floatingInput">Email o número de teléfono</label>
 </div>
 <div id="form" className="form-floating">
   <input type="password" className="form-control bg-dark text-white-50" id="floatingPassword" placeholder="Password" onChange={handleChange}/>
   <label id="label" className="text-white-50" for="floatingPassword">Contraseña</label>
 </div>
         
         
       
         <div className="d-grid gap-2">
          <button id="btn" className="btn btn-danger mt-5 mb-3" type="button">Registrarse</button>
         </div>
         
        
        
   
         </div>
         </form>
 
 
 
         <footer className="footer">
   <div className="container-fluid  text-white-50">
     <div clasName="row">
       <div className="col-12 footer-column">
         
       <ul className="nav flex-column">
           <li className="nav-item">
             <a className="nav-link mt-4 ms-4" href="http://localhost:3000/">¿Preguntas? Llama al 0800 345 6789</a>
           </li>
           </ul>
           </div>
           </div>
           
           <div className="row">
       <div className="col-3 footer-column">
         <ul className="nav flex-column">
           <li className="nav-item">
             <a className="nav-link mt-4 ms-4" href="http://localhost:3000/">Preguntas Frecuentes</a>
           </li>
           <li className="nav-item">
             <a className="nav-link  ms-4" href="http://localhost:3000/">Preferencias de cookies</a>
           </li>
           <li className="nav-item text-white">
           <select className="form-select form-select-sm text-white-50 mb-5 mt-4 ms-5" aria-label=".form-select-sm" id="lang">
   
          
          <option value="2">Español</option>
   
          </select>
           </li>
         </ul>
       </div>
       <div className="col-3  footer-column">
         <ul className="nav flex-column">
           <li className="mt-4"></li>
           <li className="nav-item">
             <a className="nav-link  " href="http://localhost:3000/">Centro de ayuda</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="http://localhost:3000/">Información corporativa</a>
           </li>
           
         </ul>
       </div>
       
       <div className="col-3 box">
         <ul className="list-inline quick-links">
          <li className="mt-4"></li>
           <li className="list-inline-item mt-2">
             <a href="http://localhost:3000/">Término de uso</a>
           </li>
         </ul>
       </div>
 
     
     
  
       <div className="col-3 box">
         <ul className="list-inline quick-links">
          <li className="mt-4"></li>
           <li className="list-inline-item mt-2">
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