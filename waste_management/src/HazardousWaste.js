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
import './style/HazardousWaste.css';

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

const HazardousWaste = () => {
    const chartRef = useRef(null);

    const data = {
        labels: ['QTR 1', 'QTR 2', 'QTR 3', 'QTR 4'],
        datasets: [
            {
                label: 'CY2021',
                data: [32748, 33766, 16098, null],
                borderColor: 'green',
                fill: false,
                spanGaps: true,
            },
            {
                label: 'CY2022',
                data: [22490, 17603, 12420, 26556],
                borderColor: 'orange',
                fill: false,
                spanGaps: true,
            },
            {
                label: 'CY2023',
                data: [29800, 31603, null, null],
                borderColor: 'red',
                fill: false,
                spanGaps: true,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Hazardous Waste Cost Over Quarters',
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
                    text: 'Cost in Dollars',
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
        <div className="hazardous-waste-container">
            <h2 className="hazardous-waste-title">Hazardous Waste Content</h2>
            <div className="chart-container">
                <Line ref={chartRef} data={data} options={options} />
            </div>
        </div>
    );
};

export default HazardousWaste;
