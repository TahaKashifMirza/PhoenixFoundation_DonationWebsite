import "./Navbar.css";
import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Navbar = () => {
const { isLoggedIn } = useAuth();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleDropdownClick = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleNavLinkClick = () => {
        setMenuOpen(false);
        setDropdownOpen(false);
    };

    const handleMenuToggleClick = () => {
        setMenuOpen(!menuOpen);
        setDropdownOpen(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest('.navbar-container')) {
                setMenuOpen(false);
                setDropdownOpen(false);
            }
        };

        window.addEventListener('click', handleOutsideClick);

        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <header>
            <div className="navbar-container">
                <div className="logo-text">
                    <NavLink to="/" onClick={handleNavLinkClick}><strong>PHOENIX FOUNDATION</strong></NavLink>
                </div>
                <nav>
                    <div className="menu-toggle" onClick={handleMenuToggleClick}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                        <li><NavLink to="/" onClick={handleNavLinkClick}><strong>HOME</strong></NavLink></li>
                        <li><NavLink to="/about" onClick={handleNavLinkClick}><strong>ABOUT</strong></NavLink></li>
                        <li><NavLink to="/faq" onClick={handleNavLinkClick}><strong>FAQ</strong></NavLink></li>
                        <li><NavLink to="/donation" onClick={handleNavLinkClick}><strong>DONATE</strong></NavLink></li>
                        <li><NavLink to="/contact" onClick={handleNavLinkClick}><strong>CONTACT US</strong></NavLink></li>
                        {isLoggedIn ?  <li><NavLink to="/logout" onClick={handleNavLinkClick} className="logout-link-Nav"><strong>LOGOUT</strong></NavLink></li>
                        : <>
                        <li><NavLink to="/login" onClick={handleNavLinkClick} className="login-link-Nav"><strong>LOGIN</strong></NavLink></li>
                        <li><NavLink to="/signup" onClick={handleNavLinkClick} className="signup-link-Nav"><strong>SIGNUP</strong></NavLink></li>
                        </>}
                    </ul>
                </nav>
            </div>
        </header>
    );
};
