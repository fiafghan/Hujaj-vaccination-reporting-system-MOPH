'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '../components_2/header';
import { reportData } from '@/data/reportData';
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  LineChart, Line, ResponsiveContainer
} from 'recharts';
import CoverPage from '../components_2/CoverPage';
import PrefacePage from '../components_2/Preface';
import { PieChartFullReport } from '@/components/ui/pie_chart_full_report';
import { BarChartFullReport } from '@/components/ui/barChartFullReport';
import { ZoneGenderBarChart } from '@/components/ui/barChartFullReportZoneFemaleMale';

export default function FullReportPage() {
  const searchParams = useSearchParams();
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');
  const generatedBy = 'فردین ابراهیمی';

  const ageData = [
    { name: 'زیر سن 18', value: reportData.under_18 },
    { name: '19-29', value: reportData.age_19_29 },
    { name: '30-50', value: reportData.age_30_50 },
    { name: 'بالای 50 سال', value: reportData.age_over_50 },
  ];

  const zoneData = reportData.zoneData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white">
      <Header />

      <CoverPage
        generatedBy="فردین ابراهیمی"
        reportDate="30 حمل 1404"
        reportType="گزارش عمومی"
        startDate="30 جدی 1403"
        endDate="30 حمل 1404"
      />

      <PrefacePage
        authorName="فردین ابراهیمی"
        date="30 حمل 1404"
        position="آمر معافیت کتلوی"
      />

      <div className="bg-white min-h-screen p-5" dir="rtl">
        <div className="max-w-4xl mx-auto w-[794px] h-[1123px] flex flex-col justify-between relative">
          <div className="bg-green-50 border p-6 text-green-800 text-right">
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3">📊 خلاصه گزارش</h3>
              <ul className="list-disc pr-5">
                <li>تعداد مجموعی افراد: {reportData.totalPeople}</li>
                <li>مردان: {reportData.male} نفر</li>
                <li>زنان: {reportData.female} نفر</li>
                <li>زیر سن 18: {reportData.under_18} نفر</li>
                <li>19-29: {reportData.age_19_29} نفر</li>
                <li>30-50: {reportData.age_30_50} نفر</li>
                <li>بالای 50 سال: {reportData.age_over_50} نفر</li>
              </ul>

              <div className="mt-10">
                <PieChartFullReport />
              </div>

              <div className="mt-10">
                <BarChartFullReport />
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
                  <ZoneGenderBarChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
