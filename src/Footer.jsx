import React from "react";
import { FcCopyright } from 'react-icons/fc';

const Footer = () => {
    return (
        <footer id="footer">
            <div id="footerSocialLinks">
                <a href="https://github.com/Sayandip0408" id="github"><i class="fab fa-github"></i></a>
                <a href="https://www.facebook.com/sayandip.adhikary.96" id="facebook"><i class="fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/sayan.dip7/" id="instagram"><i class="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/sayandip-adhikary-7359a8199" id="linkedin"><i class="fab fa-linkedin"></i></a>
            </div>
            <h1><FcCopyright /> SayanDip Adhikary 2022</h1>
        </footer>
    );
}

export default Footer;

