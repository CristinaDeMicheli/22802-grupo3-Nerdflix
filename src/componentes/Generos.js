import React from 'react'
import "./estilos/estilos-genero.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Generos = () => {
  let url ="";
  return (
    <div className='genero'>
    <h1>Lista de géneros</h1>
        <table className="table-dark table-stripedt tabla">
  <tbody>
 
    <tr>
        <td>Abusos [<a  href={url} title="El género de Abusos son todas aquellas películas cuya temática tiene que ver con ese patrón de violencia física, sexual, económica, psicológica o emocional, utilizado para obtener poder y mantener el control sobre otra persona." target="_blank" rel="noopener noreferrer">+</a>]</td>
        <td>Comedia negra[<a href={url}  target="_blank" rel="noopener noreferrer">+</a>]</td>
        <td>Hombres lobo[<a href={url} title="Películas en donde el elemento principal de la historia es la licantropía o las criaturas populares conocidas como hombres lobo.">+</a>] </td>
        <td>Religion [<a href={url}  target="_blank" rel="noopener noreferrer">+</a>]</td>
    </tr>
    <tr>
        <td>Accion [<a href={url} alt="género accion" title="El cine de acción es un género cinematográfico en el que prima la espectacularidad de las imágenes.">+</a>]</td>
        <td>Comedia romantica[<a href={url} title="Se trata de un subgénero de las películas de comedia así como de las películas románticas.">+</a>]</td>
        <td>Homosexualidad[<a href={url} title="Películas cuyo argumento principal, cuya trama central, se basa en una historia vivida por homosexuales, y en la que la homosexualidad es la razón fundamental de las vivencias, actitudes y reacciones de los personajes.">+</a>] </td>
        <td>Road Movie [<a href={url}  target="_blank" rel="noopener noreferrer">+</a>]</td>
    </tr>
    <tr>
        <td>Adolescencia [<a href={url} alt="género adolescencia" title="Género que trata sobre adolescentes o temas relacionados con la adolescencia, especialmente su paso a la madurez.">+</a>]</td>
        <td>Cortometraje[<a href={url} alt="género cortometraje" title="Género cinematográfico que abarca aquellas películas de ficción con una duración inferior a treinta minutos">+</a>]</td>
        <td>Crimen  [<a href={url} alt="género adolescencia" title="Género que trata sobre adolescentes o temas relacionados con la adolescencia, especialmente su paso a la madurez.">+</a>]</td>
        <td>Robos [<a href={url}  target="_blank" rel="noopener noreferrer">+</a>]</td>
    </tr>
    <tr>
        <td>Animacion [<a href={url} title="En el cine de animación se usan mayoritariamente técnicas de animación. Se producen las imágenes una por una mediante dibujos, modelos, objetos y otras múltiples técnicas, de forma que, al proyectarse consecutivamente, se produzca la ilusión de movimiento.">+</a>] </td>
        <td>Cuentos de hadas [<a href={url} title="Películas que narran historias basadas en este tipo de cuentos o incorporan en sus tramas algunos de sus elementos más característicos.">+</a>]</td>
        <td>Infancia[<a href={url} title="Películas en donde son niños los protagonistas y en donde éstos, experimentan determinados descubrimientos en su choque con el mundo adulto.">+</a>] </td>
        <td>Romanos [<a href={url}  target="_blank" rel="noopener noreferrer">+</a>]</td> 
    </tr>
    <tr>
        <td>Anime [<a href={url} title="El género anime es un estilo de animación que es propio de Japón.">+</a>] </td>
        <td>Deportes [<a href={url} title="El género anime es un estilo de animación que es propio de Japón.">+</a>]</td>
        <td>Misterio[<a href={url} title="Películas que crean en el espectador expectación, curiosidad... para responder a una pregunta sobre un elemento del pasado.">+</a>] </td>
        <td>Segunda G.M. [<a href={url}  target="_blank" rel="noopener noreferrer">+</a>]</td> 
    </tr>
    <tr>
        <td>Animales [<a href={url} title="La películas de animales son aquellas en donde éstos tienen un protagonismo especial. Suelen ser películas orientadas a un público joven o familiar y los temas normalmente están relacionados con la protección a la naturaleza.">+</a>] </td>
        <td>Docencia [<a href={url} title="Películas cuyas temáticas giran en torno al proceso de enseñanza-aprendizaje que se establece entre profesores y alumnos.">+</a>]</td>
        <td>Mitos y leyendas[<a href={url} title="Películas que giran en torno a la mitología (mitología griega, romana, nórdica, etc.) o a las leyendas (narración de hechos naturales, sobrenaturales o mezclados, que se transmite de generación en generación en forma oral o escrita) y que desarrollan estos conceptos incluyendo personajes y/o elementos relacionados con el mito y la leyenda en la trama de las películas.">+</a>] </td>
        <td>Sicarios [<a href={url}  target="_blank" rel="noopener noreferrer">+</a>]</td> 
    </tr>

    <tr>
        <td>Artes marciales [<a href={url} title="Son aquellas películas cuyas tramas contienen escenas de lucha de cualquier estilo.">+</a>] </td>
        <td>Documental [<a href={url} title="Obras audiovisuales que carecen de personajes, de puesta en escena o cualquier tipo de intervención en la realidad que muestran y que tienen por finalidad dar a conocer esa realidad.">+</a>]</td>
        <td>Música[<a href={url} title="Películas cuyas tramas tienen una considerable relación con la música y todo lo que la rodea.">+</a>] </td>
        <td>Superagentes [<a href={url}  target="_blank" rel="noopener noreferrer">+</a>]</td> 
    </tr>

    <tr>
        <td>Asiática [<a href={url}  target="_blank" rel="noopener noreferrer">+</a>]</td> 
        <td>Drama [<a href={url} title="Películas que abordan conflictos personales y sociales con un talante y una resolución realistas. Historias que tratan las cuestiones decisivas en la vida, como el amor, los celos, el desamor, la necesidad de cariño, la experiencia de paternidad o maternidad, el dolor, etc.">+</a>]</td>
        <td>Naturaleza[<a href={url} title="Películas ambientadas en plena naturaleza, principalmente aquellas en las que el medio salvaje (montañas, bosques, selvas, etc.) tiene un protagonismo importante en la trama y en el devenir de los personajes.">+</a>] </td>
        <td>Supeheroes [<a href={url}  target="_blank" rel="noopener noreferrer">+</a>]</td> 
    </tr>

     <tr>
        <td>Aventuras [<a href={url} title="El cine de aventuras es aquel donde se refleja un mundo heroico de combates y aventuras, y en el que suele predominar la acción y valores caballerescos.">+</a>]</td> 
        <td>Droga [<a href={url} title="El cine de aventuras es aquel donde se refleja un mundo heroico de combates y aventuras, y en el que suele predominar la acción y valores caballerescos.">+</a>]</td>
        <td>Navidad[<a href={url} title="Películas relacionadas con la Navidad o que se desarrollan en el marco de estas fiestas.">+</a>] </td>
        <td>Suspenso [<a href={url}  target="_blank" rel="noopener noreferrer">+</a>]</td> 
    </tr>

    <tr>
        <td>Aviones [<a href={url} title="Películas cuyas tramas tienen relación con aviones ya sean antiguos o modernos.">+</a>]</td> 
        <td>Enfermedad [<a href={url} title="Películas que tratan sobre enfermos (personas con cualquier tipo de enfermedad), así como su entorno hospitalario, familiar y/o social, o sobre algún tipo de enfermedad y sus consecuencias.">+</a>]</td>
        <td>Nazismo[<a href={url} title="Películas relacionadas con la temática del nazismo o en las que el nacionalsocialismo, los nazis, o los neonazis, tienen una parte relevante en la historia.">+</a>] </td>
        <td>Terror [<a href={url}  target="_blank" rel="noopener noreferrer">+</a>]</td> 
    </tr>

    <tr>
        <td>Baile [<a href={url} title="Películas cuyas historias tienen alguna relación con el baile se cual sea su disciplina (danza, breakdance...).">+</a>]</td> 
        <td>Espionaje [<a href={url} title="Género cinematográfico caracterizado por su temática política y una gran carga de suspense. Sus protagonistas son, por lo general, agentes al servicio de los gobiernos que actúan en la sombra, persiguiendo ambiguos intereses y moviéndose dentro de un marco de complejas relaciones internacionales. El período que, tras la Segunda Guerra Mundial, se denominócomo la guerra fría, fue el punto álgido de este género cinematográfico, cuyos guiones fueron, en general, adaptaciones de novelas que en muchos casos, fueron escritas por antiguos agentes que relataron sus propias experiencias.">+</a>]</td>
        <td>Negocios[<a href={url} title="Films centrados específicamente en el mundo de los negocios, en el mercado financiero, la bolsa o cuando el desarrollo de alguna línea de negocio es una parte importante de la trama.">+</a>] </td>
        <td>Terror asiatico [<a href={url}  target="_blank" rel="noopener noreferrer">+</a>]</td> 
    </tr>

    <tr>
        <td>Belica [<a href={url} title="El cine bélico o cine de guerra son quellas películas que centran su historia en guerras.">+</a>]</td> 
        <td>Extraterrestres [<a href={url} title="Películas cuyas historias, temática o tramas están relacionadas con los extraterrestres.">+</a>]</td>
        <td>Parejas[<a href={url} title="Películas que se centran en las relaciones de pareja.">+</a>] </td>
        <td>Terrorismo [<a href={url}  target="_blank" rel="noopener noreferrer">+</a>]</td> 
    </tr>
    <tr>
        <td>Boxeo [<a href={url} title="Lo forman aquellas películas en las que el boxeo tiene una gran importancia para la trama.">+</a>]</td> 
        <td>Familia [<a href={url} title="Películas cuya temática o trama tienen una relación directa con la idea de familia.">+</a>]</td>
        <td>Policiaca[<a href={url}  target="_blank" rel="noopener noreferrer">+</a>]</td> 
        <td>Thriller [<a href={url}  target="_blank" rel="noopener noreferrer">+</a>]</td> 
    </tr>
    <tr>
        <td>Carcelario [<a href={url} title="Películas cuyas historias están relacionadas con cárceles, prisiones o cualquier tipo de centro que vulnera la libertad del ser humano.">+</a>]</td> 
        <td>Fantasia [<a href={url} title="Películas que abarcan temas de fantasía, los cuales suelen incluir magia, mundos de fantasía exótica, o hechos, personajes o criaturas absolutamente irreales que de ningún modo pertenecen a la realidad conocida de nuestro mundo.">+</a>]</td>
        <td>Politica[<a href={url}  target="_blank" rel="noopener noreferrer">+</a>]</td> 
        <td>Vampiros [<a href={url}  target="_blank" rel="noopener noreferrer">+</a>]</td> 
    </tr>
    <tr>
        <td>Catástrofes [<a href={url} title="Aquellas películas que tienen como tema principal una catástrofe en curso o inminente para la raza humana.">+</a>]</td> 
        <td>Gangsters [<a href={url} title="Películas que tienen como tema principal el crimen organizado y donde predomina el punto de vista del propio criminal.">+</a>]</td>
        <td>Post Apocalíptica[<a href={url}  target="_blank" rel="noopener noreferrer">+</a>]</td> 
        <td>Venganza [<a href={url}  target="_blank" rel="noopener noreferrer">+</a>]</td> 
    </tr>
    <tr>
        <td>Comedia [<a href={url} title="Películas que se caracterizan por la inclusión de gags, chistes o bromas, tanto visuales como verbales con el objetivo de divertir o hacer reír al espectador.">+</a>]</td> 
        <td>Historia antigua [<a href={url} title="Películas de género histórico cuyas tramas, relatos y/o argumentos de desarrollan en momentos históricos anteriores a la Segunda Guerra Mundial.">+</a>]</td>
        <td>Racismo[<a href={url}  target="_blank" rel="noopener noreferrer">+</a>]</td> 
        <td>Western [<a href={url}  target="_blank" rel="noopener noreferrer">+</a>]</td> 
    </tr>


  </tbody>
</table>
</div>
  
  )
}

export default Generos