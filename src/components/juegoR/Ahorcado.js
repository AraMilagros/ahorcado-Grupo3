import React, { useState } from "react";
import abecedario from '../../json/abecedario.json';
import diccionario from '../../json/diccionario.json';
import Botones from "./Botones";

let intRest = 6;
let arrayRespuesta = new Array(0);
let arrayPalabra = new Array(0);
let fataParaGanar = 15;

function Ahorcado() {
const[palabra, setPalabra] = useState(" ");
const[palabraRespuesta, setPalabraRespuesta] = useState(" ");
const[intentosRestantes, setIntentosRestantes] = useState(6);
const[mensaje, setMensaje]=useState("Dale a Nueva palabra");


const asignarPalabra = () => {
  const palabraElegida = diccionario[Math.floor(Math.random() * diccionario.length)];
  arrayPalabra=palabraElegida.palabra;
  arrayRespuesta = new Array(palabraElegida.palabra.length).fill('_ ');
  fataParaGanar=palabraElegida.palabra.length;
  setPalabraRespuesta(arrayRespuesta.join(''));
  setPalabra(arrayPalabra.join(''));

};

const verificarLetra = (event) =>{
  let letra = event.target.textContent;
  if (arrayPalabra.includes(letra)){
    for(let i=0; i<arrayPalabra.length;i++){
        if(arrayPalabra[i]===letra){
            arrayRespuesta[i]=letra;
            fataParaGanar--;
        }
    }
    cambiarResultado();
    setPalabraRespuesta(arrayRespuesta.join(''));
  }else{
    intRest--;
    setIntentosRestantes(intRest);
  }
  for(let j=0; j<abecedario.length;j++){
    if(abecedario[j].letra===letra){
        abecedario[j].disable=true;
    }
  }
  
  cambiarResultado();
}

const cambiarResultado = ()=>{
    if(intRest <1){
        setMensaje("¡¡MEJOR LA PRÓXIMA!!");
        deshabilitarBotones();
    }else if(fataParaGanar<1){
        setMensaje("¡¡FELICIDADES GANASTE!!");
        deshabilitarBotones();
    }else{
        setMensaje("Adivina la palabra...");
    }
}

const MostrarImagen = () => {
  let imagenParaMostrar;
  switch (intentosRestantes) {
    case 0:
      imagenParaMostrar = "../img/6.png";
      break;
    case 1:
      imagenParaMostrar = "../img/5.png";
      break;
    case 2:
      imagenParaMostrar = "../img/4.png";
      break;
    case 3:
      imagenParaMostrar = "../img/3.png";
      break;
    case 4:
      imagenParaMostrar = "../img/2.png";
      break;
    case 5:
      imagenParaMostrar = "../img/1.png";
      break;
    case 6:
      imagenParaMostrar = "../img/0.png";
      break;
    default:
      imagenParaMostrar = "../img/6.png";
      break;
  }
  return (
    <img src={[imagenParaMostrar]} alt="none"/>
  );
};

const reiniciarJuego = () =>{
    fataParaGanar=15;
    intRest=6;
    setIntentosRestantes(intRest);
    setMensaje("Adivina la palabra");
    cambiarResultado();
    asignarPalabra();
    habilitarBotones();
}

const habilitarBotones =()=>{
    for(let i=0;i<abecedario.length;i++){
        abecedario[i].disable=false;
    }
}
const deshabilitarBotones =()=>{
    for(let i=0;i<abecedario.length;i++){
        abecedario[i].disable=true;
    }
}

  return (
    <div className="Ahorcado">
      {/* <Resultado jugador={eleccionJugador} maquina={eleccionMaquina}/> */}
      <main>
        <section>
          <div className="jugador">{mensaje}</div>
          <div>{palabraRespuesta}</div>
          {/* <div>{resultado}</div> */}
          <div className="eleccion">
            <MostrarImagen />
          </div>
        </section>
      </main>
      <div className="opciones">
      <button onClick={reiniciarJuego}>Nueva Palabra</button>
        {abecedario.map((l,i) => (
              <Botones key={i} elegir={verificarLetra} valor={l.letra} deshabilitar={l.disable} />
            ))}
      </div>
    </div>
  );
}
export default Ahorcado;