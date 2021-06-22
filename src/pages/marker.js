import React from 'react';
import img from "../images/00-HR-1.jpg"

const Marker = () => {
    return (
        <div style={{height: '100vh', width: '100vw', display: "flex", justifyContent: "center", alignItems: "center"}}>
            <img src={img} alt=""/>
        </div>
    );
};

export default Marker;
