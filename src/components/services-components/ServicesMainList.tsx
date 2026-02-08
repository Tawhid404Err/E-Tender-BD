"use client"

import { FiCheckCircle } from "react-icons/fi"

export default function ServicesMainList() {
    const services = [
        "LTM টেন্ডার ড্রপিং",
        "OTM, OSTEM, RFQ টেন্ডার ড্রপিং",
        "১০% রেট মিলানো",
        "টেন্ডার সিকিউরিটি হিসাব ও সাপ্তাহিক রিপোর্ট + SMS নোটিফিকেশন",
        "নতুন কোম্পানির ই-জিপি রেজিস্ট্রেশন",
        "কোম্পানির প্রোফাইল তৈরি",
        "NOA Accepting ও Time Extension",
        "ফাইল আপডেট ও সার্টিফিকেট e-experience এ যুক্ত করা",
    ]

    return (
        <section className="w-full">
            <div className="mx-auto py-10 lg:py-16">
                <div className="max-w-3xl">
                    <h2 className="text-gray-900">যা পাবেন</h2>
                    <p className="mt-2">
                        টেন্ডার সাবমিশন থেকে রিপোর্টিং পর্যন্ত প্রয়োজনীয় সব সার্ভিস।
                    </p>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {services.map((service) => (
                        <div
                            key={service}
                            className="flex items-start gap-3 rounded-xl border border-slate-200/70 bg-white/90 p-4 shadow-md"
                        >
                            <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                                <FiCheckCircle className="h-4 w-4" />
                            </span>
                            <p className="text-sm text-gray-700">{service}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
