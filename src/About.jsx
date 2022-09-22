import React from 'react';
import Education from './Education';
import Skills from './Skills';
import { FcLike, FcBusinessman } from 'react-icons/fc';

const About = () => {
    return (
        <section id='about'>
            <h1 id='about_h1'>I love to create<br />something<br />simple and clean <FcLike /></h1>
            <div className='main-about' data-aos="fade-down" data-aos-duration="1000">
                <h1 id='main_about_h1'>Short story about me and the begining of my journey</h1>
                <p className='p' id='p'>About me <FcBusinessman /></p>
                <p id='p_intro'>Introducing my name is Sayandip Adhikary, usually called Sandy, I came from West Bengal, India, now I am also a recent Master of Computer Application graduate and a frontend developer looking for a opportunity to kick start my career.</p>
                <p id='p_intro2' data-aos="fade-down" data-aos-duration="1000">My short time goal is to get palced in a reputed company, which allows me to enhance my skills and knowledge. My long term goal would be to reach a higher position in the same company. My strength is that I can adapt quickly to any environment.</p>
                <p id='p_intro3' data-aos="fade-down" data-aos-duration="1000">My hobbies are photography and playing cricket. I also love watching movies and webseries in my leisure.</p>
            </div>
            <Education />
            <Skills />
        </section>
    );
}

export default About;