// // GenderBarChart.jsx
// import React from 'react';
// import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement,
//   Title, Tooltip, Legend,} from 'chart.js';
// import { Line } from 'react-chartjs-2';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// export const GenderBarChart = () => {
//   const labels = ['10대', '20대', '30대', '40대', '50대', '60대 이상'];

//   const data = {
//     labels,
//     datasets: [
//       {
//         label: '남성 피해자 수',
//         data: [20, 35, 30, 25, 15, 10],
//         borderColor: 'rgba(54, 162, 235, 0.7)',
//         backgroundColor: 'rgba(54, 162, 235, 0.3)',
//         yAxisID: 'y',
//         tension: 0.4,
//       },
//       {
//         label: '여성 피해자 수',
//         data: [25, 40, 35, 20, 10, 5],
//         borderColor: 'rgba(255, 99, 132, 0.7)',
//         backgroundColor: 'rgba(255, 99, 132, 0.3)',
//         yAxisID: 'y1',
//         tension: 0.4,
//       },
//     ],
//   };

//   const options = {
//     maintainAspectRatio:false,
//     responsive: true,
//     interaction: {
//       mode: 'index',
//       intersect: false,
//     },
//     stacked: false,
//     plugins: {
//       title: {
//         display: true,
//         text: '연령대별 남성/여성 피해자 수',
//       },
//       legend: {
//         position: 'top',
//       },
//       tooltip: {
//         mode: 'index',
//         intersect: false,
//       },
//     },
//     scales: {
//       y: {
//         type: 'linear',
//         display: true,
//         position: 'left',
//         title: {
//           display: true,
//         },
//       },
//       y1: {
//         type: 'linear',
//         display: true,
//         position: 'right',
//         grid: {
//           drawOnChartArea: false,
//         },
//         title: {
//           display: true,
          
//         },
//       },
//       x: {
//         title: {
//           display: true,
          
//         },
//       },
//     },
//   };

//   return <Line data={data} options={options} />;
// };
