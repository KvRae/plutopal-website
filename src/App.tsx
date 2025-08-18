import './App.css'
import Navbar from "./components/navbar/Navbar.tsx";
import HeroSection from "./components/sections/HeroSection.tsx";
import ValuesSection from "./components/sections/ValuesSection.tsx";
import AboutSection from "./components/sections/AboutSection.tsx";
import JoinUsSection from "./components/sections/JoinUsSection.tsx";
import Footer from "./components/Footer.tsx";

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
