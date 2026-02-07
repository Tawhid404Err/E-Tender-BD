import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            স্বাগতম
          </span>
          <br />
          <span className="text-gray-900">ই-টেন্ডার বিডি তে</span>
        </h1>
        <p className="text-xl text-gray-600">
          আপনার টেন্ডার ব্যবস্থাপনা এখন আরও সহজ, দ্রুত এবং কার্যকর
        </p>
      </div>
    </div>
  )
}

export default Home
