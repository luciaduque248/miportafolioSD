import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbar";
import calEs from "../assets/img/Circulos 4.png";
import calEn from "../assets/img/Circulos 5.png";
import procreate from "../assets/img/procreate.png";
import figma from "../assets/img/figma.png";
import equipo from "../assets/img/team.svg";
import conversation from "../assets/img/conversation.svg";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import js from "../assets/img/javascript.png";
import python from "../assets/img/py.png";
import java from "../assets/img/java.png";
import sql from "../assets/img/mysql.png";
import bootstrap from "../assets/img/boostrap.png";
import react from "../assets/img/react.png";

function Skills() {
    return (
        <div>
            <Navbar />
            <div className="contenido-other">
                <h1>Conocimientos / Habilidades</h1>
                <div className="habilidades">
                    <div className="fortalezas">
                        <div className="titulo">
                            <h1>Fortalezas</h1>
                        </div>
                        <div className="points">
                            <ul>
                                <li>Innovadora</li>
                                <li>Liderazgo</li>
                                <li>Trabajo en equipo</li>
                                <li>Enfrentar desafios</li>
                                <li>Gestión del tiempo</li>
                                <li>Negociación</li>
                            </ul>
                            <ul>
                                <li>Capacidad de análisis</li>
                                <li>Responsable</li>
                                <li>Creatividad</li>
                                <li>Perseverancia</li>
                                <li>Orientación al cambio</li>
                                <li>Orientación por resultados</li>
                            </ul>
                        </div>
                        <img src={equipo} alt="equipo" />
                    </div>

                    <div className="idiomas">
                        <div className="titulo">
                            <h1>Idiomas</h1>
                        </div>
                        <div className="info">
                            <p>Español <img src={calEs} alt="calificacion-español" /></p>
                            <p>Ingles  <img src={calEn} alt="calificacion-ingles" className="english" /></p>
                        </div>
                        <img src={conversation} alt="conversacion" />
                    </div>

                    <div className="aplicaciones">
                        <div className="titulo">
                            <h1>Habilidades</h1>
                        </div>
                        <div className="info">
                            <div className="design">
                                <h3>Diseño</h3>
                                <div className="apps-design">
                                    <img src={procreate} alt="procreate" />
                                    <img src={figma} alt="figma" />
                                </div>
                            </div>

                            <div className="info-pg">
                                <h3>Programación</h3>
                                <div className="apps-pg">
                                    <div className="app-pg-line1">
                                        <img src={html} alt="html" className="img-html" />
                                        <img src={css} alt="css" className="img-css" />
                                        <img src={js} alt="js" className="img-js" />
                                    </div>

                                    <div className="app-pg-line2">
                                        <img src={python} alt="python" className="img-py" />
                                        <img src={java} alt="java" className="img-java" id="2"/>
                                        <img src={sql} alt="sql" className="img-sql" />
                                    </div>

                                    <div className="app-pg-line3">
                                        <img src={bootstrap} alt="bootstrap" className="img-bootstrap" />
                                        <img src={react} alt="react" className="img-react" />
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Skills;