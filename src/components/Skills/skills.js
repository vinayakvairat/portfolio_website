import React from 'react';
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

function skills(props) {
    return (
        <section id='skills'>
            <span className='skillTitle'>What I Do</span>            
            <span className='skillDescription'>I am a skilled and passionate web designer with experience in creating visually appending and user-friendly websites. I have a strong understanding of design and keen eye for for detail. I am proficient in HTML, CSS and JavaScript, as well as design software.</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={UIDesign} alt='' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>UI/UX Design</h2>
                        <p>This is demo text can be changed while making the production ready website.</p>
                    </div>
                </div>

                <div className='skillBar'>
                    <img src={WebDesign} alt='' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>WebDesign</h2>
                        <p>This is demo text can be changed while making the production ready website.</p>
                    </div>
                </div>

                <div className='skillBar'>
                    <img src={AppDesign} alt='' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>AppDesign</h2>
                        <p>This is demo text can be changed while making the production ready website.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default skills;