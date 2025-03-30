import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import "./Footer.css"

export const Footer = () => {
  return (
    <div className="Footer-clean">
        <footer>

            <div className="Footer-container">
                <div className="Footer-col-md-3">
                    <h3 className="Footer-heading">QUICK LINKS</h3>
                    <ul>
                        <li><NavLink to="/">HOME</NavLink></li>
                        <li><NavLink to="/about">ABOUT</NavLink></li>
                        <li><NavLink to="/faq">FAQ</NavLink></li>
                        <li><NavLink to="/donate">DONATE</NavLink></li>
                        <li><NavLink to="/contact">CONTACT US</NavLink></li>
                    </ul>
                </div>

                <div className="Footer-col-md-3">
                    <h3 className="Footer-heading">CONTACT INFORMATION</h3>
                    <ul>
                        <li>PHONE NUMBER: 0123456789</li>
                        <li>EMAIL: <a href="https://mail.google.com/" target="_blank">contact@phoenixfoundation.org</a></li>
                    </ul>
                    <br />
                    <h3 className="Footer-heading">ADDRESS</h3>
                    <ul>
                    <li>Phoenix Foundation head office DHA Phase 5, Karachi, Pakistan</li>
                    </ul>
                </div>

                <div className="Footer-col-md-3 Footer-item social">
                    <h3 className="Footer-heading">FOLLOW US ON SOCIAL MEDIA</h3>
                    <a href="https://www.facebook.com" target='_blank'><FaFacebook /></a>
                    <a href="https://www.twitter.com" target='_blank'><FaTwitter /></a>
                    <a href="https://www.instagram.com" target='_blank'><FaInstagram /></a>
                </div>
                <br />
                <p className="Footer-copyright">©Copyright 2024 Phoenix Foundation. All Rights Reserved.</p>
            </div>
        </footer>
    </div>
  );
};
