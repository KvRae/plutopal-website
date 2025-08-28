import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            {/* Top Section */}
            <div className="footer-container">

                {/* Branding & Social */}
                <div className="footer-brand">
                    <h1> Plutopal </h1>
                    <h3>Sustainable, Social & Global</h3>
                    <div className="footer-socials">
                        <a href="#" className="social-icon"><FaFacebookF /></a>
                        <a href="#" className="social-icon"><FaTwitter /></a>
                        <a href="#" className="social-icon"><FaInstagram /></a>
                        <a href="#" className="social-icon"><FaLinkedinIn /></a>
                    </div>
                </div>
                <div className="footer-events">
                    {/* Company Links */}
                    <div className="footer-column">
                        <h4>Company</h4>
                        <div className="divider"></div>
                        <ul>
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Couture</li>
                            <li>Sustainability</li>
                            <li>Privacy</li>
                        </ul>
                    </div>

                    {/* Events Europe */}
                    <div className="footer-column">
                        <h4>Events</h4>
                        <div className="divider"></div>
                        <h5>Europe</h5>
                        <ul>
                            <li>AI Copenhagen FW</li>
                            <li>AI London FW</li>
                            <li>AI Milan FW</li>
                            <li>AI Monaco FW</li>
                            <li>AI Paris FW</li>
                        </ul>
                    </div>

                    {/* Events USA */}
                    <div className="footer-column">
                        <h5>USA</h5>
                        <ul>
                            <li>AI New York FW</li>
                            <li>AI Los Angeles FW</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <p>© Plutopal.ai 2024 - 2025</p>
                <div className="footer-links">
                    <a href="#">Terms & Policies</a>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
}
