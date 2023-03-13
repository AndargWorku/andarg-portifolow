import React from 'react'
import './testimonials.css'
import Avatar1 from "../../assets/Avatar1.png"
import Avatar2 from "../../assets/avatar2.jpg"
import Avatar3 from "../../assets/avatar3.jpg"

import {Pagination } from 'swiper';
import {Swiper,SwiperSlide} from "swiper/react";
  // import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar'

const data=[
  {
    avatar:Avatar1,
    name:'Andrew',
    review:'this to smart best one that includes the corect way of the every thing is sacss know every body is the bast you can '
  },
  {
    avatar:Avatar2,
    name:'worku',
    review:'thank you for giving introduction about how to develop the web project in smart and flexible way  thank you so mach '
  },
  {
    avatar:Avatar3,
    name:'Andrew',
    review:'this to smart best one that includes the corect way of the every thing is sacss know every body is the bast you can '
  },
  {
    avatar:Avatar2,
    name:'Andrew',
    review:'this to smart best one that includes the corect way of the every thing is sacss know every body is the bast you can '
  }
]
const Testimonials = () => {
  return (
      <section id="testimonial" className="you">
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>
        <Swiper className="container testimonials_container"
        modules={[Pagination]} 
        spaceBetween={50}
        slidesPreView={1}
        pagination={{clickable:true}}>
          {
            data.map(({avatar,name,review},index)=>{
              return(
                <SwiperSlide key={index} className="testimonial">
            <div className="client_avatar">
              <img src={avatar} alt=""/>
            </div>
            <h5 className="client_name">{name}</h5>
              <small className="client_review">
                {review}
              </small>

          </SwiperSlide>

              )
            })
          }
          

        </Swiper>
      </section>
  
  )
}

export default Testimonials
