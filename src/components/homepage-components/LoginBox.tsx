"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Checkbox } from "../ui/checkbox"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

export default function LoginBox() {
    const [showPassword, setShowPassword] = useState(false)

    return (
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
                        <div className="relative">
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="h-11 pr-10"
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

                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="remember" />
                            <label htmlFor="remember" className="cursor-pointer">
                                Remember me
                            </label>
                        </div>
                        <Link to="/forget-password" className="font-medium text-[#4874c7] hover:underline">
                            Forget Password
                        </Link>
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
                            <Link to="/registration" className="font-semibold underline text-[#4874c7] hover:underline">
                                রেজিস্ট্রেশন করুন
                            </Link>
                        </p>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}
