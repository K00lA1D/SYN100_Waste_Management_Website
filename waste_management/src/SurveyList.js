// SurveyList.js
import React from 'react';

const SurveyList = ({ data }) => {
    return (
        <div className="survey-list">
            <ul>
                {data.responses.map((response, index) => (
                    <li key={index}>{response}</li>
                ))}
            </ul>
        </div>
    );
};

export default SurveyList;
