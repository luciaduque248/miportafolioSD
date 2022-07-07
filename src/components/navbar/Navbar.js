import { Link } from 'react-router-dom';
import '../navbar/Navbar.css';
import logo from '../../assets/img/logoSD.svg';

function Navbar() {
    return (
        <nav>
            <Link to="/miportafolioSD/" >
                <img src={logo} alt="logo" /></Link>


            <input type="checkbox" id="check"></input>
            <label for="check" class="checkbtn">
                <i class="fa-solid fa-bars"></i>
            </label>

            <ul>
                <li>
                    <Link to="/miportafolioSD/" className='item'>
                        <i className="fa-solid fa-house"></i> Inicio</Link>
                </li>
                <li>
                    <Link to="/jobs" className='item'>
                        <i className="fa-solid fa-briefcase"></i> Experiencia Laboral</Link>
                </li>
                <li>
                    <Link to="/skills" className='item'>
                        <i className="fa-solid fa-brain"></i> Habilidades</Link>
                </li>
                <li>
                    <Link to="/studies" className='item'>
                        <i className="fa-solid fa-book"></i> Estudios</Link>
                </li>
                <li>
                    <Link to="/about-me" className='item'>
                        <i className="fa-solid fa-circle-user"></i> Acerca de mi</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;