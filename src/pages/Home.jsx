// libraries
import React from "react";
// components
import HeroSection from "../components/home/HeroSection.jsx";
import Quote from '../components/home/Quote.jsx';
import AnimatedSection from "../components/home/AnimatedSection.jsx";
import TrainersList from "../components/home/TrainersList.jsx";
import SubscriptionList from "../components/home/SubscriptionList.jsx";

export default function Home () {
    return (
        <div id="home">
            <HeroSection/>
            <Quote/>
            <AnimatedSection/>
            <TrainersList/>
            <SubscriptionList/>
        </div>
    )
}