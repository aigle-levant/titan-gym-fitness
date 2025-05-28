// libraries
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// styles
import '../styles/components/_navbar.scss';
// images
import Helmet from '../assets/icons/helmet.png';
// import darkMode from '../assets/icons/night-mode.png';

export default function Navbar() {
    const [isOpen, setNavbar] = useState(false);
    return (
        <nav id="nav-bar">
            <div className="logo-wrapper">
                <NavLink to='/'>
                <img src={Helmet} alt="." className="logo"/></NavLink>
            </div>
            <button
                className='btn hamburger-btn'
                onClick={() => setNavbar(!isOpen)}
            >
                <FontAwesomeIcon icon={faBars} />
            </button>
            <div className={`links-wrapper small ${isOpen ? "show" : "hide"}`}>
                <ul>
                    <li className='list-item small'>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li className='list-item small'>
                        <NavLink to="/services">Services</NavLink>
                    </li>
                    <li className='list-item small'>
                        <NavLink to="/contact-us">Contact Us</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

{/* <div className='btn-wrapper'>
                <button type='button' className='btn dark-mode'>
                    <img src={darkMode} className='dark-mode-img'/>
                </button>
            </div> */}