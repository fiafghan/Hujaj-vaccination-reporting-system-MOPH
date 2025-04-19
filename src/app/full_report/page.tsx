'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '../components/header';
import { reportData } from '@/data/reportData';
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  LineChart, Line,ResponsiveContainer
} from 'recharts';
import CoverPage from '../components/CoverPage';
import PrefacePage from '../components/Preface';

export default function FullReportPage() {
  const searchParams = useSearchParams();
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');
  const generatedBy = 'فردین ابراهیمی';

  const {
    totalPeople,
    male,
    female,
    age_18_35,
    age_36_60,
    age_61_100,
    zoneData,
  } = reportData;

  const handlePrint = () => {
    window.print();
  };

  const ageData = [
    { name: '۱۸-۳۵', value: age_18_35 },
    { name: '۳۶-۶۰', value: age_36_60 },
    { name: '۶۱-۱۰۰', value: age_61_100 },
  ];

  const genderRadarData = [
    { subject: 'مردان', A: male, fullMark: totalPeople },
    { subject: 'زنان', A: female, fullMark: totalPeople },
  ];

  return (
    <div className = "bg-white">
      <Header />

          <CoverPage
            generatedBy = "فردین ابراهیمی"
            reportDate='30 حمل 1404'
            reportType='گزارش عمومی'
            startDate= "30 جدی 1403"
            endDate="30 حمل 1404"
          />

          <PrefacePage
          authorName='فردین ابراهیمی'
          date='30 حمل 1404'
          position='آمر معافیت کتلوی'
          />

      <div className="bg-white min-h-screen p-5 " dir="rtl">
        <div className="max-w-4xl mx-auto w-[794px] h-[1123px]
      flex flex-col justify-between relative">
          <div className="bg-green-50 border  p-6 text-green-800 text-right">

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">📊 خلاصه گزارش</h3>
              <ul className="list-disc pr-5">
                <li>تعداد مجموعی افراد: {totalPeople}</li>
                <li>مردان: {male} نفر</li>
                <li>زنان: {female} نفر</li>
                <li>گروه سنی ۱۸-۳۵: {age_18_35} نفر</li>
                <li>گروه سنی ۳۶-۶۰: {age_36_60} نفر</li>
                <li>گروه سنی ۶۱-۱۰۰: {age_61_100} نفر</li>
              </ul>

              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-3 text-green-800 text-right">📊 نمودار جنسیت</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'مردان', value: male },
                        { name: 'زنان', value: female },
                      ]}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#38a169"
                      label
                    >
                      <Cell fill="#3182ce" />
                      <Cell fill="#e53e3e" />
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-3 text-green-800 text-right">📊 نمودار گروه‌های سنی</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={ageData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#38a169" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-3 text-green-800 text-right">📈 نمودار خطی تغییرات سنی</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={ageData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

           

              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-3">🗺️ گزارش بر اساس زون ها</h3>
                <table className="w-full text-right border border-green-300">
                  <thead>
                    <tr className="bg-green-200">
                      <th className="p-2 border border-green-300">ولایت</th>
                      <th className="p-2 border border-green-300">مجموع</th>
                      <th className="p-2 border border-green-300">مردان</th>
                      <th className="p-2 border border-green-300">زنان</th>
                    </tr>
                  </thead>
                  <tbody>
                    {zoneData.map((zone, index) => (
                      <tr key={index} className="hover:bg-green-100">
                        <td className="p-2 border border-green-300">{zone.zone}</td>
                        <td className="p-2 border border-green-300">{zone.total}</td>
                        <td className="p-2 border border-green-300">{zone.male}</td>
                        <td className="p-2 border border-green-300">{zone.female}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="mt-10">
                  <h3 className="text-xl font-semibold mb-3 text-green-800 text-right">🗺️ نمودار گزارش بر اساس ولایات</h3>
                  <ResponsiveContainer width="100%" height={350}>
                    <BarChart
                      data={zoneData}
                      margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="zone" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="male" stackId="a" fill="#3182ce" name="مردان" />
                      <Bar dataKey="female" stackId="a" fill="#e53e3e" name="زنان" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
