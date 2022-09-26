import '../assets/css/home.css';
    
export default function Home() {
  return (
    <>
        <div className="portada">
          <h1>Ahorcadito</h1>
          <img src="./img/PPT.gif" alt="" />
          <div className="contenedor-btn">
            <a className="btn btn-danger" href="/jugar">¡A jugar!</a>
            <a className="btn btn-info" href="/info">¿Quiénes somos?</a>
          </div>
        </div>
    </>
  );
}
