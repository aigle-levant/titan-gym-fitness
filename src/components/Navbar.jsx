// styles
import '../styles/components/_navbar.scss';
import { NavLink } from 'react-router';

export default function Navbar() {
    return (
        <nav id="nav-bar">
            <div className="nav-bar--logo-wrapper">
                <img src="../assets/icons/helmet.png" alt="." className="nav-bar--logo"/>
            </div>
            <div className="nav-bar--links-wrapper small">
                <ul>
                    <li className='links-wrapper--list-item'>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li className='links-wrapper--list-item'>
                        <NavLink to="/services">Services</NavLink>
                    </li>
                    <li className='links-wrapper--list-item'>
                        <NavLink to="/contact-us">Contact Us</NavLink>
                    </li>
                </ul>
            </div>
            <div className='nav-bar--btn-wrapper'>
                <button type='button' className='btn dark-mode'>
                    <img src="../assets/icons/night-mode.png" />
                </button>
            </div>
        </nav>
    )
}