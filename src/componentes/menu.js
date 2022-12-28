import { useAuth } from "../contexto/authContext";
export function Menu(){ 
    const {user, logout, loading} = useAuth()
    const handleLogout = async() =>{
       await logout();
    };
    if (loading) return <h1>cargando...</h1>
    //const {user}=useAuth();
    //console.log(user);
    return <div>
   <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <a class="navbar-brand" href="http://localhost:3000/peliculas"><h1 class="text-start ms-3 mt-3" id="logo">NERDFLIX</h1></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="http://localhost:3000/peliculas">Peliculas</a>
      </li>
    </ul>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="http://localhost:3000/comentarios">Comentarios</a>
      </li>
    </ul>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="http://localhost:3000/contacto">Contacto</a>
      </li>
    </ul>
   
  </div>
  <button onClick={handleLogout}>Cerrar sessión</button>
</nav>  
   </div>
}