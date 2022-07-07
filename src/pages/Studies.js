import { getAllStudies } from "../studies";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbar";
import '../components/estilos.css';
import { Link } from "react-router-dom";

function Studies(){
    const studies = getAllStudies();
    return(
        <div>
            <Navbar/>
            <div className="content">
                <h1> Educacion </h1>
                <div className="studies-content">
                    {studies.map(studies =>
                        <div key={studies.id} className="studies">
                            <div className="studies-empresa">
                                {studies.logo}
                                {studies.empresa}
                            </div>
                            <div className="studies-tiempo">
                                {studies.titulo}
                            </div>
                            <div className="studies-btn">
                                <Link to={`${studies.id}`} className="ver-mas">Ver más</Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Studies;