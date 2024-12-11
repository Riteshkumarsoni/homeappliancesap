import { FaArrowRightLong } from "react-icons/fa6"
import { FaLinkedinIn } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import './index.css'

const Footer = () => (
    <div className="footer-main-bg-container">
        <div className="footer-bg-container">
            <div className="get-in-touch-card-section">
                <div>
                    <p className="getInTouch-title">Get in touch with us</p>
                    <input type="email" placeholder="Email address" className="emailInput" />
                    <button type="button" className="arrow-btn"><FaArrowRightLong /></button>
                </div>
                <p className="get-in-touch-decription">
                    Hello, we are
                </p>
            </div>
            <button type="button" className="book-now-btn">Book a Service</button>
            <div>
                <p className="footer-title">Terms</p>
                <p className="footer-title">Privacy</p>
                <p className="footer-title">Cookies</p>
                <p className="footer-title">Business Login</p>
            </div>
        </div>
        <hr className="hr-line" />
        <div className="footer-bottom-section">
            <img src="https://res.cloudinary.com/dh8g9mloe/image/upload/v1733834444/blue_logo_z0miqo.png" alt="website-logo" />
            <div>
                <FaLinkedinIn className="social-media-icon" />
                <FaFacebookF className="social-media-icon" />
                <FaTwitter className="social-media-icon" />
            </div>
        </div>
    </div>
)

export default Footer