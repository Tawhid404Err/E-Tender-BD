import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

export default function ForgetPass() {
    return (
        <section className="w-full">
            <div className="mx-auto py-10 lg:py-16">
                <div className="flex justify-center px-4">
                    <Card className="shadow-2xl w-full min-[515px]:w-[480px] border-0 bg-white/90 backdrop-blur-sm">
                        <CardHeader className="space-y-2">
                            <CardTitle className="text-xl font-bold text-[#4874c7]">
                                পাসওয়ার্ড ভুলে গেছেন?
                            </CardTitle>
                            <CardDescription className="text-sm">
                                আপনার রেজিস্টার্ড ইমেইল দিন, আমরা রিসেট লিংক পাঠিয়ে দেব
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

                                <div className="flex w-full justify-center">
                                    <Button
                                        type="submit"
                                        className="h-11 w-[70%] text-white bg-[#4874c7] hover:bg-[#3a5da8] hover:scale-102 transition-all duration-200"
                                    >
                                        রিসেট লিংক পাঠান
                                    </Button>
                                </div>

                                <div className="text-center pt-2">
                                    <p className="text-sm text-gray-600">
                                        লগইনে ফিরে যান?{" "}
                                        <Link to="/login" className="font-semibold underline text-[#4874c7] hover:underline">
                                            লগইন
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
