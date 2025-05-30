// images
import image from '../../assets/img/about-4.jpg';

export default function HeroSection() {
    return (
        <div className='about-hero'>
            <h1 className='huge'>Who we are</h1>
            <img src={image} alt="." className='cover-img'/>
        </div>
    )
}