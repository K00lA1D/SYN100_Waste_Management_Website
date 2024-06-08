import React, { useEffect, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';
import pharm from './pharm.mp4';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './style/MunicipalSolidWaste.css';
import PasswordModal from './PasswordModal';

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MunicipalSolidWaste = () => {
    const chartRef = useRef(null);
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

    const data = {
        labels: ['QTR 1', 'QTR 2', 'QTR 3', 'QTR 4'],
        datasets: [
            {
                label: 'CY2020',
                data: [907, 766, 833, 749],
                borderColor: 'blue',
                fill: false,
            },
            {
                label: 'CY2021',
                data: [897, 778, 939, 915],
                borderColor: 'green',
                fill: false,
            },
            {
                label: 'CY2022',
                data: [897, 931, 959, 976],
                borderColor: 'orange',
                fill: false,
            },
            {
                label: 'CY2023',
                data: [909, 1107, 909, 915],
                borderColor: 'red',
                fill: false,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Municipal Solid Waste Over Quarters',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
            legend: {
                position: 'top',
            },
        },
        interaction: {
            mode: 'nearest',
            intersect: true,
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Quarter',
                },
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Mass (tons)',
                },
            },
        },
    };

    useEffect(() => {
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    const handlePasswordCorrect = () => {
        setIsPasswordCorrect(true);
    };

    return (
        <div className="municipal">
            <video src={pharm} autoPlay loop muted />
            {!isPasswordCorrect && <PasswordModal onPasswordCorrect={handlePasswordCorrect} />}
            <div className={`municipal-solid-waste-container ${!isPasswordCorrect ? 'blurred' : ''}`}>
                <h2 className="municipal-solid-waste-title">Municipal Solid Waste Content</h2>
                <div className="chart-container">
                    <Line ref={chartRef} data={data} options={options} />
                </div>
                <p className="municipal-solid-waste-text">
                    This graph represents the mass in tons of municipal solid waste produced from UCSDH facilities per quarter for the calendar years of 2020-2023. As seen, 2023 had a large spike by quarter 2. Also, the mass produced seems to increase every calendar year.
                </p>
            </div>
        </div>
    );
};

export default MunicipalSolidWaste;
