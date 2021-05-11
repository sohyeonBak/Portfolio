import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import '../style/section.scss';
import '../style/contact.scss';
import MainImage from '../image/mainImage.jpg'
import Me from '../image/me.jpg'
import ProjectImage01 from'../image/Artboard.jpg'
import ProjectImage02 from '../image/cats.jpg'
import ProjectImage03 from '../image/Business.png'
import projectImage04 from '../image/consult.jpg'


const Sections = () => {
    
    console.log(gsap)
    
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);

        let sections = gsap.utils.toArray(".panel");
        console.log(sections)

        gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".container",
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + document.querySelector(".container").offsetWidth
        }
        });
    },[])


    return(
        <div className="container">
            <div className="description panel blue">
                <div className="imageSection">
                    <img src={MainImage} alt="main" />
                </div>
                <div className="titleSection">
                    <h1>FRONT-END <br /> DEVELOPMENT</h1>
                </div>
            </div>
            <section className="panel red">
            <div className="selfImage">
                <img className="me" src={Me} alt="profile" />
            </div>
            <div className="stackList">
                <ul>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>SCSS</li>
                    <li>PostCSS</li>
                    <li>TypeScript</li>
                    <li>Node.js</li>
                </ul>
            </div>
        </section>

        <section className="panel orange">
            <div className="projectImage01">
                <img src={ProjectImage01} alt="project1-thumbnail" />
            </div>
            <div className="projectsSubs01">
                <p>Moview</p>
                <a href="https://github.com/sohyeonBak/Movie-Review" target="_blank" rel="noopener noreferrer" className="page">CODE</a>
                <a href="https://velog.io/@sohyeonbak_oly/Moview-%EC%98%81%ED%99%94-%EB%A6%AC%EB%B7%B0-SNS" target="_blank" rel="noopener noreferrer" className="blog">BLOG</a>
            </div>
        </section>

        <section className="panel purple">
            <div className="projectImage02">
                <img src={ProjectImage02} alt="project2-thumbnail" />
            </div>
            <div className="projectsSubs02">
            <p>Adorable Cats</p>
                <a href="https://adorable-cats.netlify.app/" target="_blank" rel="noopener noreferrer" className="page">Page</a>
                <a href="https://velog.io/@sohyeonbak_oly/Adorable-Cats-%EA%B3%A0%EC%96%91%EC%9D%B4-%EC%A0%95%EB%B3%B4-%EC%A0%9C%EA%B3%B5-%ED%8E%98%EC%9D%B4%EC%A7%80" target="_blank" rel="noopener noreferrer" className="blog">Blog</a>
                
            </div>
        </section>

        <section className="panel green">
            <div className="projectImage03">
                <img src={ProjectImage03} alt="project3-thumbnail" />
            </div>
            <div className="projectsSubs03">
            <p>Business Card Maker</p>
                <a href="https://makeyourbusinesscard.netlify.app/" target="_blank" rel="noopener noreferrer" className="page">Page</a>
                <a href="https://velog.io/@sohyeonbak_oly/%EB%B9%84%EC%A6%88%EB%8B%88%EC%8A%A4-%EC%B9%B4%EB%93%9C-%EB%A9%94%EC%9D%B4%EC%BB%A4-%EB%AA%85%ED%95%A8-%EB%A7%8C%EB%93%A4%EA%B8%B0" target="_blank" rel="noopener noreferrer" className="blog">Blog</a>
            </div>
        </section>   

        <section className="panel black">
            <div className="projectImage04">
                <img src={projectImage04} alt="project4-thumbnail" />
            </div>
            <div className="projectsSubs04">
                <p>Request for consulting</p>
                <a href="https://request-for-consulting.netlify.app/" target="_blank" rel="noopener noreferrer" className="page">Page</a>
                <a href="https://velog.io/@sohyeonbak_oly/%EA%B5%90%EB%82%B4-%ED%95%99%EC%83%9D-%EC%83%81%EB%8B%B4-%EC%8B%A0%EC%B2%AD-%ED%8E%98%EC%9D%B4%EC%A7%80" target="_blank" rel="noopener noreferrer" className="blog">Blog</a>
            </div>
        </section>

        <section className="panel gray">
            <div className="contactzone">
                <h1>Sohyeon Park</h1>
                <p>sohyeonbakoly@gmail.com</p>
                <ul>
                    <li><a href="https://github.com/sohyeonBak" target="_blank" rel="noopener noreferrer">Github</a></li>
                    <li><a href="https://velog.io/@sohyeonbak_oly" target="_blank" rel="noopener noreferrer">Velog</a></li>
                </ul>
            </div>
        </section>  
        </div>    
    );}

export default Sections;