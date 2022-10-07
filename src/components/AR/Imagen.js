import img1 from '../../assets/img/juego/img0.png';
import img2 from '../../assets/img/juego/img1.png';
import img3 from '../../assets/img/juego/img2.png';
import img4 from '../../assets/img/juego/img3.png';
import img5 from '../../assets/img/juego/img4.png';
import img6 from '../../assets/img/juego/img5.png';
import img7 from '../../assets/img/juego/img6.png';

export default function Imagen({imagen}){
    const imagenes =[img1, img2, img3, img4, img5, img6, img7]

    return(
        <img src={imagenes[imagen]} alt="ahorcadito"/>
    );
}