import React from 'react'
import "./estilos/estilos-genero.css"
import 'bootstrap/dist/css/bootstrap.min.css';
//import BuscarGenero from './BuscarGenero';

const Generos = () => {
  let url ="";
  return (
    <div className='genero'>
    <h1>Lista de géneros</h1>
        <table className="table-dark table-stripedt tabla">
  <tbody>
 
    <tr>
      <td>Acción [<a href={url} alt="género accion" title="El cine de acción es un género cinematográfico en el que prima la espectacularidad de las imágenes.">+</a>]</td> 
        <td>Animacion [<a href={url} alt="animacion" title="animacion">+</a>]</td>
        <td>Aventuras [<a href={url} title="El cine de aventuras es aquel donde se refleja un mundo heroico de combates y aventuras, y en el que suele predominar la acción y valores caballerescos.">+</a>]</td> 
        <td>Bélica [<a href={url} title="Belica">+</a>]</td>
    </tr>
    <tr>
        <td>Ciencia ficcion [<a href={url} title="Ciencia ficcion">+</a>]</td>
        <td>Comedia [<a href={url} title="Películas que se caracterizan por la inclusión de gags, chistes o bromas, tanto visuales como verbales con el objetivo de divertir o hacer reír al espectador.">+</a>]</td> 
        <td>Crimen  [<a href={url} alt="crimen" title="Crimen">+</a>]</td>
        <td>Documental [<a href={url} title="Obras audiovisuales que carecen de personajes, de puesta en escena o cualquier tipo de intervención en la realidad que muestran y que tienen por finalidad dar a conocer esa realidad.">+</a>]</td>
    </tr>
    <tr>
        <td>Drama [<a href={url} title="Películas que abordan conflictos personales y sociales con un talante y una resolución realistas. Historias que tratan las cuestiones decisivas en la vida, como el amor, los celos, el desamor, la necesidad de cariño, la experiencia de paternidad o maternidad, el dolor, etc.">+</a>]</td>
        <td>Familia [<a href={url} title="Películas cuya temática o trama tienen una relación directa con la idea de familia.">+</a>]</td>
        <td>Fantasia [<a href={url} title="Películas que abarcan temas de fantasía, los cuales suelen incluir magia, mundos de fantasía exótica, o hechos, personajes o criaturas absolutamente irreales que de ningún modo pertenecen a la realidad conocida de nuestro mundo.">+</a>]</td>
        <td>Historia [<a href={url} title="Películas de género histórico cuyas tramas, relatos y/o argumentos de desarrollan en momentos históricos anteriores a la Segunda Guerra Mundial.">+</a>]</td>
    </tr>
    <tr>
        <td>Misterio[<a href={url} title="Películas que crean en el espectador expectación, curiosidad... para responder a una pregunta sobre un elemento del pasado.">+</a>] </td>
        <td>Música[<a href={url} title="Películas cuyas tramas tienen una considerable relación con la música y todo lo que la rodea.">+</a>] </td>
        <td>Pelicula de TV [<a href={url} title="Pelicula de TV">+</a>]</td>
        <td>Romance[<a href={url} title="Películas que se centran en las relaciones de pareja.">+</a>] </td>
    </tr>
    <tr>
        <td>Suspenso [<a href={url}  target="_blank" rel="noopener noreferrer">+</a>]</td> 
        <td>Terror [<a href={url}  target="_blank" rel="noopener noreferrer">+</a>]</td> 
        <td>Western [<a href={url}  target="_blank" rel="noopener noreferrer">+</a>]</td>
    </tr>
  </tbody>
</table>
</div>
  
  )
}

export default Generos