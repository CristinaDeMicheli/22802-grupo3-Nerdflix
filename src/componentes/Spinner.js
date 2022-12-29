import { FaSpinner } from "react-icons/fa";


export function Spinner() {
    return (
      <div className="position-relative">
        <div className="position-absolute bottom-0 start-150 translate-middle-x">
          <FaSpinner size={70} style={{color: 'red'}} />
        </div>
        </div>
    )
}
