// App.js
import './style/App.css';
import React, { useState } from 'react';
import NavBar from './NavBar';
import Display from './Display';
import Home from './Home';

const App = () => {
    const [content, setContent] = useState(<Home />);

    const handleContentChange = (component) => {
        setContent(component);
    };

    return (
        <div className="App">
            <NavBar onContentChange={handleContentChange} />
            <Display content={content} ></Display>
        </div>
    );
};

export default App;
