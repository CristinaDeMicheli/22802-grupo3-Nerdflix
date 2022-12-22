import { FaSpinner } from "react-icons/fa";

export function Spinner() {
    return (
        <div className="position-absolute top-50 start-50 translate-middle">
          <FaSpinner size={60} />
        </div>
    )
}
