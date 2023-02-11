import { FaSpinner } from "react-icons/fa";
import "./estilos/estilos-Spinner.css"

export function Spinner() {
    return (
      <div className="contenedorSpinner">
        <div className="centrarSpinner">
          <FaSpinner size={70} style={{color: 'red'}} />
        </div>
        </div>
    )
}
