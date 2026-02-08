import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'

const Services = () => {
  const mainServices = [
    'LTM টেন্ডার ড্রপিং',
    'OTM,OSTEM,RFQ টেন্ডার ড্রপিং',
    '10% রেট মিলানো।',
    'টেন্ডার সিকিউরিটি টাকা হিসাব প্রদান। এর ফলে আপনি প্রতি সপ্তাহে একটি প্রতিবেদন পাবেন যাহাতে কোন ডিপার্টমেন্টে কয়টি টেন্ডারের সিকিউরিটি লটারি হবার পরে আটকে পড়ে আছে। এবং যে টেন্ডার আইডি ডিপার্টমেন্ট থেকে ছাড়া হবে তার তৎক্ষণাৎ এসএমএস এর মাধ্যমে আপনাকে জানানো হবে ব্যাংকের অবগতি করার জন্য।',
    'নতুন কোম্পানির ই-জিপি রেজিট্রেশন',
    'কোম্পানির প্রোফাইল তৈরী করা',
    'NOA accepting, time extension',
    'শুধুমাত্র টেন্ডার ড্রপিং করাই ইজিপি একাউন্টের কাজ শেষ হয়ে যায় না। প্রতিনিয়ত ফাইল আপডেট রাখা, টেন্ডার গুলো সার্টিফিকেট e experience অংশে অন্তর্ভুক্ত করা।',
    'Analysis of various data sheet',
  ]

  const additionalFeatures = [
    'আমাদের এই কাজগুলো পাওয়ার বিয়াই এর মাধ্যমে হয়ে থাকে।',
    'ফলে আপনি স্বয়ংক্রিয়ভাবে লোনে টাকা জমা দিলে কি পরিমান ব্যাংক লোন হচ্ছে তা একটি স্বচ্ছ ধারণা পাওয়া।',
    'টেন্ডার ড্রপিং এর জন্য ব্যাংকিং কার্যক্রম এর শেষ সময় মনে করিয়ে দেওয়া।',
    'লটারি ফলাফল অবগত করা।',
  ]

  const uniqueServices = [
    { number: '১', text: 'ইজিপি একাউন্ট ওপেন' },
    { number: '২', text: 'ইজিপি ট্রেনিং' },
    { number: '৩', text: 'LTM,OTM,OSTETM,RFQ সহ ম্যানুয়াল টেন্ডার সাবমিশন' },
    { number: '৪', text: 'টেন্ডারার ডাটাবেজ পূরন' },
    { number: '৫', text: 'বিভিন্ন অধিদপ্তরের তালিকাভুক্তি লাইসেন্স যেমন, LGED,PWD,EED,RHD,ABC,FOOD,BWDB,BSCIC ইত্যাদি।' },
    { number: '৬', text: 'নতুন ট্রেড লাইসেন্স, ভ্যাট/BIN, টিন সার্টিফিকেট/TIN রেজিষ্ট্রেশন' },
    { number: '৭', text: 'লিমিটেড/পার্টনারশিপ কোম্পানি নিবন্ধন' },
    { number: '৮', text: 'আই আর সি/IRC, ই আর সি/ERC' },
    { number: '৯', text: 'বিভিন্ন অ্যাসোসিয়েশনের মেম্বারশিপ' },
    { number: '১০', text: 'উদ্যেক্তা প্রশিক্ষণ' },
    { number: '১১', text: 'কোম্পানি প্রোফাইল/বিজনেস প্রোফাইল তৈরি' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                সেবা সমুহ
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              আমরা প্রদান করি সম্পূর্ণ ই-টেন্ডার ব্যবস্থাপনা সেবা
            </p>
          </div>

          {/* Main Services */}
          <div className="mb-16">
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  যা পাবেন
                </CardTitle>
                <CardDescription className="text-base">
                  আমাদের প্রধান সেবা সমূহ যা আপনার ব্যবসাকে এগিয়ে নিয়ে যাবে
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {mainServices.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg hover:bg-blue-50/50 transition-colors group"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Check className="w-4 h-4 text-white" strokeWidth={3} />
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{service}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Features */}
          <div className="mb-16">
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  অতিরিক্ত সুবিধা
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {additionalFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg hover:bg-indigo-50/50 transition-colors group"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Check className="w-4 h-4 text-white" strokeWidth={3} />
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Unique Services */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                আমাদের অনন্য সেবা সমুহ
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {uniqueServices.map((service) => (
                <Card
                  key={service.number}
                  className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-105"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {service.number}
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed pt-2">{service.text}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Final Note */}
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-[#4874c7] to-[#3a5da8]">
            <CardContent className="p-8 text-center">
              <p className="text-xl md:text-2xl font-bold text-white">
                ই-জিপি সকল কাজ করা হয়
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default Services
