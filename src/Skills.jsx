import React from 'react';
import skill_data from './skill_data';
import { FcBullish } from 'react-icons/fc';

const skill_fun = (val) => {
    return (
        <>
            <h3 id={val.idname}>{val.sub}</h3>
            <div className='progress'>
                <div className='bar' id={val.id} data-aos="slide-right" data-aos-duration="1000"></div>
            </div>
        </>
    );
}

const Skills = () => {
    return (
        <div className='main-about skill'>
            <p className='p' id='p_skill'>Skills <FcBullish /></p>
            {skill_data.map(skill_fun)}
        </div>
    );
}

export default Skills;