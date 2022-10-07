import AhorcadoAR from "../components/AR/AhorcadoAR";
import Header from "../components/Header";
import Ahorcado from "../components/Ahorcado";

export default function Juego(){
    return(
        <>
            <Header/>
            <nav className="m-2">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="uno" data-bs-toggle="tab" data-bs-target="#uno-pane" type="button" role="tab" aria-controls="uno-pane" aria-selected="true">1</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="dos" data-bs-toggle="tab" data-bs-target="#dos-pane" type="button" role="tab" aria-controls="dos-pane" aria-selected="false">2</button>
                    </li>
                </ul>

                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="uno-pane" role="tabpanel" aria-labelledby="uno" tabIndex="0"><Ahorcado/>
                    </div>
                    <div className="tab-pane fade" id="dos-pane" role="tabpanel" aria-labelledby="dos" tabIndex="0"><AhorcadoAR/></div>
                </div>
        </nav>
            
        </>
    );
}