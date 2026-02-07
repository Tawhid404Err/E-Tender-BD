"use client"

import { FiHelpCircle } from "react-icons/fi"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export default function HelpDesk() {
    const helpCards = [
        {
            title: "লগিন জনিত সমস্যা?",
            description: "লগিন করতে গিয়ে কোন ধরনের সমস্যায় পড়ছেন?",
            action: "সাহায্য নিন",
        },
        {
            title: "রেজিস্ট্রেশন জনিত সমস্যা?",
            description: "রেজিস্ট্রেশন করতে গিয়ে কোন সমস্যায় পড়ছেন?",
            action: "সাহায্য নিন",
        },
        {
            title: "রেজিস্ট্রেশনের ধাপ বুঝছেন না?",
            description: "রেজিস্ট্রেশন করতে গিয়ে ধাপ গুলোতে কনফিউশন?",
            action: "সাহায্য নিন",
        },
        {
            title: "রেজিস্ট্রেশনের ফরম্যাট বুঝছেন না?",
            description: "রেজিস্ট্রেশনের সময় ফিল্ড লিখতে সমস্যা হচ্ছে?",
            action: "সাহায্য নিন",
        },
        {
            title: "ড্যাশবোর্ড জনিত সমস্যা?",
            description: "ড্যাশবোর্ডে কিছু বুঝতে সমস্যা বা কাজ করছে না?",
            action: "সাহায্য নিন",
        },
        {
            title: "হেল্প চ্যাট ওপেন করতে চান?",
            description: "সাপোর্ট টিমের সাথে লাইভ চ্যাট শুরু করুন",
            action: "চ্যাট করুন",
        },
    ]

    return (
        <div className="w-full">
            <div className="mx-auto py-10 lg:py-16">
                <div>
                    <h1 className="text-4xl max-w-4xl mx-auto text-center lg:text-5xl mb-8 font-bold text-gray-900 leading-tight">
                        {`কোথাও আঁটকে গেছেন? আমাদের গ্রাহক সেবা থেকে সাহায্য নিন!`}
                    </h1>
                </div>
                <div className="max-w-3xl mx-auto mb-10">
                    <form className="group flex flex-col sm:flex-row items-stretch gap-3 sm:gap-0">
                        <Input
                            type="text"
                            placeholder="আপনার সমস্যাটি এখানে লিখুন....."
                            className="h-12 sm:h-14 rounded-full sm:rounded-r-none bg-white/90 backdrop-blur border border-slate-200/70 px-5 text-base focus-visible:ring-2 focus-visible:ring-[#4874c7]/30 focus-visible:ring-offset-0 transition-all duration-200"
                        />
                        <Button
                            type="submit"
                            className="h-12 sm:h-14 rounded-full sm:rounded-l-none px-8 text-white bg-[#4874c7] hover:bg-[#3a5da8] hover:text-lg transition-all duration-200"
                        >
                            সাহায্য নিন
                        </Button>
                    </form>
                </div>

                <div className="grid lg:grid-cols-2 max-w-6xl mx-auto gap-6 lg:gap-8">
                    {helpCards.map((card) => (
                        <div
                            key={card.title}
                            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200/70 hover:shadow-2xl transition-all duration-200"
                        >
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 rounded-full bg-[#4874c7]/10 text-[#4874c7] flex items-center justify-center">
                                    <FiHelpCircle className="h-5 w-5" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
                                    <p className="text-sm text-slate-600 mt-1">{card.description}</p>
                                </div>
                            </div>

                            <div className="mt-4 flex justify-end">
                                <Button
                                    type="button"
                                    className="h-10 rounded-full px-6 text-white bg-[#4874c7] hover:bg-[#3a5da8] hover:text-base transition-all duration-200"
                                >
                                    {card.action}
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
