// images
import heroOne from '../../assets/img/hero-1.jpg';
import heroTwo from '../../assets/img/hero-2.jpg';
import heroThree from '../../assets/img/hero-3.jpg';


export default function HeroSection() {
    return (
        <div id='hero'>
            <div className="text-content">
                <h1 className="huge">
                    Unleash your inner titan
                </h1>
                <p className="medium">
                    Train with Titan Fitness.
                </p>
                <button className="btn services-btn">
                    Go to services
                </button>
            </div>
            <div className="img-content">
                <div className="img-content-left">
                    <img src={heroOne}/>
                </div>
                <div className="img-content-right">
                    <img src={heroTwo}/>
                    <img src={heroThree}/>
                </div>
            </div>
        </div>
    );
}
