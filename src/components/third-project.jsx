import React, { useRef } from 'react';
import '../style/thirdproject.scss';
import ProjectImage03 from '../image/Business.png'

const ThirdProject = (props) => {
    const targetRef = useRef(null)
    return(
        <section ref={targetRef} className="panel green">
            <div className="projectImage03">
                <img src={ProjectImage03} alt="project3-thumbnail-image" />
            </div>
            <div className="projectsSubs03">
            <p>Business Card Maker</p>
                <a href="https://makeyourbusinesscard.netlify.app/" className="page">Page</a>
                <a href="https://velog.io/@sohyeonbak_oly/%EB%B9%84%EC%A6%88%EB%8B%88%EC%8A%A4-%EC%B9%B4%EB%93%9C-%EB%A9%94%EC%9D%B4%EC%BB%A4-%EB%AA%85%ED%95%A8-%EB%A7%8C%EB%93%A4%EA%B8%B0" className="blog">Blog</a>
            </div>
        </section>     
    );}

export default ThirdProject;