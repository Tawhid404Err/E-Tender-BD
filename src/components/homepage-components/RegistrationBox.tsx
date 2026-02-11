"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import PhoneInput from "../ui/phone-input"

const districts = [
    "বাগেরহাট", "বান্দরবান", "বরগুনা", "বরিশাল", "ভোলা", "বগুড়া", "ব্রাহ্মণবাড়িয়া",
    "চাঁদপুর", "চাঁপাইনবাবগঞ্জ", "চট্টগ্রাম", "চুয়াডাঙ্গা", "কুমিল্লা", "কক্সবাজার",
    "ঢাকা", "দিনাজপুর", "ফরিদপুর", "ফেনী", "গাইবান্ধা", "গাজীপুর", "গোপালগঞ্জ",
    "হবিগঞ্জ", "জামালপুর", "যশোর", "ঝালকাঠি", "ঝিনাইদহ", "জয়পুরহাট",
    "খাগড়াছড়ি", "খুলনা", "কিশোরগঞ্জ", "কুড়িগ্রাম", "কুষ্টিয়া", "লক্ষ্মীপুর",
    "লালমনিরহাট", "মাদারীপুর", "মাগুরা", "মানিকগঞ্জ", "মেহেরপুর", "মৌলভীবাজার",
    "মুন্সীগঞ্জ", "ময়মনসিংহ", "নওগাঁ", "নড়াইল", "নারায়ণগঞ্জ", "নরসিংদী",
    "নাটোর", "নেত্রকোণা", "নীলফামারী", "নোয়াখালী", "পাবনা", "পঞ্চগড়",
    "পটুয়াখালী", "পিরোজপুর", "রাজবাড়ী", "রাজশাহী", "রাঙ্গামাটি", "রংপুর",
    "সাতক্ষীরা", "শরীয়তপুর", "শেরপুর", "সিরাজগঞ্জ", "সুনামগঞ্জ", "সিলেট",
    "টাঙ্গাইল", "ঠাকুরগাঁও"
]

export default function RegistrationBox() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        fullName: "",
        district: "",
        presentAddress: "",
        contactNumber: "",
        whatsappNumber: "",
        email: "",
        password: "",
        userId: ""
    })

    const generateUserId = (phoneNumber: string) => {
        const digits = phoneNumber.replace(/\D/g, "")
        return digits.slice(-5) || ""
    }

    const handleContactNumberChange = (value: string) => {
        setFormData(prev => ({
            ...prev,
            contactNumber: value,
            userId: generateUserId(value)
        }))
    }

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Registration data:", formData)
    }

    return (
        <Card className="shadow-2xl w-full min-[515px]:w-[480px] lg:w-[700px] lg:mx-auto border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="space-y-2">
                <CardTitle className="text-xl font-bold text-[#4874c7]">
                    রেজিস্ট্রেশন করুন
                </CardTitle>
                <CardDescription className="text-sm">
                    আপনার অ্যাকাউন্ট তৈরি করুন এবং টেন্ডার ব্যবস্থাপনা শুরু করুন
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Desktop: 2-column grid, Mobile: single column */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {/* Full Name */}
                        <div className="space-y-2">
                            <Label htmlFor="fullName" className="text-sm font-medium">
                                পূর্ণ নাম <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="fullName"
                                type="text"
                                placeholder="আপনার পূর্ণ নাম লিখুন"
                                className="h-11"
                                value={formData.fullName}
                                onChange={(e) => handleInputChange("fullName", e.target.value)}
                                required
                            />
                        </div>

                        {/* District */}
                        <div className="space-y-2">
                            <Label htmlFor="district" className="text-sm font-medium">
                                জেলা (LTM টেন্ডার) <span className="text-red-500">*</span>
                            </Label>
                            <select
                                id="district"
                                className="w-full h-11 px-3 py-2 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                value={formData.district}
                                onChange={(e) => handleInputChange("district", e.target.value)}
                                required
                            >
                                <option value="">জেলা নির্বাচন করুন</option>
                                {districts.map((district) => (
                                    <option key={district} value={district}>
                                        {district}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Present Address */}
                        <div className="space-y-2 lg:col-span-2">
                            <Label htmlFor="presentAddress" className="text-sm font-medium">
                                বর্তমান ঠিকানা
                            </Label>
                            <Input
                                id="presentAddress"
                                type="text"
                                placeholder="আপনার বর্তমান ঠিকানা লিখুন"
                                className="h-11"
                                value={formData.presentAddress}
                                onChange={(e) => handleInputChange("presentAddress", e.target.value)}
                            />
                        </div>

                        {/* Active Contact Number */}
                        <div className="space-y-2">
                            <Label htmlFor="contactNumber" className="text-sm font-medium">
                                সক্রিয় মোবাইল নম্বর <span className="text-red-500">*</span>
                            </Label>
                            <PhoneInput
                                value={formData.contactNumber}
                                onChange={handleContactNumberChange}
                                placeholder="01XXXXXXXXX"
                                defaultCountry="BD"
                            />
                        </div>

                        {/* Active WhatsApp Number */}
                        <div className="space-y-2">
                            <Label htmlFor="whatsappNumber" className="text-sm font-medium">
                                সক্রিয় হোয়াটসঅ্যাপ নম্বর <span className="text-red-500">*</span>
                            </Label>
                            <PhoneInput
                                value={formData.whatsappNumber}
                                onChange={(value) => handleInputChange("whatsappNumber", value)}
                                placeholder="01XXXXXXXXX"
                                defaultCountry="BD"
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium">
                                ইমেইল
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="example@yourmail.com"
                                className="h-11"
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                            />
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-sm font-medium">
                                পাসওয়ার্ড <span className="text-red-500">*</span>
                            </Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="•••••••"
                                    className="h-11 pr-10"
                                    value={formData.password}
                                    onChange={(e) => handleInputChange("password", e.target.value)}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-4 w-4" />
                                    ) : (
                                        <Eye className="h-4 w-4" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* User ID (Auto-generated) */}
                        <div className="space-y-2">
                            <Label htmlFor="userId" className="text-sm font-medium">
                                ইউজার আইডি <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="userId"
                                type="text"
                                placeholder="ইউজার আইডি"
                                className="h-11 bg-gray-50"
                                value={formData.userId}
                                readOnly
                            />
                            
                        </div>
                    </div>

                    <div className="flex w-full justify-center">
                        <Button
                            type="submit"
                            className="h-11 w-[50%] text-white bg-[#4874c7] hover:bg-[#3a5da8] hover:scale-102 transition-all duration-200"
                        >
                            রেজিস্ট্রেশন করুন
                        </Button>
                    </div>

                    <div className="text-center pt-2">
                        <p className="text-sm text-gray-600">
                            ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}
                            <Link to="/login" className="font-semibold underline text-[#4874c7] hover:underline">
                                লগইন করুন
                            </Link>
                        </p>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}
