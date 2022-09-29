import React from "react";

const Botones = (props) => {
    
    return (
        <div>
        <button disabled={props.deshabilitar} onClick={props.elegir} >{props.valor}</button>
        </div>
      );
}

export default Botones;
