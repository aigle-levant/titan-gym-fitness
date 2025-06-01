// components
import HeroSection from "../components/services/HeroSection.jsx";
import Accordion from "../components/services/Accordion.jsx";
import Workout from "../components/services/Workout.jsx";
import SubscriptionList from '../components/home/SubscriptionList.jsx';
import Trainer from '../components/services/Trainer.jsx';

export default function Services() {
    return (
        <div id="services">
            <HeroSection/>
            <Trainer/>
            <Workout/>
            <SubscriptionList/>
            <Accordion/>
        </div>
    )
}