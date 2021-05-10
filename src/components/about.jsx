import React from 'react';

import '../style/about.scss'
import Me from '../image/me.jpg'

const About = (props) => {
    
    return(
        <section className="panel red">
            <div className="selfImage">
                <img className="me" src={Me} alt="profile-image" />
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
    );}

export default About;