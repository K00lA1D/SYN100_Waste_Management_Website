import React, { useEffect, useRef } from 'react';
import lab_device from './lab_device.mp4';
import { Line } from 'react-chartjs-2';
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
import './style/MedicalWaste.css';

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

const MedicalWaste = () => {
    const chartRef = useRef(null);

    const data = {
        labels: ['QTR 1', 'QTR 2', 'QTR 3', 'QTR 4'],
        datasets: [
            {
                label: 'CY2020',
                data: [80, 49, 54, 51],
                borderColor: 'blue',
                fill: false,
            },
            {
                label: 'CY2021',
                data: [124, 109, 147, 151],
                borderColor: 'green',
                fill: false,
            },
            {
                label: 'CY2022',
                data: [139, 124, 132, 134],
                borderColor: 'orange',
                fill: false,
            },
            {
                label: 'CY2023',
                data: [172, 211, 154, 151],
                borderColor: 'red',
                fill: false,
            },
        ],
    };

    const newData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Hillcrest Medical Center',
                data: [28679, 26459, 27319, 27559, 28939, 29579, 27060, 28899, 26559, 31019, 26759, 26839],
                borderColor: 'purple',
                fill: false,
            },
            {
                label: 'La Jolla Jacobs Medical Center',
                data: [59520, 83000, 99019, 52540, 62380, 66320, 58700, 63960, 56480, 64240, 58020, 57160],
                borderColor: 'brown',
                fill: false,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Medical Waste Over Quarters',
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

    const newOptions = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Regulated Medical Waste (lbs) Over Months',
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
                    text: 'RMW (lbs)',
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
        <div className="medical-waste">
            <video src={lab_device} autoPlay loop muted />
            <div className="medical-waste-container">
                <h2 className="medical-waste-title">Medical Waste Content</h2>
                <div className="chart-container">
                    <Line ref={chartRef} data={data} options={options} />
                </div>
                <p className="medical-waste-text">
                    This graph represents the mass in tons of medical waste produced from UCSDH facilities per quarter for the calendar years of 2020-2023. Similar to the municipal solid data, there was a spike in waste produced for quarter 2 of 2023. There was a drastic increase in medical waste produced from 2020 to 2021.
                </p>
                <div className="chart-container">
                    <Line ref={chartRef} data={newData} options={newOptions} />
                </div>
                <p className="medical-waste-text">
                    This graph represents the cost in dollars to dispose of the hazardous waste produced per quarter of the calendar years of 2021-2023. There was a lack of data for 2021 and 2023. Calendar year 2022 had the least amount of cost for management of hazardous waste produced.
                </p>
            </div>
        </div>
    );
};

export default MedicalWaste;
