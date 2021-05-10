import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import About from './about';
import FirstProject from './first-project';
import SecondProject from './second-project';
import ThirdProject from './third-project';
import FourthProject from './fourth-project';
import Contact from './contact';
import '../style/section.scss';
import MainImage from '../image/mainImage.jpg'

const Sections = (props) => {

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger); 
    
        let sections = gsap.utils.toArray(".panel");
       
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".container",
            pin: true,
            scrub: 2,
            snap: 1 / (sections.length - 1),
            // base vertical scrolling on how wide the container is so it feels more natural.
            end: () => "+=" + document.querySelector(".container").offsetWidth
          }
        })
        
      },[])

    return(
        <div className="container">
            <div className="description panel blue">
                <div className="imageSection">
                    <img src={MainImage} alt="main-image" />
                </div>
                <div className="titleSection">
                    <h1>FRONT-END <br /> DEVELOPMENT</h1>
                </div>
            </div>
            <About />
            <FirstProject />
            <SecondProject />
            <ThirdProject />
            <FourthProject />
            <Contact />
        </div>    
    );}

export default Sections;