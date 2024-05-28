// Relevance.js
import React from 'react';
import './style/Relevance.css';
import Survey1 from './survey1.png'
import Survey2 from './survey2.png'
import Survey3 from './survey3.png'
import Survey4 from './survey4.png'
import Survey5 from './survey5.png'
import Survey6 from './survey6.png'
import Clouds from './clouds.mp4';

const Relevance = () => {
    return (
        <div className="relevance">
            <video src={Clouds} autoPlay loop muted />
            <div className="relevance-container">
                <h2>Understanding Waste and Its Impact</h2>
                <p>
                    A large majority of UC San Diego students are either pursuing pre-health or research professions. Amongst these professions, there will be a large dependence on producing medical or hazardous waste. Our goal for this site is to make the waste development at UC San Diego Health more transparent by showcasing the amount of waste that is produced alongside the costs of managing the waste.
                </p>
                <p>
                    Creating this sense of transparency will hopefully create a sense of awareness and urgency amongst the pre-health/research community of students as they will be the future of these health institutions and thus will be the ones with the power to change it. To get a sense of the current knowledge and drive of pre-health and research-oriented students, we created and conducted a survey. These are the following results:
                </p>
                <p>All respondents stated that their future profession involves working in a medical facility.</p>
                <img src={Survey1} alt="Survey Results 1" />
                <p>Based on these results, almost all respondents had awareness that their future career will even involve a moderate-large amount of medical or hazardous waste.</p>
                <img src={Survey2} alt="Survey Results 2" />

                <h2>The Significance of Medical Waste Management</h2>
                <p>
                    While respondents were aware of their future involvement with medical and hazardous waste, a large majority had little to no knowledge on how current medical and hazardous waste is being managed.
                </p>
                <img src={Survey3} alt="Survey Results 3" />
                <p>
                    All respondents acknowledged that they think it is important to learn how waste is managed in their future professional schools.
                </p>
                <img src={Survey4} alt="Survey Results 4" />
                <p>Based on this bar chart results, most respondents are highly likely to be waste conscious.</p>
                <img src={Survey5} alt="Survey Results 5" />

                <h2>Importance and Affected Parties</h2>
                <p>
                    Most respondents would favor minimizing the amount of waste produced by using reusable materials.
                </p>
                <img src={Survey6} alt="Survey Results 6" />
                <p>
                    While respondents seemed fairly interested in understanding how waste is managed and its overall importance, only 40% of respondents stated they would be willing to put in only one hour of their time. This shows that respondents do care about the issue at hand, but because they are not quite informed on its issue, they may not think that it is as large of a problem and would not be willing to put in a tiny portion of their day to learn more about how they can be more waste conscious.
                </p>
                <p>
                    To fill out the survey: <a href="https://docs.google.com/forms/d/e/1FAIpQLSfxoX-A9jMbXIg2-9g3e25obsAXKnL4dhD98bJEcpMJuUe3tw/viewform" target="_blank" rel="noopener noreferrer">Survey Link</a>
                </p>
            </div>
        </div>
    );
};

export default Relevance;
