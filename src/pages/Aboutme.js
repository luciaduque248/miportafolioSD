import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbar";


import "../components/estilos.css";
import memoji from "../assets/img/dibujo.gif";
//import forjaGIF from "../assets/img/CB23F7FB-F65B-43A9-B1A6-830EC184885A.gif";

import Slide from "../components/carousel/carousel";


function Aboutme(){
    return(
        <div>
            <Navbar/>
                <div className="contenido-other-about">
                    <h1>Acerca de Mi</h1>
                    <div className="contenido-about">
                        <img src={memoji} alt="loading..." />
                        <div className="summary">
                            <h1>Hola, mi nombre es Sara Duque!</h1>
                            <p>Soy una persona proactiva, creativa, idealista, responsable, e innovadora. Capacidad de liderazgo, trabajo en equipo y de trabajar bajo presión haciendo que cualquier trabajo o deber se realice en el tiempo asignado.<br/> Tecnológicamente hábil, ofrezco mis habilidades informáticas con muchas plataformas para impulsar la misión de una compañía.</p>
                        </div>
                    </div>
                    <h1>Mis proyectos</h1>
                    <Slide/>
                </div>
            <Footer/>
        </div>
    )
}


export default Aboutme;