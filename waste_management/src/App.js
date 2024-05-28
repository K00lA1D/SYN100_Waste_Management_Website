// App.js
import './style/App.css';
import React, { useState } from 'react';
import NavBar from './NavBar';
import MainWindow from './MainWindow';
import Display from './Display';
import Footer from './Footer';
import Home from './Home';
import BackgroundInformation from './BackgroundInformation';

const App = () => {
    const [content, setContent] = useState(<Home />);

    const handleContentChange = (component) => {
        setContent(component);
    };

    return (
        <div className="App">
            <NavBar onContentChange={handleContentChange} />
            {/*<Display content={content} >*/}
            <Display content={content} ></Display>
            <Footer />
        </div>
    );
};

export default App;
