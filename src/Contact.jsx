import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { FcVoicePresentation, FcBusinessContact } from 'react-icons/fc';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gg3azwj', 'template_o71djwt', form.current, '3Ri14amHieEplBETa')
            .then((result) => {
                console.log(result.text);
                alert("Message sent.");
            }, (error) => {
                console.log(error.text);
                alert("Message not sent.");
            }
            );
        e.target.reset();
    };
    return (
        <section id="contact">
            <h1>Get in touch <FcBusinessContact /></h1>
            <form id="contact-form" ref={form} onSubmit={sendEmail}>
                <input type='text' id="name" name="name" placeholder="Your Name" required></input>
                <input type='email' id="email" name="email" placeholder="Email ID" required></input>
                <input type='text' id="phone" name="phone" placeholder="Phone No." required></input>
                <textarea id="message" name="message" rows="4" placeholder="How can I help you?"></textarea>
                <button type="submit" id="send_msg">Send <FcVoicePresentation /></button>
            </form>
        </section>
    );
}

export default Contact;