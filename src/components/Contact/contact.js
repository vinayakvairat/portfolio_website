import React, { useRef } from 'react';
import './contact.css'
import p1 from '../../assets/walmart.png'
import p2 from '../../assets/adobe.png'
import p3 from '../../assets/microsoft.png'
import p4 from '../../assets/facebook.png'

import p5 from '../../assets/facebook-icon.png'
import p6 from '../../assets/twitter.png'
import p7 from '../../assets/youtube.png'
import p8 from '../../assets/instagram.png'

import emailjs from '@emailjs/browser'

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_v8hzog3', 'template_44etpjt', form.current, 'tyqvUWDltshMrZhwN')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent!!')
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section id='contactPage'>
            <div id='clients'>
                <h1 className='contactPageTitle'>My Clients</h1>
                <p className='clientDesc'>I have the opportunity to work with a diverse group of compnies.
                    Some of the notable components I have worked with includes.</p>

                <div className='clientImgs'>
                    <img src={p1} alt='Clients' className='clientImg' />
                    <img src={p2} alt='Clients' className='clientImg' />
                    <img src={p3} alt='Clients' className='clientImg' />
                    <img src={p4} alt='Clients' className='clientImg' />
                </div>
            </div>
            <div id='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>Please fill out the form below to discuss any opportunities.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Your Name' name='from_name' />
                    <input type='email' className='email' placeholder='Your Email' name='your_email' />
                    <textarea className='msg' name='message' placeholder='Your Message' rows={5}></textarea>
                    <button type='submit' value='Send' className='submitBtn'>Submit2</button>
                    <div className='links'>
                        <img src={p5} alt='FaceBook' className='link' />
                        <img src={p6} alt='Twitter' className='link' />
                        <img src={p7} alt='YouTube' className='link' />
                        <img src={p8} alt='Instagram' className='link' />
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;