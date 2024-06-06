import React, { useEffect, useRef } from 'react';
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
import './style/PharmaceuticalWaste.css';

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

const PharmaceuticalWaste = () => {
    const chartRef = useRef(null);

    const newData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Hillcrest Medical Center',
                data: [2820, 2540, 2660, 2180, 2600, 4000, 3100, 2580, 2660, 3540, 2460, 3300],
                borderColor: 'purple',
                fill: false,
            },
            {
                label: 'La Jolla Jacobs Medical Center',
                data: [6779, 6499, 7299, 6039, 8119, 7759, 6999, 8059, 7519, 8079, 7459, 8380],
                borderColor: 'brown',
                fill: false,
            },
        ],
    };

    const newOptions = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Regulated Pharmaceutical Waste (lbs) Over Months',
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
                    text: 'Month',
                },
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Pharm (lbs)',
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

    return (
        <div className="pharmaceutical-waste">
            <video src={pharm} autoPlay loop muted />
            <div className="pharmaceutical-waste-container">
                <h2 className="pharmaceutical-waste-title">Pharmaceutical Waste Content</h2>
                <div className="chart-container">
                    <Line ref={chartRef} data={newData} options={newOptions} />
                </div>
                <p className="pharmaceutical-waste-text">
                    This graph represents the mass in tons of municipal solid waste produced from UCSDH facilities per quarter for the calendar years of 2020-2023. As seen, 2023 had a large spike by quarter 2. Also, the mass produced seems to increase every calendar year.
                </p>
            </div>
        </div>
    );
};

export default PharmaceuticalWaste;
