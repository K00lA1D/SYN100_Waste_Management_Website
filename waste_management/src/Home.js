// BackgroundInformation.js
import React from 'react';
import Typical from 'react-typical';
import HomeMP4 from './home.mp4';
import './style/Home.css';

const Home = () => {
    return (
        <div className="home">
            <video src={HomeMP4} autoPlay loop muted />
            <div className="home-container">
                <Typical
                    steps={['SYN 100 - Medical Waste', 5000]}
                    loop={Infinity}
                    wrapper="h1"
                />
            </div>
        </div>
    );
};

export default Home;
