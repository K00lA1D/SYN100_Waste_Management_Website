// BackgroundInformation.js
import React from 'react';
import Typical from 'react-typical';
import lab_device from './lab_device.mp4';
import './style/Home.css';

const Home = () => {
    return (
        <div className="home">
            <video src={lab_device} autoPlay loop muted />
            <div className="home-container">
                <Typical
                    steps={['UCSD Health - Waste Analysis', 5000]}
                    loop={Infinity}
                    wrapper="h1"
                />
            </div>
        </div>
    );
};

export default Home;
