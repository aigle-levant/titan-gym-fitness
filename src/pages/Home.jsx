// libraries
import React from "react";
// components
import HeroSection from "../components/home/HeroSection.jsx";
import Quote from '../components/home/Quote.jsx';
import AnimatedSection from "../components/home/AnimatedSection.jsx";
import TrainersList from "../components/home/TrainersList.jsx";
import SubscriptionList from "../components/home/SubscriptionList.jsx";
import Testimonials from '../components/home/Testimonials.jsx';
import FinalCTA from '../components/home/FinalCTA.jsx';

export default function Home () {
    return (
        <div id="home">
            <HeroSection/>
            <Quote/>
            <AnimatedSection/>
            <TrainersList/>
            <SubscriptionList/>
            <Testimonials/>
            <FinalCTA/>
        </div>
    )
}