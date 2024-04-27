import React from 'react';
import './intro.css'
import bg from '../../assets/vinayak.jpg'
import { Link } from 'react-scroll'
import btnImg from '../../assets/hireme.png'

function Intro(props) {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'> I'm <span className='introName'>Vinayak</span> <br /> Website Designer</span>
                <p className='introPara'>I am a skilled web designer with little experience in creating visually appealing and user friendly website.</p>
                <Link><button className='btn'><img src={btnImg} alt='' className='btnImg'></img>Hire Me</button></Link>
            </div>
            <img src={bg} alt='Profile' className='bg' />

        </section>
    );
}

export default Intro;