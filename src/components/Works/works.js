import React from 'react';
import './works.css'
import p1 from '../../assets/portfolio-1.png'
import p2 from '../../assets/portfolio-2.png'
import p3 from '../../assets/portfolio-3.png'
import p4 from '../../assets/portfolio-4.png'
import p5 from '../../assets/portfolio-5.png'
import p6 from '../../assets/portfolio-6.png'

function Works(props) {
    return (
        <section id='works'>
            <h2 className='worksTitle'>My Portfolio</h2>
            <span className='worksDesc'>I am a skilled and passionate web designer with experience in creating visually appending and user-friendly websites. I have a strong understanding of design and keen eye for for detail. I am proficient in HTML, CSS and JavaScript, as well as design software.</span>
            <div className='worksImgs'>
                <img src={p1} alt='' className='worksImg'></img>
                <img src={p2} alt='' className='worksImg'></img>
                <img src={p3} alt='' className='worksImg'></img>
                <img src={p4} alt='' className='worksImg'></img>
                <img src={p5} alt='' className='worksImg'></img>
                <img src={p6} alt='' className='worksImg'></img>
            </div>
            <button className='worksBtn'>See More</button>
        </section>
    );
}

export default Works;