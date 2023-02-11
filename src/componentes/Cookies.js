import "./estilos/estilos-paginas-footer.css";
import "./estilos/estilos-cookies.css";

const Cookies = () => {
  return (
    <div>
      <div className="container-encabezado">
        <h2 className="text-start mt-2" id="logo">
          NERDFLIX
        </h2>
      </div>

      <div className="contenedor-informacion py-5">
        <a className="py-5 ps-5" href="/">
          🡸 Regresar a la página de inicio
        </a>
        <h1 className="ms-5 text-black"> Administrar Cookies</h1>

        <h2 className="text-start text-white-75 pt-2">Descripción general</h2>
        <p>
          Con esta herramienta para cookies, sabrás quién usa cookies para
          recopilar datos de tu dispositivo, con qué fines los utilizan y cómo
          puedes controlar el uso de cookies para actividades que no sean
          esenciales.
        </p>
        <p >
          Si excluyes las cookies de publicidad, aún podrás ver anuncios de Nerdflix  en otros
          sitios, pero esos anuncios no los habremos personalizado nosotros ni
          nuestros proveedores de servicios. Nosotros seguiremos personalizando
          tu experiencia en nuestro sitio web a través del uso de las cookies
          que no hayas excluido.
        </p>
        <p>
          Otra opción es ajustar la configuración de privacidad de tu navegador
          para evitar que el mismo acepte nuevas cookies o hacer que te avise
          cuando recibas una nueva o desactivarlas completamente. Si tu
          navegador está configurado para no aceptar cookies, no recibirás
          publicidad basada en intereses, pero tu uso del servicio Nerdflix puede verse
          afectado o no estar disponible. Además, si usas nuestra herramienta de
          cookies para excluir determinadas cookies, tus preferencias de
          exclusión serán recordadas mediante la colocación de una cookie en tu
          dispositivo. Por ello es importante que tu navegador esté configurado
          para aceptar cookies para que tus preferencias surtan efecto. Si
          borras o limpias tus cookies, o si cambias de navegador, tendrás que
          configurar de nuevo tus preferencias de cookies.
        </p>

        <h2 className="text-start text-white-75 pt-4">
          Cookies esenciales
        </h2>
        <p>
          Estas cookies son estrictamente necesarias para ofrecer nuestro sitio
          web o nuestro servicio en línea. Por ejemplo, tanto nosotros como
          nuestros Proveedores de servicios podemos utilizar cookies para
          autenticar e identificar a nuestros visitantes cuando usan nuestros
          sitios web y nuestras aplicaciones para que podamos prestarles nuestro
          servicio. También nos ayudan a aplicar nuestros Términos de uso,
          evitar estafas y mantener la seguridad de nuestros servicios.
        </p>
        <p >
          Vida útil: la mayoría de las cookies son de sesión (se desactivan en
          cuanto cierras el navegador) o cookies que solo tienen un día de
          duración. Algunas cookies están activas durante más tiempo (entre 3 y
          12 meses). Las cookies que sirven para impedir los fraudes y proteger
          nuestros servicios están activas durante 24 meses como máximo.
        </p>

        <h2 className="text-start text-white-75 pt-4">
          Cookies funcionales y de rendimiento
        </h2>
        <p>
          Estas cookies nos ayudan a personalizar y mejorar tu experiencia en
          línea con Nerdflix.
          Nos sirven, por ejemplo, para recordar tus preferencias y evitar que
          tengas que introducir los mismos datos varias veces (durante el alta
          como suscriptor, etc.). También usamos estas cookies para recopilar
          información (como páginas populares, tipos de conversión, patrones de
          visionado, seguimiento de vínculos y otra información) acerca del uso
          que hacen nuestros visitantes del servicio Netflix para que podamos
          mejorar y personalizar nuestro sitio web y nuestro servicio y llevar a
          cabo investigaciones de mercado. La eliminación de estos tipos de
          cookies puede limitar la funcionalidad de nuestro servicio.
        </p>
        <p >
          Vida útil: la mayoría de estas cookies solo duran un día. Algunas
          cookies están activas durante más tiempo (entre 3 y 12 meses).
        </p>

        <h2 className="text-start text-white-75 pt-4">
          Cookies de rendiemiento y funcionales de terceros
        </h2>
        <p>
          Estas cookies, configuradas por terceros, nos ayudan a personalizar y
          mejorar tu experiencia online con
          Nerdflix. La eliminación de las cookies de este tipo puede limitar la funcionalidad
          de nuestro servicio.
        </p>

        <h2 className="text-start text-white-75 pt-4 ">
          Cookies publicitarias
        </h2>
        <p className="pb-4">
          Estas cookies utilizan información sobre tu uso de este y de otros
          sitios web y aplicaciones, y sobre tus reacciones a correos y
          anuncios, para enviarte los anuncios que son más relevantes para ti y
          con fines de análisis y de optimización. Estos anuncios son de lo que
          se conoce como «publicidad basada en intereses» y los ves fuera del
          dominio de Nerdflix. 
          Nerdflixutiliza
          medidas contractuales y técnicas para impedir que sus colaboradores de
          publicidad accedan a datos relacionados con los títulos que
          seleccionas, las URL que visitas y las series que has visto en nuestro
          servicio. No revelamos la información sobre las selecciones de títulos
          ni de las series que has visto en nuestro servicio. Las cookies de
          publicidad asociadas a nuestro servicio pertenecen a nuestros
          proveedores de servicios, como se explica en los detalles de las
          cookies.
        </p>

        <button className="btn btn-secondary btn-sm ms-5">
          Guardar configuración
        </button>
        <p>
          Próximamente se habilitará la opción de guardar la configuración de
          cookies.
        </p>
      </div>
    </div>
  );
};

export default Cookies;
