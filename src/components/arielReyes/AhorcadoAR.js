import React, { useEffect, useState } from "react";
import Boton from "./Boton";
import abecedario from"../../assets/json/abecedario.json";
// import diccionario from"../../assets/json/diccionario.json";
import '../../assets/css/ahorcadoAr.css'

export default function AhorcadoAR(){
    var palabra="HOLA";
    let arrayPalabra=Array.from(palabra);
    const [palabraOculta,setPalabraOculta]= useState(Array(arrayPalabra.length).fill("_ "));
    const [state,setState]=useState(0);
    const [mensaje, setMesanje]=useState("");
    // const [numIntentos,setNumIntentos]=useState(0);

    let intentos=0;
    var letrasAcertadas=palabraOculta;
    let letrasUsadas= [];
    let letraPresionada;
    useEffect(()=>{
        setPalabraOculta(letrasAcertadas);
        
    },[state])
    const iniciarJuego=()=>{

    }
    const mostrarLetra = (value) => {
        let letrasUsadas= new Array();
        setState(state + 1);
        // letraPresionada=value;
        letrasUsadas.push(value);
        console.log(state);
        // if (letrasUsadas.includes(value)) {
        //     console.log("incluye");
        //     return;
        // }
        
        

        console.log(intentos, letrasUsadas);
        if (intentos < 6) {
            arrayPalabra.map((letra, index) => {
                if (letra == value) {
                    
                    letrasAcertadas[index] = letra;
                    
                    // console.log(letrasAcertadas);

                }else{
                    intentos++;
                }
            })
        } else {
            setMesanje("Perdiste");
        }

        verificarGanador();
    }
    const verificarGanador=()=>{
        if(palabraOculta.toString()==arrayPalabra.toString()){
            setMesanje("Ganaste");          
        }
    }
    return(
        <>
        <h1>{palabraOculta}</h1>
        <div className="contenedor-botones">
            {abecedario.map((abc,i)=>
            <Boton
            key={i}
            letter={abc.letra}
            manejarClic={mostrarLetra}
            ></Boton>    )}
        </div>
        <h2>{mensaje}</h2>
        <button onClick={iniciarJuego}>Iniciar Juego</button>
        </>
    );
}