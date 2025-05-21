
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export const TopKeywordsDoughnut = ({ keywords }) => {
  const labels = keywords.map(k => k.keyword);
  const values = keywords.map(k => k.count);

  const data = {
    labels,
    datasets: [
      {
        label: '조회수',
        data: values,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    maintainAspectRatio:false,
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: '가장 많이 가입된 지역' },
    },
  };

  return <Doughnut data={data} options={options} />;
};
