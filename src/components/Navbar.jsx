// libraries
import { NavLink } from 'react-router-dom';
// styles
import '../styles/components/_navbar.scss';
// images
import Helmet from '../assets/icons/helmet.png';
import darkMode from '../assets/icons/night-mode.png';

export default function Navbar() {
    return (
        <nav id="nav-bar">
            <div className="logo-wrapper">
                <img src={Helmet} alt="." className="logo"/>
            </div>
            <div className="links-wrapper small">
                <ul>
                    <li className='list-item'>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li className='list-item'>
                        <NavLink to="/services">Services</NavLink>
                    </li>
                    <li className='list-item'>
                        <NavLink to="/contact-us">Contact Us</NavLink>
                    </li>
                </ul>
            </div>
            <div className='btn-wrapper'>
                <button type='button' className='btn dark-mode'>
                    <img src={darkMode} className='dark-mode-img'/>
                </button>
            </div>
        </nav>
    )
}