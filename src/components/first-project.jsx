import React from 'react';
import '../style/firstproject.scss'
import ProjectImage01 from'../image/Artboard.jpg'

const FirstProject = (props) => {
    
    return(
        <section className="panel orange">
            <div className="projectImage01">
                <img src={ProjectImage01} alt="project1-thumbnail-image" />
            </div>
            <div className="projectsSubs01">
                <p>Moview</p>
                <a href="https://github.com/sohyeonBak/Movie-Review" className="page">CODE</a>
                <a href="https://velog.io/@sohyeonbak_oly/Moview-%EC%98%81%ED%99%94-%EB%A6%AC%EB%B7%B0-SNS" className="blog">BLOG</a>
            </div>
        </section>
        
    );}

export default FirstProject;