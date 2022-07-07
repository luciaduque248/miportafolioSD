import { useParams } from "react-router-dom";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbar";
import '../components/details.css'
import { getStudy } from "../studies";

function Job() {
    const params = useParams();
    const study = getStudy(parseInt(params.id));
    return (
        <div>
            <Navbar />
            <div className="details-study">
                <h1>Detalle del Estudio</h1>
                <div className="detallado-estudio">
                    <div className="imagen">
                        {study.logo2}
                    </div>
                    <div className="contenido">
                        <p><strong>Empresa: </strong> {study.empresa}</p>
                        <p><strong>Email: </strong> {study.email}</p>
                        <p><strong>Tiempo: </strong> {study.tiempo}</p>
                        <p><strong>Titulo: </strong> {study.titulo}</p>
                        <p><strong>Telefono: </strong> {study.telefono}</p>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Job;