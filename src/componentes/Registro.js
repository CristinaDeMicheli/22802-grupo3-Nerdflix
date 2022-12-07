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
        <div className='container'>
            <div className='row'>
                 <div className='col'>
                     <h1 className='mt-3 text-light'>REGISTRO</h1>
                       {error && <p>{error}</p>}
                     <form className='mt-5 ' onSubmit={handleSubmit}>
                          <div className='mb-4'>
                             <label className='form-label h3 text-light'>Email:</label>
                                <input 
                
                                 type="email" name="email" placeholder="example@gmail.com"  onChange={handleChange}
                                 className='form-control w-50 m-auto '
                
                                 />
                        </div>
                        <div className='mb-4'>
                            <label className='form-label h3 text-light'>Password:</label>
                            <input 
                            type="password" name="password" placeholder="********" id="password" onChange={handleChange}
                            className='form-control w-50 m-auto '
                
                           />
                     </div>


                    <button type="submit" className='btn btn-outline-light btn-lg mt-3'>Registrarse</button>
     
                </form>
            </div>
        </div>
    </div>
       
)
}