// App.js
import React, { useState } from 'react';
import NavBar from './NavBar';
import MainWindow from './MainWindow';
import Display from './Display';
import Footer from './Footer';
import BackgroundInformation from './BackgroundInformation';
import Methods from './Methods';
import Relevance from './Relevance';
import MunicipalSolidWaste from './MunicipalSolidWaste';
import Recycling from './Recycling';
import MedicalWaste from './MedicalWaste';
import HazardousWaste from './HazardousWaste';

const App = () => {
    const [content, setContent] = useState(<BackgroundInformation />);

    const handleContentChange = (component) => {
        setContent(component);
    };

    return (
        <div className="App">
            <NavBar onContentChange={handleContentChange} />
            <MainWindow>
                <Display content={content} />
            </MainWindow>
            <Footer />
        </div>
    );
};

export default App;
