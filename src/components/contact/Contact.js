import React from 'react'
import './contact.css'
import {BsMessenger} from "react-icons/bs"
import {AiOutlinePhone} from "react-icons/ai"
import {MdOutlineEmail} from "react-icons/md"
import { useRef } from 'react';
import emailjs from "emailjs-com"
const Contact = () => {
const form =useRef();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_g8txhzw', 'template_7y0vywj', form.current, 'PeF3M1lyMFu90sDYD')
  e.target.reset()

      
};

  return (
  <section id="contact">
 <h5>Get in Touch</h5>
 <h2>Contact Me</h2>
 <div className="container contact_container">
  <div className="contact_options">
    <article className="contact_option">
      <MdOutlineEmail className="contact_option-icon"/>
      <h4>Email </h4>
      <h5>andargworku8240@gmail.com</h5>
      <a href="andargworku8240@gmail.com" target="_blank">Send a Message</a>
    </article>
    <article className="contact_option">
      <BsMessenger className="contact_option-icon"/>
      <h4>Messenger</h4>
      <h5>https://www.facebook.com</h5>
      <a href="https://www.facebook.com" target="_blank">Send a Message</a>
    </article>
    <article className="contact_option">
      <AiOutlinePhone className="contact_option-icon"/>
      <h4>phoneNumber</h4>
      <h5>09 43 45 49 89</h5>
      <a href="https://github.com/AndargWorku" target="_blank">view the project and call me</a>
    </article>

  </div>
  <form ref={form} onSubmit={sendEmail}>
    <input type='text' name="name" placeholder="Full name" required/>
    <input type="email" name="Email" placeholder="Your Email" required/>
    <textarea name="message" rows="7" placeholder="your message" required></textarea>
    <button type='submit' className='btn btn-primary'>Send Message</button>
  </form>
 </div>
 </section>
    
  )
}

export default Contact
