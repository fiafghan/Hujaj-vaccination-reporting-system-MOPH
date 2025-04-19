'use client';

import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import CoverPage from '@/app/components/CoverPage';
import PrefacePage from '@/app/components/Preface';


const COLORS = ['#10B981', '#3B82F6'];

const genderData = [
  { name: 'مرد', value: 170 },
  { name: 'زن', value: 130 },
];

const ageCategoryData = [
  { ageGroup: '۱۸-۳۵', male: 50, female: 100 },
  { ageGroup: '۳۶-۶۰', male: 120, female: 30 },
  { ageGroup: '۶۱-۱۰۰', male: 200, female: 205 },
];

export default function KabulReportPage() {
  const totalVaccinated = genderData.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="bg-white min-h-screen px-6 py-10" dir="rtl">
      <CoverPage />
      <PrefacePage />
      <div className="max-w-4xl mx-auto bg-white w-[794px] h-[1123px]">
        <h1 className="text-3xl font-bold text-green-700 text-center my-10">
          گزارش واکسین‌شده‌ها در زون هرات
        </h1>

        {/* Total Vaccinated Box */}
        <div className="bg-green-50 border border-green-300 p-6 rounded-2xl 
        shadow-md text-center mb-12">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">📌 مجموع واکسین‌شده‌ها</h2>
          <p className="text-5xl font-bold text-green-700">{totalVaccinated}</p>
        </div>

        {/* Gender Pie Chart */}
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl shadow-md mb-12">
          <h2 className="text-xl font-semibold text-gray-700 text-center mb-4">📊 تقسیم جنسیتی</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={genderData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
                dataKey="value"
              >
                {genderData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Age Category Bar Chart */}
        <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl shadow-md mb-12">
          <h2 className="text-xl font-semibold text-gray-700 text-center mb-4">
            📊 تقسیم سنی به تفکیک جنسیت
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ageCategoryData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="ageGroup" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="male" stackId="a" fill="#10B981" name="مرد" />
              <Bar dataKey="female" stackId="a" fill="#3B82F6" name="زن" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
}
