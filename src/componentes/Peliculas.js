import { useState, useEffect } from 'react'

import PeliculaCaja from './PeliculaCaja';
import 'bootstrap/dist/css/bootstrap.min.css';


const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=b99d7773e83eff1759b62bfc0e8a373f&language=es-ES"

const Peliculas = () => {
  // hooks listado de peliculas 
  const [peliculas, setPeliculas] = useState([])
 
  
  useEffect(() => {

    fetch(API_URL)
    .then((res) =>res.json())
    .then(data=>{
      console.log(data)
      setPeliculas(data.results)
    })
  }, []);

 
  return (
    <div className='container'>
      <div className='grid'>
        {peliculas.map((item, id)=>
        <PeliculaCaja 
          key={id} 
          item={item}  
          />
          )} 
          
      </div>
    </div>
  );
}

export default Peliculas;

