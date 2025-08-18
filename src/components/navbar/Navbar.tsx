import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="navbar">
            {/* Left Logo */}
            <div className="logo">
                <span>Plutopal</span> | <span>AIFW</span>
            </div>

            {/* Links */}
            <nav className={`nav-links ${isOpen ? "open" : ""}`}>
                <ul>
                    <li><a href="#">Company</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Events</a></li>
                </ul>
            </nav>

            {/* Sign In + Lang/Currency */}
            <div className="signin-container ${}" >
                <div className="switcher">
                    <img
                        className="switcher-flag"
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1235px-Flag_of_the_United_States.svg.png"
                        alt="flag"
                    />
                    <div className="switcher-divider" />
                    <span className="switcher-text">EN</span>
                    <div className="switcher-divider" />
                    <span className="switcher-text">USD</span>
                </div>
                <span className="signin-text">SIGN IN</span>
            </div>

            {/* Hamburger */}
            <button className="hamburger" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
        </header>
    );
}
