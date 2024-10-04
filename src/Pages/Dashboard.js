import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend } from "chart.js";

// Register the required chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend);

const Dashboard = () => {
    // Data for the Bar Chart
    const barChartData = {
        labels: ['JavaScript', 'Python', 'Java', 'C#', 'PHP', 'Ruby'],
        datasets: [
            {
                label: 'Number of Members',
                data: [150, 120, 180, 100, 80, 50],
                backgroundColor: 'rgba(75, 192, 192, 0.7)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    // Options for the Bar Chart
    const barChartOptions = {
        responsive: true,
        maintainAspectRatio: false, // Important for controlling height
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'EMPLOYEES SKILL WISE DISTRIBUTION',
                    font: {
                        size: 10
                    }
                },
                ticks: {
                    font: {
                        size: 12
                    }
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Programming Languages',
                    font: {
                        size: 12
                    }
                },
                ticks: {
                    font: {
                        size: 12
                    }
                }
            },
        },
        plugins: {
            legend: {
                display: false
            },
        },
    };

    // Data for the Doughnut Chart
    const doughnutChartData = {
        labels: ['JavaScript', 'Python', 'Java', 'C#', 'PHP', 'Ruby'],
        datasets: [
            {
                label: 'Number of Members',
                data: [150, 120, 180, 100, 80, 50],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                ],
                hoverOffset: 4,
            },
        ],
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-8 text-center text-[#172554]">Dashboard</h1>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                {/* Bar Chart Section */}
                <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg h-3/4">
                    <h2 className="text-md font-semibold mb-4 text-center">SKILL WISE DISTRIBUTION Top 6 SKILLS</h2>
                    <div className="h-80">
                        <Bar data={barChartData} options={barChartOptions} />
                    </div>
                </div>

                {/* Doughnut Chart Section */}
                <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg h-3/4">
                    <h2 className="text-md font-semibold mb-4 text-center">YEAR WISE - TALENT POOL EXPERIENCE</h2>
                    <div className="h-80">
                        <Doughnut data={doughnutChartData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
