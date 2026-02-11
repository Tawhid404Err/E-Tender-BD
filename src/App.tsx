import { Routes, Route } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Home from './components/homepage-components/Home'
import AboutUs from './components/about-us-components/AboutUs'
import ForgetPass from './components/forgetPass'
import Login from './components/Login'
import Registration from './components/Registration'
import Services from './pages/Services'
import ContactUs from './pages/ContactUs'
import HowItWorks from './pages/HowItWorks'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />
      <main className="flex-1 bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/forget-password" element={<ForgetPass />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
