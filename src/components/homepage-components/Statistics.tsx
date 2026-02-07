"use client"

export default function Statistics() {
    const today = new Intl.DateTimeFormat("bn-BD", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    }).format(new Date())

    return (
        <div className="w-full">
            <div className="mx-auto py-10 lg:py-16">
                <div>
                    <h1 className="text-4xl text-center lg:text-5xl mb-8 font-bold text-gray-900 leading-tight">
                        {`আজকের স্ট্যাটিসটিকস [${today}]`}
                    </h1>
                </div>
                <div className="grid lg:grid-cols-2 max-w-6xl mx-auto gap-8">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                        <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-2">
                            {`নতুন টেন্ডার`}
                        </h2>
                        <div className="mt-4 rounded-xl border border-slate-200/70 bg-white/70">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead className="hidden sm:table-header-group bg-slate-50/80 text-slate-600">
                                        <tr>
                                            <th className="px-4 py-3 text-left font-semibold">টেন্ডার আইডি</th>
                                            <th className="px-4 py-3 text-left font-semibold">ডিপার্টমেন্ট</th>
                                            <th className="px-4 py-3 text-left font-semibold">বাজেট</th>
                                            <th className="px-4 py-3 text-left font-semibold">শেষ সময়</th>
                                        </tr>
                                    </thead>
                                    <tbody className="block sm:table-row-group sm:divide-y sm:divide-slate-100">
                                        <tr className="block sm:table-row border border-slate-100 sm:border-0 rounded-lg mb-3 last:mb-0 bg-white/80 sm:bg-transparent">
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 font-medium text-slate-900 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="টেন্ডার আইডি"
                                            >
                                                EGP-2401
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="ডিপার্টমেন্ট"
                                            >
                                                LGED
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="বাজেট"
                                            >
                                                ৳ ৪.৮০ কোটি
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="শেষ সময়"
                                            >
                                                ১২ ফেব্রুয়ারি
                                            </td>
                                        </tr>
                                        <tr className="block sm:table-row border border-slate-100 sm:border-0 rounded-lg mb-3 last:mb-0 bg-white/80 sm:bg-transparent">
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 font-medium text-slate-900 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="টেন্ডার আইডি"
                                            >
                                                EGP-2402
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="ডিপার্টমেন্ট"
                                            >
                                                PWD
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="বাজেট"
                                            >
                                                ৳ ২.১০ কোটি
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="শেষ সময়"
                                            >
                                                ১৩ ফেব্রুয়ারি
                                            </td>
                                        </tr>
                                        <tr className="block sm:table-row border border-slate-100 sm:border-0 rounded-lg last:mb-0 bg-white/80 sm:bg-transparent">
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 font-medium text-slate-900 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="টেন্ডার আইডি"
                                            >
                                                EGP-2403
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="ডিপার্টমেন্ট"
                                            >
                                                RHD
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="বাজেট"
                                            >
                                                ৳ ৬.৫০ কোটি
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="শেষ সময়"
                                            >
                                                ১৫ ফেব্রুয়ারি
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                        <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-2">
                            {`টোটাল লাইভ টেন্ডার`}
                        </h2>
                        <div className="mt-4 rounded-xl border border-slate-200/70 bg-white/70">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead className="hidden sm:table-header-group bg-slate-50/80 text-slate-600">
                                        <tr>
                                            <th className="px-4 py-3 text-left font-semibold">শ্রেণি</th>
                                            <th className="px-4 py-3 text-left font-semibold">পরিমাণ</th>
                                            <th className="px-4 py-3 text-left font-semibold">সর্বশেষ আপডেট</th>
                                            <th className="px-4 py-3 text-left font-semibold">স্ট্যাটাস</th>
                                        </tr>
                                    </thead>
                                    <tbody className="block sm:table-row-group sm:divide-y sm:divide-slate-100">
                                        <tr className="block sm:table-row border border-slate-100 sm:border-0 rounded-lg mb-3 last:mb-0 bg-white/80 sm:bg-transparent">
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 font-medium text-slate-900 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="শ্রেণি"
                                            >
                                                LTM
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="পরিমাণ"
                                            >
                                                ৩২৮ টি
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="সর্বশেষ আপডেট"
                                            >
                                                আজ ১০:৩০ AM
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="স্ট্যাটাস"
                                            >
                                                <span className="rounded-full bg-emerald-50 text-emerald-700 px-2.5 py-1 text-xs font-semibold">
                                                    Active
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="block sm:table-row border border-slate-100 sm:border-0 rounded-lg mb-3 last:mb-0 bg-white/80 sm:bg-transparent">
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 font-medium text-slate-900 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="শ্রেণি"
                                            >
                                                OTM
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="পরিমাণ"
                                            >
                                                ১৪৭ টি
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="সর্বশেষ আপডেট"
                                            >
                                                আজ ১১:১০ AM
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="স্ট্যাটাস"
                                            >
                                                <span className="rounded-full bg-emerald-50 text-emerald-700 px-2.5 py-1 text-xs font-semibold">
                                                    Active
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="block sm:table-row border border-slate-100 sm:border-0 rounded-lg last:mb-0 bg-white/80 sm:bg-transparent">
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 font-medium text-slate-900 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="শ্রেণি"
                                            >
                                                RFQ
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="পরিমাণ"
                                            >
                                                ৬৪ টি
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="সর্বশেষ আপডেট"
                                            >
                                                আজ ১২:০০ PM
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="স্ট্যাটাস"
                                            >
                                                <span className="rounded-full bg-emerald-50 text-emerald-700 px-2.5 py-1 text-xs font-semibold">
                                                    Active
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                        <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-2">
                            {`শুদ্ধিপত্র`}
                        </h2>
                        <div className="mt-4 rounded-xl border border-slate-200/70 bg-white/70">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead className="hidden sm:table-header-group bg-slate-50/80 text-slate-600">
                                        <tr>
                                            <th className="px-4 py-3 text-left font-semibold">নোটিশ আইডি</th>
                                            <th className="px-4 py-3 text-left font-semibold">টেন্ডার</th>
                                            <th className="px-4 py-3 text-left font-semibold">আপডেট</th>
                                            <th className="px-4 py-3 text-left font-semibold">তারিখ</th>
                                        </tr>
                                    </thead>
                                    <tbody className="block sm:table-row-group sm:divide-y sm:divide-slate-100">
                                        <tr className="block sm:table-row border border-slate-100 sm:border-0 rounded-lg mb-3 last:mb-0 bg-white/80 sm:bg-transparent">
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 font-medium text-slate-900 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="নোটিশ আইডি"
                                            >
                                                AM-031
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="টেন্ডার"
                                            >
                                                EGP-2294
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="আপডেট"
                                            >
                                                বোঝাপড়া সংশোধন
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="তারিখ"
                                            >
                                                ০৬ ফেব্রুয়ারি
                                            </td>
                                        </tr>
                                        <tr className="block sm:table-row border border-slate-100 sm:border-0 rounded-lg mb-3 last:mb-0 bg-white/80 sm:bg-transparent">
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 font-medium text-slate-900 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="নোটিশ আইডি"
                                            >
                                                AM-032
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="টেন্ডার"
                                            >
                                                EGP-2301
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="আপডেট"
                                            >
                                                ডেডলাইন পরিবর্তন
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="তারিখ"
                                            >
                                                ০৭ ফেব্রুয়ারি
                                            </td>
                                        </tr>
                                        <tr className="block sm:table-row border border-slate-100 sm:border-0 rounded-lg last:mb-0 bg-white/80 sm:bg-transparent">
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 font-medium text-slate-900 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="নোটিশ আইডি"
                                            >
                                                AM-033
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="টেন্ডার"
                                            >
                                                EGP-2310
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="আপডেট"
                                            >
                                                ডকুমেন্ট আপডেট
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="তারিখ"
                                            >
                                                ০৭ ফেব্রুয়ারি
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                        <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-2">
                            {`অফলাইন টেন্ডার`}
                        </h2>
                        <div className="mt-4 rounded-xl border border-slate-200/70 bg-white/70">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead className="hidden sm:table-header-group bg-slate-50/80 text-slate-600">
                                        <tr>
                                            <th className="px-4 py-3 text-left font-semibold">লোকেশন</th>
                                            <th className="px-4 py-3 text-left font-semibold">টেন্ডার ফি</th>
                                            <th className="px-4 py-3 text-left font-semibold">জমা সময়</th>
                                            <th className="px-4 py-3 text-left font-semibold">স্ট্যাটাস</th>
                                        </tr>
                                    </thead>
                                    <tbody className="block sm:table-row-group sm:divide-y sm:divide-slate-100">
                                        <tr className="block sm:table-row border border-slate-100 sm:border-0 rounded-lg mb-3 last:mb-0 bg-white/80 sm:bg-transparent">
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 font-medium text-slate-900 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="লোকেশন"
                                            >
                                                রাজশাহী
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="টেন্ডার ফি"
                                            >
                                                ৳ ৫,০০০
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="জমা সময়"
                                            >
                                                ১৪ ফেব্রুয়ারি
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="স্ট্যাটাস"
                                            >
                                                <span className="rounded-full bg-rose-50 text-rose-700 px-2.5 py-1 text-xs font-semibold">
                                                    Closed
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="block sm:table-row border border-slate-100 sm:border-0 rounded-lg mb-3 last:mb-0 bg-white/80 sm:bg-transparent">
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 font-medium text-slate-900 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="লোকেশন"
                                            >
                                                খুলনা
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="টেন্ডার ফি"
                                            >
                                                ৳ ৩,২০০
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="জমা সময়"
                                            >
                                                ১২ ফেব্রুয়ারি
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="স্ট্যাটাস"
                                            >
                                                <span className="rounded-full bg-amber-50 text-amber-700 px-2.5 py-1 text-xs font-semibold">
                                                    Closing
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="block sm:table-row border border-slate-100 sm:border-0 rounded-lg last:mb-0 bg-white/80 sm:bg-transparent">
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 font-medium text-slate-900 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="লোকেশন"
                                            >
                                                ঢাকা
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="টেন্ডার ফি"
                                            >
                                                ৳ ৭,০০০
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="জমা সময়"
                                            >
                                                ১০ ফেব্রুয়ারি
                                            </td>
                                            <td
                                                className="block sm:table-cell px-4 py-2 sm:py-3 text-slate-600 before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-slate-500 before:mb-1 sm:before:content-none"
                                                data-label="স্ট্যাটাস"
                                            >
                                                <span className="rounded-full bg-rose-50 text-rose-700 px-2.5 py-1 text-xs font-semibold">
                                                    Closed
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
