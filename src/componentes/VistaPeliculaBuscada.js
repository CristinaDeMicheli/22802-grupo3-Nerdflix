
import React from 'react'

const VistaPeliculaBuscada = (props) => {
    const { fl, titulo, descripcion, imagen } = props;
    
    return (
    <div>
        <div className="card cardBuscadas">
            <img src= {imagen} className="card-img-top" alt={titulo} />
            <div className="card-body">
                <h5 className="card-title"> {titulo}</h5>
                <p className="card-text">{descripcion}</p>
            </div>
        </div>
    </div>
    )
}

export default VistaPeliculaBuscada;