import './App.css'
import Navbar from "./components/navbar/Navbar.tsx";
import HeroSection from "./components/sections/hero/HeroSection.tsx";
import ValuesSection from "./components/sections/values/ValuesSection.tsx";
import AboutSection from "./components/sections/about/AboutSection.tsx";
import JoinUsSection from "./components/sections/join_us/JoinUsSection.tsx";
import Footer from "./components/footer/Footer.tsx";

function App() {


  return (
    <>
        <Navbar />
        <HeroSection />
        <ValuesSection />
        <AboutSection />
        <JoinUsSection />
        <Footer/>
    </>
  )
}

export default App
