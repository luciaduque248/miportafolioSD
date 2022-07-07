import { useParams } from "react-router-dom";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbar";
import '../components/details.css';
import { getJob } from "../jobs";

function Job() {
    const params = useParams();
    const job = getJob(parseInt(params.id));
    return (
        <div>
            <Navbar />
            <div className="details-job">
                <h1>Detalle del trabajo</h1>
                <div className="detallado-job">
                    <div className="imagen">
                        {job.logo2}
                    </div>
                    <div className="contenido">
                        <p><strong>Empresa: </strong> {job.empresa}</p>
                        <p><strong>Email: </strong> {job.email}</p>
                        <p><strong>Tipo: </strong> {job.tipo}</p>
                        <p><strong>Tiempo: </strong> {job.tiempo}</p>
                        <p><strong>Telefono: </strong> {job.telefono}</p>
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Job;