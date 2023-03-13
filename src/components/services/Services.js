import React from 'react'
import './services.css'
import {BiCheck} from "react-icons/bi"
const Services = () => {
  return (
    
      <section id="services" className="am">
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className="container services_container">
          <article className="service">
            <div className="service_head">
              <h3>UI/UX Design</h3>
            </div>
            <ul className="service_list">
              <li>
                <BiCheck className='service_list-icon'/>
                <p>I have intermediate talent UI/UX design  </p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>To design create smart Design for different projects </p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p> To develop my Ux/UI design by learning different Design course </p>
              </li>
            </ul>
          </article>
          <article className="service">
            <div className="service_head">
              <h3>Web developer</h3>
            </div>
            <ul className="service_list">
              <li>
                <BiCheck className='service_list-icon'/>
                <p>To Develop smart e-commerce project  </p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>To Develop chat app projects </p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p> To develop different project for client any project</p>
              </li>
            </ul>
          </article>
          <article className="service">
            <div className="service_head">
              <h3>Content Creater</h3>
            </div>
            <ul className="service_list">
              <li>
                <BiCheck className='service_list-icon'/>
                <p>To have Create dynamic Design  </p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>To Create new idea </p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p> To have Dynamic viewer</p>
              </li>
            </ul>
          </article>

        </div>

        </section>
    
  )
}

export default Services
