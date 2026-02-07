"use client"

import HelpDesk from "./HelpDesk";
import Hero from "./Hero";
import MobileApps from "./MobileApps";
import Statistics from "./Statistics";

export default function Home() {
    return (
        <div>
            <div className="container h-full mx-auto lg:px-10 px-4 ">
                <Hero />
                <Statistics />
                <HelpDesk />
                <MobileApps />
            </div>
        </div>
    );
}
