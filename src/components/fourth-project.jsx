import React from 'react';
import '../style/fourthproject.scss'
import projectImage04 from '../image/consult.jpg'

const FourthProject = (props) => {
    return(
        <section className="panel black">
            <div className="projectImage04">
                <img src={projectImage04} alt="project4-thumbnail-image" />
            </div>
            <div className="projectsSubs04">
                <p>Request for consulting</p>
                <a href="https://request-for-consulting.netlify.app/" className="page">Page</a>
                <a href="https://velog.io/@sohyeonbak_oly/%EA%B5%90%EB%82%B4-%ED%95%99%EC%83%9D-%EC%83%81%EB%8B%B4-%EC%8B%A0%EC%B2%AD-%ED%8E%98%EC%9D%B4%EC%A7%80" className="blog">Blog</a>
            </div>
        </section>
        
    );}

export default FourthProject;