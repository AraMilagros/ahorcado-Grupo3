import Header from "../components/Header";

export default function Juego(){
    return(
        <>
            <Header/>
            <nav className="m-2">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="uno" data-bs-toggle="tab" data-bs-target="#" type="button" role="tab" aria-controls="" aria-selected="true">
                            Alex Colpari
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="dos" data-bs-toggle="tab" data-bs-target="#" type="button" role="tab" aria-controls="" aria-selected="false">
                            Lucas Martinez
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="tres" data-bs-toggle="tab" data-bs-target="#" type="button" role="tab" aria-controls="" aria-selected="false">
                            Jose Marquez
                        </button>
                    </li>

                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="cuatro" data-bs-toggle="tab" data-bs-target="#" type="button" role="tab" aria-controls="" aria-selected="false">
                            Araceli Palenque
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="cinco" data-bs-toggle="tab" data-bs-target="#" type="button" role="tab" aria-controls="" aria-selected="false">
                            Rafael Fascio
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="seis" data-bs-toggle="tab" data-bs-target="#" type="button" role="tab" aria-controls="" aria-selected="false">
                            Ariel Reyes
                        </button>
                    </li>

                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="" tabIndex="0">
                        {/* Aqui va el componente de cada branch */}
                    </div>
                    <div className="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="" tabIndex="0">
                        {/* Componente */}
                    </div>
                    <div className="tab-pane fade" id="tres" role="tabpanel" aria-labelledby="" tabIndex="0">
                        {/* Componente */}
                    </div>
                    <div className="tab-pane fade" id="cuatro" role="tabpanel" aria-labelledby="" tabIndex="0">
                        {/* Componente */}
                    </div>
                    <div className="tab-pane fade" id="cinco" role="tabpanel" aria-labelledby="" tabIndex="0">
                        {/* Componente */}
                    </div>
                    <div className="tab-pane fade" id="seis" role="tabpanel" aria-labelledby="" tabIndex="0">
                        {/* Componente */}
                    </div>
                    
                </div>
        </nav>
        </>
    );
}