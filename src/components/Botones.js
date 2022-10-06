import React from "react";

const Botones = (props) => {
    //Por cada elemento que recibe de abecedario.json retorna un botón.
    return (
        <div>
        <button disabled={props.deshabilitar} onClick={props.elegir} >{props.valor}</button>
        </div>
      );
}

export default Botones;
