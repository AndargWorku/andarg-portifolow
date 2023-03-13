import React from 'react'
import './footer.css'
import {FaFacebook} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {BsGithub} from "react-icons/bs"
const Footer = () => {
  return (
      <footer>
        <a href="#" className="footer_logo">Andarg Worku</a>
        <ul className="permalinks">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#testimonials ">Testimonials</a></li>

        </ul>
        <div className="footer_socials">
          <a href=" https://www.facebook.com">< FaFacebook/></a>
          <a href="daraalvisboman"><FiInstagram/></a>
          <a href="https://github.com/AndargWorku"><BsGithub/></a>

        </div>
        <div className="footer_copyright">
          <small>&copy; All right Andarg worku conserved</small>
        </div>
      
      </footer>
    
  )
}

export default Footer
