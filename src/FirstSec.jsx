import React from 'react';
import cv from './SayandipCVLatex.pdf';
import { FcDocument } from 'react-icons/fc';

const FirstSec = () => {
    return (
        <section className='first-sec' id='first_sec'>
            <div className='my-image' data-aos="zoom-in" data-aos-duration="1000"></div>
            <h1>hi, i'm sayanDip</h1>
            <p id='mca'>Master of computer application Graduate</p>
            <div className='tag'>
                <p id='tagline' data-aos="zoom-in" data-aos-duration="1000">passionate<br />to craft amazing<br />digital products.</p>
                <div className='floating-div1' data-aos="fade-right" data-aos-duration="1000">
                    <h3>Frontend Developer</h3>
                    <div className='floating-div-icon1'>
                        <i class="fas fa-location-arrow"></i>
                    </div>
                </div>
                <div className='floating-div2' data-aos="fade-left" data-aos-duration="1000">
                    <h3>C / C++ Developer</h3>
                    <div className='floating-div-icon2'>
                        <i class="fas fa-location-arrow"></i>
                    </div>
                </div>
            </div>
            <p id='intro'>a design enthusiast that already have web designing experience. In addition to web design, I have a strong understanding of C/C++, Data Structure and DBMS.</p>
            <a href={cv}><button class="bn632-hover bn25">Resume <FcDocument /></button></a>
        </section>
    );
}

export default FirstSec;