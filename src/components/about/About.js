import React from 'react'
import './about.css'
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"
import me from '../../assets/me.png'
const About = () => {
  return (
    <div>
      <section id='about'>
        <h5>Get to Know</h5>
        <h2>About Me</h2>
        <div className='container about_container'>
          <div className="about_me">
            <div className="about_me-image">
              <img src={me} alt='me'/>
 
            </div>
          </div>
          <div className="about_content">
            <div className='about_cards'>
              <article className='about_card'>
                <FaAward className='about_icon'/>
                <h5>Experience</h5>
                <small>1+ years</small>
              </article>
              <article className='about_card'>
                <FiUsers className='about_icon'/>
                <h5>Client</h5>
                <small>1o worldwide</small>
              </article>
              <article className='about_card'>
                <VscFolderLibrary className='about_icon'/>
                <h5>Projects</h5>
                <small>7+ Complected</small>
              </article>
            </div>
            <p>
            Hi every one I am Andarg worku nice to meet you .please take look arou
I am passionate about building excellent software that improves the lives of those around me i specializing in creating software for client ranging from individuals and small business all the way to large enterprise cooperation what we to do if you do a software expert available a fingertips

            </p>
            <a href="#contact" className="btn btn-primary">Let's go Talk</a>

          </div>

        </div>
      </section>
    </div>
  )
}

export default About
