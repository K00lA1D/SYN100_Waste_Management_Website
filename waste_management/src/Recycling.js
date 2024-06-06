import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import recycling from './recycling.mp4';
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
import './style/Recycling.css';

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

const Recycling = () => {
    const chartRef = useRef(null);

    const data = {
        labels: ['QTR 1', 'QTR 2', 'QTR 3', 'QTR 4'],
        datasets: [
            {
                label: 'CY2020',
                data: [516, 547, 544, 648],
                borderColor: 'blue',
                fill: false,
            },
            {
                label: 'CY2021',
                data: [329, 336, 378, 322],
                borderColor: 'green',
                fill: false,
            },
            {
                label: 'CY2022',
                data: [320, 329, 319, 303],
                borderColor: 'orange',
                fill: false,
            },
            {
                label: 'CY2023',
                data: [307, 305, 167, 303],
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
                text: 'Recycling Over Quarters',
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
        <div className="recycling">
            <video src={recycling} autoPlay loop muted />
            <div className="recycling-container">
                <h2 className="recycling-title">Recycling Content</h2>
                <div className="chart-container">
                    <Line ref={chartRef} data={data} options={options} />
                </div>
                <p className="recycling-text">
                    This graph portrays the amount of recycling by mass (tons) per quarter for the calendar years of 2020-2023. UCSDH had almost twice the amount of recycling in 2020 which seemed to drastically decrease in 2021. From then on, the amount of recycling has decreased per year.
                </p>
            </div>
        </div>
    );
};

export default Recycling;
