import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="navbar">
            <div className="navbar-left">
                <h2 className="logo">
                    <span>Plutoplal</span> | <span>AIFW</span>
                </h2>
            </div>

            <nav className={`nav-links ${isOpen ? "open" : ""}`}>
                <ul>
                    <li><a href="#">Company</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Events</a></li>
                </ul>
            </nav>

            <div className="signin-container">
                <div className="signin-icon"></div>
                <span className="signin-text">SIGN IN</span>
            </div>

            <button className="hamburger" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
        </header>
    );
}
