import React from "react";

const modules = import.meta.glob('../components/home/*.jsx');

for (const path in modules) {modules[path]().then((mod) => {console.log(mod.default)})}
// components
// default -> navbar, footer
import Default from '../layouts/Default.jsx';

export default function Home () {
    return (
        <div>
            <Loader/>
            <Default>
                <HeroSection/>
                <AnimatedSection/>
                <TrainersList/>
                <SubscriptionList/>
                <Testimonials/>
            </Default>
        </div>
    )
}