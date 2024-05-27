// NavBar.js
import React from 'react';
import './style/NavBar.css';
import BackgroundInformation from './BackgroundInformation';
import Methods from './Methods';
import Relevance from './Relevance';
import MunicipalSolidWaste from './MunicipalSolidWaste';
import Recycling from './Recycling';
import MedicalWaste from './MedicalWaste';
import HazardousWaste from './HazardousWaste';

const NavBar = ({ onContentChange }) => {
    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li className="navbar-item" onClick={() => onContentChange(<BackgroundInformation />)}>
                    Background Information
                </li>
                <li className="navbar-item" onClick={() => onContentChange(<Methods />)}>
                    Methods
                </li>
                <li className="navbar-item">
                    Data
                    <ul className="dropdown-menu">
                        <li className="dropdown-item" onClick={() => onContentChange(<MunicipalSolidWaste />)}>Municipal Solid Waste</li>
                        <li className="dropdown-item" onClick={() => onContentChange(<Recycling />)}>Recycling</li>
                        <li className="dropdown-item" onClick={() => onContentChange(<MedicalWaste />)}>Medical Waste</li>
                        <li className="dropdown-item" onClick={() => onContentChange(<HazardousWaste />)}>Hazardous Waste</li>
                    </ul>
                </li>
                <li className="navbar-item" onClick={() => onContentChange(<Relevance />)}>
                    Relevance
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
