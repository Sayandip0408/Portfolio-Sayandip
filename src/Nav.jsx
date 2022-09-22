import React from 'react';
import { MdToggleOff, MdToggleOn } from 'react-icons/md';
import { darkOff, darkOn } from './darkmode';


const Nav = () => {
    return (
        <>
            <nav id='nav'>
                <button className='nav-btn-logo' id='nav-btn-logo'>S/A</button>
                <button className='nav-btn-logo-long' id='nav-btn-logo-long'><span>SayanDip</span> Adhikary</button>
                <div className='nav-links' id='nav-links'>
                    <a href='#home' className='nav-links-a' id='nav_link_1'>home</a>
                    <a href='#about' className='nav-links-a' id='nav_link_2'>about</a>
                    <a href='#project' className='nav-links-a' id='nav_link_3'>projects</a>
                    <a href='#contact' className='nav-links-a' id='nav_link_4'>Contact</a>
                </div>
                <div id='togg'>
                    <MdToggleOff id='darkmode_off' onClick={darkOn} />
                    <MdToggleOn id='darkmode_on' onClick={darkOff} />
                    <div className='nav-social-links' id='nav-social-links'>
                        <a href='https://www.instagram.com/sayan.dip7/' id='nav_link_soc_1'><i class="fab fa-instagram"></i></a>
                        <a href='https://github.com/Sayandip0408' id='nav_link_soc_2'><i class="fab fa-github"></i></a>
                        <a href='https://www.facebook.com/sayandip.adhikary.96' id='nav_link_soc_3'><i class="fab fa-facebook"></i></a>
                        <a href='https://www.linkedin.com/in/sayandip-adhikary-7359a8199' id='nav_link_soc_4'><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;