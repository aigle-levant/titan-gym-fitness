// images
import heroOne from '../../assets/img/hero-1';
import heroTwo from '../../assets/img/hero-2';
import heroThree from '../../assets/img/hero-3';
// components
import { RegButton } from '../Button';
import { NavLink } from 'react-router';

export default function HeroSection() {
    return (
        <div className="hero">
            <div className="hero-img">
                <div className="hero-img--left">
                    <img src={heroOne}/>
                </div>
                <div className="hero-img--right flex flex-col">
                    <img src={heroTwo}/>
                    <img src={heroThree}/>
                </div>
            </div>
            <div className="hero-text">
                <h1 className="huge">Lorem Ipsum</h1>
                <p className="medium">
                    lorem ipsum dolor sit amet lorem ipsum dolor sit amet.
                </p>
                <RegButton>
                    <NavLink to='/services'>Go to services</NavLink>
                </RegButton>
            </div>
        </div>
    )
}
