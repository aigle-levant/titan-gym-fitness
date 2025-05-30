// styles
import '../styles/pages/_about.scss';
// components
import HeroSection from '../components/about/HeroSection.jsx';
import Body from '../components/about/Body.jsx';
import Metrics from '../components/about/Metrics.jsx';
import FinalCTA from '../components/about/FinalCTA.jsx';

export default function About() {
    return (
        <div id="about">
            <HeroSection/>
            <Body/>
            <Metrics/>
            <FinalCTA/>
        </div>
    )
}