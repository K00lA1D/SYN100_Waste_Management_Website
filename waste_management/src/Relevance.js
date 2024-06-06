import React, { useEffect, useState } from 'react';
import './style/Relevance.css';
import Clouds from './clouds.mp4';
import SurveyChart from './SurveyChart';
import SurveyList from './SurveyList';
import { fetchGoogleSheet } from './fetchGoogleSheet';

const spreadsheetId = '1_oJBUJol8Lz1am5Beejy0FZoywtaCEkXCH33191YkO8'; // Use the correct spreadsheet ID
const range = 'Form Responses 1!A1:L900'; // Adjust the range based on your data
const apiKey = 'AIzaSyCw8V9gPofljAaQV6UO_HeTbGRVK3jNrvk'; // Replace with your actual API key

const Relevance = () => {
    const [surveyData, setSurveyData] = useState(null);

    const getSurveyData = async () => {
        const values = await fetchGoogleSheet(spreadsheetId, range, apiKey);
        if (values) {
            console.log('Fetched data:', values); // Log the fetched data for debugging

            const labels = values[0].slice(1); // Get the column headers starting from the second column
            const data = values.slice(1).map(row => row.slice(1)); // Get the data rows starting from the second column

            // Manually create the data for each section
            const questionData = labels.map((label, index) => {
                const responses = data.map(row => row[index]).filter(value => value !== undefined && value !== '');
                const responseCounts = responses.reduce((acc, response) => {
                    acc[response] = (acc[response] || 0) + 1;
                    return acc;
                }, {});
                const uniqueResponses = Object.keys(responseCounts);
                const frequencies = Object.values(responseCounts);

                return {
                    label,
                    values: frequencies,
                    responseLabels: uniqueResponses,
                    responses: responses, // Add raw responses for list display
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40']
                };
            });

            questionData.forEach((question, index) => {
                console.log(`Question ${index + 1} - Label:`, question.label);
                console.log(`Question ${index + 1} - Values:`, question.values);
                console.log(`Question ${index + 1} - Response Labels:`, question.responseLabels);
            });

            setSurveyData(questionData);
        } else {
            console.error('No data returned from fetchGoogleSheet');
        }
    };

    useEffect(() => {
        getSurveyData();
    }, []);

    return (
        <div className="relevance">
            <video src={Clouds} autoPlay loop muted />
            <div className="relevance-container">
                <h2>Understanding Waste and Its Impact</h2>
                <p>
                    A large majority of UC San Diego students are either pursuing pre-health or research professions. Amongst these professions, there will be a large dependence on producing medical or hazardous waste. Our goal for this site is to make the waste development at UC San Diego Health more transparent by showcasing the amount of waste that is produced alongside the costs of managing the waste.
                </p>
                <p>
                    Creating this sense of transparency will hopefully create a sense of awareness and urgency amongst the pre-health/research community of students as they will be the future of these health institutions and thus will be the ones with the power to change it. To get a sense of the current knowledge and drive of pre-health and research-oriented students, we created and conducted a survey. Here are the live results:
                </p>
                <button onClick={getSurveyData}>Refresh Data</button>
                {surveyData ? (
                    <>
                        {surveyData.map((data, index) => (
                            <div key={index} className="chart-container">
                                <h3>{data.label}</h3>
                                {(data.label === 'What is the specific path/journey that you wish to pursue?' ||
                                  data.label === 'What is your major?') ? (
                                    <SurveyList data={data} />
                                ) : (
                                    <SurveyChart data={data} type="pie" />
                                )}
                            </div>
                        ))}
                    </>
                ) : (
                    <p>Loading...</p>
                )}
                <p>
                    To fill out the survey: <a href="https://docs.google.com/forms/d/e/1FAIpQLSfxoX-A9jMbXIg2-9g3e25obsAXKnL4dhD98bJEcpMJuUe3tw/viewform" target="_blank" rel="noopener noreferrer">Survey Link</a>
                </p>
            </div>
        </div>
    );
};

export default Relevance;
