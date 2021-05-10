import React from 'react';
import '../style/secondproject.scss';
import ProjectImage02 from '../image/cats.jpg'
const SecondProject = (props) => {
    return(
        <section className="panel purple">
            <div className="projectImage02">
                <img src={ProjectImage02} alt="" />
            </div>
            <div className="projectsSubs02">
            <p>Adorable Cats</p>
                <a href="https://adorable-cats.netlify.app/" className="page">Page</a>
                <a href="https://velog.io/@sohyeonbak_oly/Adorable-Cats-%EA%B3%A0%EC%96%91%EC%9D%B4-%EC%A0%95%EB%B3%B4-%EC%A0%9C%EA%B3%B5-%ED%8E%98%EC%9D%B4%EC%A7%80" className="blog">Blog</a>
                
            </div>
        </section>
    );}

export default SecondProject;