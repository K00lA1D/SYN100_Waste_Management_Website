import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ChartDataLabels
);

const SurveyChart = ({ data }) => {
    const chartData = {
        labels: data.responseLabels,
        datasets: [
            {
                label: data.label,
                data: data.values,
                backgroundColor: data.backgroundColor,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => `${data.responseLabels[tooltipItem.dataIndex]}: ${tooltipItem.raw}`
                }
            },
            datalabels: {
                display: true,
                color: 'white',
                formatter: (value, context) => {
                    const total = context.dataset.data.reduce((sum, current) => sum + current, 0);
                    const percentage = ((value / total) * 100).toFixed(1);
                    return `${percentage}%`;
                },
            }
        }
    };

    return <Pie data={chartData} options={options} />;
};

export default SurveyChart;
