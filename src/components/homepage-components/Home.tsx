"use client"

import HelpDesk from "./HelpDesk";
import Hero from "./Hero";
import MobileApps from "./MobileApps";
import Statistics from "./Statistics";
import WhyChooseUs from "./WhyChooseUs";

export default function Home() {
    return (
        <div>
            <div className="container h-full mx-auto lg:px-10 px-4 ">
                <Hero />
                <Statistics />
                <WhyChooseUs />
                <HelpDesk />
                <MobileApps />
            </div>
        </div>
    );
}
