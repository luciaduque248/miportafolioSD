import { getAllJobs } from "../jobs";
import Navbar from "../components/navbar/Navbar";
import '../components/estilos.css';
import Footer from "../components/footer/footer";
import { Link } from "react-router-dom";

import '../components/responsive.css';

function Jobs() {
    const jobs = getAllJobs();
    return (
        <div>
            <Navbar />
            <div className="content">
                <h1> Trabajos </h1>
                <div className="jobs-content">
                    {jobs.map(job =>
                        <div key={job.id} className="jobs">
                            <div className="jobs-empresa">
                                {job.logo}
                                {job.empresa}
                            </div>
                            <div className="jobs-tiempo">
                                {job.tiempo}
                            </div>
                            <div className="jobs-btn">
                                <Link to={`${job.id}`} className="ver-mas" >Ver más</Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default Jobs;