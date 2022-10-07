import AhorcadoAR from "../components/AR/AhorcadoAR";
import Header from "../components/Header";
import Ahorcado from "../components/Ahorcado";

export default function Juego(){
    return(
        <>
            <Header/>
<<<<<<< HEAD
            <nav className="m-2">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="uno" data-bs-toggle="tab" data-bs-target="#uno-pane" type="button" role="tab" aria-controls="uno-pane" aria-selected="true">1</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="dos" data-bs-toggle="tab" data-bs-target="#dos-pane" type="button" role="tab" aria-controls="dos-pane" aria-selected="false">2</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="tres" data-bs-toggle="tab" data-bs-target="#tres-pane" type="button" role="tab" aria-controls="tres-pane" aria-selected="false">3</button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="cuatro" data-bs-toggle="tab" data-bs-target="#cuatro-pane" type="button" role="tab" aria-controls="cuatro-pane" aria-selected="false">4</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="cinco" data-bs-toggle="tab" data-bs-target="#cinco-pane" type="button" role="tab" aria-controls="cinco-pane" aria-selected="false">5</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="seis" data-bs-toggle="tab" data-bs-target="#seis-pane" type="button" role="tab" aria-controls="seis-pane" aria-selected="false">6</button>
                    </li>
                </ul>

                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="uno-pane" role="tabpanel" aria-labelledby="uno" tabIndex="0"><h1>UNO</h1></div>
                    <div className="tab-pane fade" id="dos-pane" role="tabpanel" aria-labelledby="dos" tabIndex="0"><Ahorcado></Ahorcado></div>
                    <div className="tab-pane fade" id="tres-pane" role="tabpanel" aria-labelledby="tres" tabIndex="0"><h1>TRES</h1></div>
                    <div className="tab-pane fade" id="cuatro-pane" role="tabpanel" aria-labelledby="cuatro" tabIndex="0"><h1>CUATRO</h1></div>
                    <div className="tab-pane fade" id="cinco-pane" role="tabpanel" aria-labelledby="cinco" tabIndex="0"><h1>CINCO</h1></div>
                    <div className="tab-pane fade" id="seis-pane" role="tabpanel" aria-labelledby="seis" tabIndex="0"><h1><AhorcadoAR/></h1></div>
                    
                </div>
        </nav>
=======
            <Ahorcado/>    
>>>>>>> 87c389b8b063e9698f415389a00980fbfb3e94af
        </>
    );
}