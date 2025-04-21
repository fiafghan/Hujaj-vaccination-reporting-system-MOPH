'use client';

import React, { useEffect, useState } from 'react';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { reportData, ZoneItem } from '@/data/reportData';
import PrefacePage from '@/app/components_2/PrefaceForGeneralReport';
import CoverPage from '@/app/components_2/CoverPageForGeneralReport';

// ثبت اجزای لازم برای chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const KabulDataPage: React.FC = () => {
  const [kabulData, setKabulData] = useState<ZoneItem[]>([]);

  useEffect(() => {
    // اطمینان از در دسترس بودن داده‌ها قبل از رندر صفحه
    const filteredData = reportData.zoneData.filter(item => item.zone === 'کابل');
    setKabulData(filteredData);
  }, []);

  // اگر داده‌ها در دسترس نیست، نمایش حالت بارگذاری
  if (kabulData.length === 0) {
    return <div className="text-center text-xl">در حال بارگذاری...</div>;
  }

  // آماده‌سازی داده‌ها برای نمودارها
  const totalPeople = kabulData.reduce((sum, item) => sum + item.total, 0);
  const male = kabulData.reduce((sum, item) => sum + item.male, 0);
  const female = kabulData.reduce((sum, item) => sum + item.female, 0);
  const ageCategories = {
    under18: kabulData.filter(item => item.ageCategory === 'under18').reduce((sum, item) => sum + item.total, 0),
    '19-29': kabulData.filter(item => item.ageCategory === '19-29').reduce((sum, item) => sum + item.total, 0),
    '30-50': kabulData.filter(item => item.ageCategory === '30-50').reduce((sum, item) => sum + item.total, 0),
    '50plus': kabulData.filter(item => item.ageCategory === '50plus').reduce((sum, item) => sum + item.total, 0),
  };

  const barChartData = {
    labels: ['مرد', 'زن'],
    datasets: [
      {
        label: 'توزیع جمعیت بر اساس جنسیت',
        data: [male, female],
        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const lineChartData = {
    labels: ['زیر 18', '19-29', '30-50', '50+'],
    datasets: [
      {
        label: 'توزیع سنی در کابل',
        data: [ageCategories.under18, ageCategories['19-29'], ageCategories['30-50'], ageCategories['50plus']],
        fill: false,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        tension: 0.1,
      },
    ],
  };

  const pieChartData = {
    labels: ['زیر 18', '19-29', '30-50', '50+'],
    datasets: [
      {
        data: [
          ageCategories.under18,
          ageCategories['19-29'],
          ageCategories['30-50'],
          ageCategories['50plus'],
        ],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverOffset: 4,
      },
    ],
  };

  const travelTypes = kabulData.reduce((acc, item) => {
    acc[item.travelType] = (acc[item.travelType] || 0) + item.total;
    return acc;
  }, {} as { [key: string]: number });

  const doughnutChartData = {
    labels: Object.keys(travelTypes),
    datasets: [
      {
        data: Object.values(travelTypes),
        backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#F2FF33'],
      },
    ],
  };

  return (
    <div className="bg-[#f8fafc] text-gray-900 flex items-center justify-center p-6">
      <CoverPage />
      <PrefacePage />
      <div className="src/app/components_2/Preface.tsx bg-white border border-gray-300 
      shadow-2xl rounded-lg p-8 flex flex-col space-y-8">
        <h1 className="text-3xl font-semibold text-center">گزارش کابل</h1>
        <p className="text-lg text-center">تعداد کل افراد: {totalPeople}</p>
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-medium">توزیع جنسیتی</h3>
            <div className="w-80 mx-auto">
              <Bar data={barChartData} />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-medium">توزیع سنی</h3>
            <div className="w-80 mx-auto">
              <Line data={lineChartData} />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-medium">توزیع گروه‌های سنی (نمودار دایره‌ای)</h3>
            <div className="w-60 mx-auto">
              <Pie data={pieChartData} />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-medium">توزیع نوع سفر (نمودار دونات)</h3>
            <div className="w-60 mx-auto">
              <Doughnut data={doughnutChartData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KabulDataPage;
