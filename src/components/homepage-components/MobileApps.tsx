"use client"

import appQr from "@/assets/app-qr.svg"
import appleIcon from "@/assets/apple-icon.svg"
import iphoneFrame from "@/assets/iphone-frame.png"
import playstoreIcon from "@/assets/playstore-icon.svg"
import { Link } from "react-router-dom"

export default function MobileApps() {
    return (
        <div className="w-full">
            <div className="mx-auto py-10 lg:py-16">
                <div>
                    <h1 className="text-4xl max-w-6xl mx-auto text-center lg:text-5xl mb-8 font-bold text-gray-900 leading-tight">
                        {`আমাদের ইটেন্ডার বিডি আপ্পসে আপনার টেন্ডার ব্যবস্থাপনা হবে সহজ, দ্রুত এবং কার্যকর`}
                    </h1>
                </div>
                <div className="flex justify-center mb-8">
                    <div className="bg-white p-2 rounded-md border border-[#4874C7]">
                        <img
                            src={appQr}
                            alt="Mobile Apps"
                            className="h-20 w-full max-w-md"
                            loading="lazy"
                        />
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4">
                    <Link
                        to="/#appStore"
                        className="flex w-[190px] items-center gap-3 rounded-full bg-[#111111] px-5 py-2.5 text-white shadow-md"
                        aria-label="Download on the App Store"
                    >
                        <img src={appleIcon} alt="" className="h-7 w-7" />
                        <div className="leading-tight">
                            <p className="text-[11px] uppercase tracking-wide text-white/80">
                                Download on the
                            </p>
                            <p className="text-base font-semibold">App Store</p>
                        </div>
                    </Link>
                    <Link
                        to="/#playStore"
                        className="flex w-[190px] items-center gap-3 rounded-full bg-[#111111] px-5 py-2.5 text-white shadow-md"
                        aria-label="Get it on Google Play"
                    >
                        <img src={playstoreIcon} alt="" className="h-7 w-7" />
                        <div className="leading-tight">
                            <p className="text-[11px] uppercase tracking-wide text-white/80">
                                Get it on
                            </p>
                            <p className="text-base font-semibold">Google Play</p>
                        </div>
                    </Link>
                </div>

                {/* Phone frames (desktop) */}
                <div className="mt-12 hidden  lg:block">
                    <div className="relative mx-auto h-[360px] lg:h-[550px] max-w-4xl">
                        <img
                            src={iphoneFrame}
                            alt="Mobile app preview"
                            className="absolute left-32 bottom-0 w-[24%] -rotate-6 origin-bottom-left transform-gpu drop-shadow-2xl"
                            loading="lazy"
                        />
                        <img
                            src={iphoneFrame}
                            alt="Mobile app preview"
                            className="absolute left-1/2 z-10 bottom-0 w-[30%] -translate-x-1/2 transform-gpu drop-shadow-2xl"
                            loading="lazy"
                        />
                        <img
                            src={iphoneFrame}
                            alt="Mobile app preview"
                            className="absolute right-32 bottom-0 w-[24%] rotate-6 origin-bottom-right transform-gpu drop-shadow-2xl"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Phone frames (mobile) */}
                <div className="mt-10 lg:hidden">
                    <div className="relative mx-auto h-[380px] max-w-sm">
                        <img
                            src={iphoneFrame}
                            alt="Mobile app preview"
                            className="absolute left-0 bottom-0 w-[38%] -rotate-6 origin-bottom-left transform-gpu drop-shadow-xl"
                            loading="lazy"
                        />
                        <img
                            src={iphoneFrame}
                            alt="Mobile app preview"
                            className="absolute left-1/2 z-10 bottom-0 w-[48%] -translate-x-1/2 transform-gpu drop-shadow-xl"
                            loading="lazy"
                        />
                        <img
                            src={iphoneFrame}
                            alt="Mobile app preview"
                            className="absolute right-0 bottom-0 w-[38%] rotate-6 origin-bottom-right transform-gpu drop-shadow-xl"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
