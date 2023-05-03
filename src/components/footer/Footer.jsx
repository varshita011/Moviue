import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGithub,
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
                "Discover a world of entertainment at your fingertips – Stream thousands of movies, from the latest releases to timeless classics. Kick back, relax, and enjoy the magic of cinema anytime, anywhere. Your ultimate movie destination awaits!"
                </div>
                <div className="socialIcons">
                <span className="icon">
                <a href='https://www.linkedin.com/in/varshitha-choudary-puchakayala-4b1840270/'>
                        <FaLinkedin />  </a>
                    </span>
                    
                    <span className="icon">
                    <a href='https://github.com/varshita011/Moviue'>
                        <FaGithub /> </a>
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    
                   
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;