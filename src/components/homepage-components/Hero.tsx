"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Checkbox } from "../ui/checkbox"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

const slides = [
    {
        src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
        alt: "টেন্ডার রিপোর্ট ও বিশ্লেষণ",
    },
    {
        src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop",
        alt: "ব্যবসায়িক সহযোগিতা",
    },
    {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
        alt: "ডকুমেন্ট ও নিরাপত্তা যাচাই",
    },
]

export default function Hero() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [selectedIndex, setSelectedIndex] = useState(0)

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
    const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

    useEffect(() => {
        if (!emblaApi) return

        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
        onSelect()
        emblaApi.on("select", onSelect)
        emblaApi.on("reInit", onSelect)

        return () => {
            emblaApi.off("select", onSelect)
            emblaApi.off("reInit", onSelect)
        }
    }, [emblaApi])

    return (
        <section className="w-full">
            <div className="mx-auto py-10 lg:py-16">
                <div className="grid lg:grid-cols-3 gap-8  items-start">
                    {/* Left Side - Heading + Login Form */}
                    <div className="lg:col-span-1 space-y-6 mx-auto lg:flex-none lg:items-start">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                <span className="text-[#4874c7]">ইটেন্ডার বিডি</span>'তে স্বাগতম
                            </h1>
                            <p className="mt-3 text-base text-gray-600">
                                আপনার টেন্ডার ব্যবস্থাপনা এখন আরও সহজ, দ্রুত এবং কার্যকর
                            </p>
                        </div>

                        <Card className="shadow-2xl w-full  min-[515px]:w-[480px] lg:w-full border-0 bg-white/90 backdrop-blur-sm">
                            <CardHeader className="space-y-2">
                                <CardTitle className="text-xl font-bold text-[#4874c7]">
                                    লগইন করুন
                                </CardTitle>
                                <CardDescription className="text-sm">
                                    আপনার অ্যাকাউন্টে প্রবেশ করুন এবং টেন্ডার ব্যবস্থাপনা শুরু করুন
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-sm font-medium">
                                            ইমেইল
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="example@yourmail.com"
                                            className="h-11"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="password" className="text-sm font-medium">
                                            পাসওয়ার্ড
                                        </Label>
                                        <Input
                                            id="password"
                                            type="password"
                                            placeholder="••••••••"
                                            className="h-11"
                                        />
                                    </div>

                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="remember" />
                                            <label htmlFor="remember" className="cursor-pointer">
                                                Remember me
                                            </label>
                                        </div>
                                        <a href="#" className="font-medium text-[#4874c7] hover:underline">
                                            Forget Password
                                        </a>
                                    </div>

                                    <div className="flex w-full justify-center">
                                        <Button
                                            type="submit"
                                            className="h-11 w-[50%] text-white bg-[#4874c7] hover:bg-[#3a5da8] hover:scale-102 transition-all duration-200"
                                        >
                                            Login
                                        </Button>
                                    </div>

                                    <div className="text-center pt-2">
                                        <p className="text-sm text-gray-600">
                                            অ্যাকাউন্ট নেই?{" "}
                                            <a href="#" className="font-semibold underline text-[#4874c7] hover:underline">
                                                রেজিস্ট্রেশন করুন
                                            </a>
                                        </p>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Side - Image Gallery Placeholder */}
                    <div className="lg:col-span-2 h-full">
                        <div className="rounded-2xl overflow-hidden shadow-2xl bg-white border">
                            <div className="relative">
                                <div className="overflow-hidden" ref={emblaRef}>
                                    <div className="flex">
                                        {slides.map((slide, index) => (
                                            <div key={slide.src} className="flex-[0_0_100%] min-w-0">
                                                <div className="aspect-16/10 bg-gray-100">
                                                    <img
                                                        src={slide.src}
                                                        alt={slide.alt}
                                                        className="h-full w-full object-cover"
                                                        loading={index === 0 ? "eager" : "lazy"}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={scrollPrev}
                                    aria-label="Previous slide"
                                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 text-[#4874c7] shadow-md hover:bg-white transition p-2"
                                >
                                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <button
                                    type="button"
                                    onClick={scrollNext}
                                    aria-label="Next slide"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 text-[#4874c7] shadow-md hover:bg-white transition p-2"
                                >
                                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>

                                <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
                                    {slides.map((_, index) => (
                                        <button
                                            key={`dot-${index}`}
                                            type="button"
                                            aria-label={`Go to slide ${index + 1}`}
                                            onClick={() => scrollTo(index)}
                                            className={`h-2.5 w-2.5 rounded-full transition ${index === selectedIndex
                                                ? "bg-[#4874c7] shadow"
                                                : "bg-white/70 hover:bg-white"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
