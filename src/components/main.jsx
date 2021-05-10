import React from 'react';
import '../style/main.scss';

const Main = () => {
    const year = new Date().getFullYear().toString();
    const month = (new Date().getMonth()+1).toString();
    const date = new Date().getDate().toString();
    
    return(
        <>
            <header className="header">
                <div className="myName">SOHYEON PARK</div>
                <div className="myTitle">PORTFOLIO@21</div>
                <div className="myData">{`${year} ${month.length===1 ? `0${month}` : month} ${date.length===1 ? `0${date}` : date}`} KOR</div>
            </header>
            <div className="title">
                <h1>ABOUT</h1>
            </div>
        </>  
    );}

export default Main;