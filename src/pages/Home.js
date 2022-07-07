import Navbar from "../components/navbar/Navbar";
import '../components/Home.css';
import '../components/responsiveHM.css';
import Footer from "../components/footer/footer";

function Home() {
    return (
        <div>
            <Navbar />
            <div className="section">
                <div className="text1">
                    <h1>Diseñadora</h1>
                    <h2>Hola, mi nombre es</h2>
                    <h2 className="line2 line2-sara">Sara Duque</h2>
                </div>
                <div className="text2">
                    <h1>Frontend</h1>
                    <h2>Desarrolladora quien se</h2>
                    <h2 className="line2 line-frontend2">enfoca en codigo limpio</h2>
                    <h2 className="line3 line-frontend3">y eficiente</h2>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;