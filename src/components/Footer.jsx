//styles
import '../styles/components/_footer.scss';
import { NavLink } from 'react-router';

export default function Footer() {
    return (
        <footer id='footer' className='flex'>
            <div className='footer-links'>
                <ul>
                    <li className='footer-links--list-item'>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li className='footer-links--list-item'>
                        <NavLink to="/services">Services</NavLink>
                    </li>
                    <li className='footer-links--list-item'>
                        <NavLink to="/contact-us">Contact Us</NavLink>
                    </li>
                </ul>
            </div>
            <div className='footer-credits'>
                <p className='small'>
                    Made by <a href='https://www.linkedin.com/in/prajanya-subramanian/'>
                    Aigle</a>.
                </p>
                <p className='small'>
                    Check out my <a href='https://github.com/aigle-levant'>
                    GitHub</a>.
                </p>
            </div>
        </footer>
    )
}