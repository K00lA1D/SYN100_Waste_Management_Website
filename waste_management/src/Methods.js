// Methods.js
import React from 'react';
import './style/Methods.css';
import Factory from './factory.mp4';

const Methods = () => {
    return (
        <div className="methods">
            <video src={Factory} autoPlay loop muted />
            <div className="methods-container">
                <h2>Data Acquisition</h2>
                <p>
                We reached out to Nicole through Dr. Gormally and requested UCSD Medical Waste Data. Additionally, Dr. Gormally also provided us with graphical data to help jumpstart our data exploration phase, which assisted us with outlining our website development goals.
                </p>
                <h2>Organization of Data</h2>
                <p>
                Once the data was collected, the individual data points were organized on graphs and bar charts to represent the overall waste and costs over time. This effectively puts into perspective how UCSDH has done in waste production and costs over several years to get a sense if any improvements were made over time.
                </p>
                <h2>Website Development</h2>
                <p>
                    We took inspiration from the previous Energy group’s dashboard, but we coded our website from scratch. We assimilated the type of data we should be receiving, and then we developed frameworks for the graphs for the data that we later received. Using HTML, CSS and Javascript, we coded an interactive and streamlined interface for users to easily navigate through the complex UCSD waste data and digest the important information we gleaned from the data. Additionally, we also developed tabs to interact with the Medical Waste interviews/surveys.
                </p>
                <h2>Data/Information for Relevance Page</h2>
                <p>
                    We constructed our own survey via a google form to obtain the opinions of individuals who plan to have careers that will involve some sort of interaction with medical/hazardous waste. The crucial aspects from that survey that felt useful to discussing relevance of waste/waste management were consolidated into data. Lastly, the data was discussed on its meaning and importance.
                </p>
            </div>
        </div>
    );
};

export default Methods;
