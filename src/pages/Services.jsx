// components
import HeroSection from "../components/services/HeroSection.jsx";
import Workout from "../components/services/Workout.jsx";
import SubscriptionList from "../components/home/SubscriptionList.jsx";
import Trainer from "../components/services/Trainer.jsx";

export default function Services() {
  return (
    <div id="services" style={{ textAlign: "center" }}>
      <HeroSection />
      <Trainer />
      <Workout />
      <SubscriptionList />
    </div>
  );
}
