import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Desarrolladores from './pages/Desarrolladores';
import Home from './pages/Home';
import Juego from './pages/Juego';

function App() {
    return (
        <div className="container">
            <Router>
                <Routes>
                    {/* Aqui se llama el componente que muestra el inicio del juego..la portada */}
                    <Route path="/" element={<Home/>}></Route>
                    {/* Aqui iria el componente que muestra el juego
                      #se debe aumentar el atributo de element={<componente/>} */}
                    <Route path="/jugar/*" element={<Juego/>}></Route>
                    {/* Y aqui iria el componente que muestra las cards de los desarrolladores
                        #se debe aumentar el atributo de element={<componente/>} */}
                    <Route path="/info" element={<Desarrolladores/>}></Route>
                    
                </Routes>
            </Router>
            
        </div>



    );

}

export default App;