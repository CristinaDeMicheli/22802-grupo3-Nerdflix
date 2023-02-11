import { useState } from "react";
import "./indexC.css";

const ComentarioForm = ({ 
  handleSubmit, 
  submitLabel,
  hasCancelButton = false,
  initialText = '',
  handleCancel,
}) => {
  const [texto, setTexto] = useState(initialText);
  const isTextareaDisabled = texto.length === 0


  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(texto);
    setTexto("")
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea 
        className="comentario-form-textarea"
        value = {texto}
        onChange = {(e) => setTexto(e.target.value)}
      />
      <button className="comentario-form-button" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button 
          type="button" 
          className="comentario-form-button comentario-form-cancel-button"
          onClick={handleCancel}
        >
          Cancelar
        </button>
      )}
    </form>
  )
};

export default ComentarioForm;
