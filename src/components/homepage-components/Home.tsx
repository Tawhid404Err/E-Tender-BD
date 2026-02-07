"use client"

import Hero from "./Hero";

export default function Home() {
    return (
        <div>
            <div className="container h-full mx-auto lg:px-10 px-4 bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50">
                <Hero />
            </div>
        </div>
    );
}
