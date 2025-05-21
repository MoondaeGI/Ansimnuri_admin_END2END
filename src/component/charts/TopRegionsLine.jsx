import React, { useEffect, useState } from 'react';

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
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const TopRegionsLine = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: '조회수',
        data: [],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
        stack: 'Stack 0',
      },
    ],
  });

  useEffect(() => {
    // 더미 데이터
    const dummyData = [
      { keyword: '지구대/경찰서 안내', count: 120 },
      { keyword: '최근 범죄뉴스 TOP3', count: 95 },
      { keyword: '안전한 귀가 경로 추천', count: 130 },
      { keyword: '범죄피해 대처 요령', count: 85 },
      { keyword: '범죄피해 지원 제도', count: 70 },
      { keyword: '자주 묻는 질문 (FAQ)', count: 100 },
    ];

    const labels = dummyData.map((item) => item.keyword);
    const counts = dummyData.map((item) => item.count);

    setChartData({
      labels: labels,
      datasets: [
        {
          label: '조회수',
          data: counts,
          borderColor: 'rgba(75,192,192,1)',
          backgroundColor: 'rgba(75,192,192,0.2)',
          fill: true,
          stack: 'Stack 0',
        },
      ],
    });
  }, []);

  const options = {
    maintainAspectRatio: true,
    plugins: {
      title: {
        display: true,
        text: '가장 많은 질문 키워드',
      },
      legend: { position: 'top' },
    },
    scales: {
      y: {
        stacked: true,
        beginAtZero: true,
      },
    },
    responsive: true,
  };

  return <Line data={chartData} options={options} height={300} />;
};
