import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css"
import { NavLink} from "react-router-dom";

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
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? "active" : ""}
                            end
                        >Company</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/careers"
                            className={({ isActive }) => isActive ? "active" : ""}
                            end
                        >Careers</NavLink>
                    </li>
                    <li> <NavLink
                        to="/events"
                        className={({ isActive }) => isActive ? "active" : ""}
                        end
                    >Events</NavLink></li>
                </ul>
            </nav>

            {/* Sign In + Lang/Currency */}
            <div className="signin-container" >
                <a className={'signin-text-link'} href={"https://plutopal.ai/signin"} > <span className="signin-text">SIGN IN</span> </a>
            </div>

            {/* Hamburger */}
            <button className="hamburger" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
        </header>
    );
}
