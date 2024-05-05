import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
    "Explore the cinematic universe with <strong>MOVIX</strong>, crafted by <strong>Souradeep</strong>. 
    MOVIX offers a seamless experience to search for movies and TV shows, providing current ratings and 
    official trailers. Delve into detailed information such as director, writer, release date, and runtime. 
    Discover top cast members with their profile images and names, all in one place. Experience the world of 
    entertainment like never before with  MOVIX."
</div>

                <div className="socialIcons">
                    <a href="https://www.facebook.com" className="icon">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.instagram.com/souradeep.env/" className="icon">
                        <FaInstagram />
                    </a>
                    <a href="https://twitter.com/Souradeep_2003_" className="icon">
                        <FaTwitter />
                    </a>
                    <a href="https://www.linkedin.com/in/souradeep07/" className="icon">
                        <FaLinkedin />
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
