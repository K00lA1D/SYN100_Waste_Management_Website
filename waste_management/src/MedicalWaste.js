import React, { useEffect, useRef } from 'react';
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

    useEffect(() => {
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    return (
        <div className="medical-waste-container">
            <h2 className="medical-waste-title">Medical Waste Content</h2>
            <div className="chart-container">
                <Line ref={chartRef} data={data} options={options} />
            </div>
        </div>
    );
};

export default MedicalWaste;
