export default function Boton(props){
    return(
        <div className="boton-juego"
        onClick={()=>props.manejarClic(props.letter)}>
            {props.letter}
        </div>
    );
}