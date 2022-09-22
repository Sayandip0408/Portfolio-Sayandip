import React from 'react';
import { FcLink, FcReading } from 'react-icons/fc';

const Education = () => {
    return (
        <div className='main-about education' data-aos="fade-down" data-aos-duration="1000">
            <p className='p' id='p_edu'>Education <FcReading /></p>
            <p id='p_edu_1' data-aos="fade-down" data-aos-duration="1000"><span>Master of Computer Application</span><br />Department of Computer Science and Engineering,<br />University of Kalyani <a href='https://klyuniv.ac.in/'><FcLink /></a>, Kalyani, Nadia<br />CGPA: 9.01</p>
            <p id='p_edu_2' data-aos="fade-up" data-aos-duration="1000"><span>Bachelor of Computer Application</span><br />Bengal School of Technology and Management <a href='https://bstmanagement.in/'><FcLink /></a><br />Sugandha, Chinusrah, Hooghly<br />Maulana Abul Kalam Azad University of Technology<br />CGPA: 7.81</p>
        </div>
    );
}

export default Education;