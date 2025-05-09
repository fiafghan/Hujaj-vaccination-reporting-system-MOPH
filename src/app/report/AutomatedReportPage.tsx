"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { BarChartComponent } from '@/components/ui/BarChart';
import PieChart2 from '@/components/ui/PieChart2Wrapper';
import { LineChart1 } from '@/components/ui/LineChart1';
import CoverPageForAutomatedReport from './CoverPageForAutomatedReport';
import PrefacePage from './PrefaceForAutomatedReport';

// Dynamically load the PieChartComponent
const PieChartComponent = dynamic(() =>
  import('@/components/ui/PieChartAll').then((mod) => mod.PieChartComponent),
  { ssr: false }
);

interface ReportProps {
  zoneName: string;
  totalPeople: number;
  genderData: { maleNumber: number; femaleNumber: number };
  ageCategories: { name: string; value: number }[];
  travelTypes: { [key: string]: number };
  destinationData: { country: string; value: number }[];
}

const AutomatedReportPage: React.FC<ReportProps> = ({
  zoneName,
  totalPeople,
  genderData,
  ageCategories,
  travelTypes,
  destinationData
}) => {
  return (
    <div className="bg-[#f8fafc] text-gray-900 flex flex-col items-center justify-center space-y-10 py-8 px-4">
      {/* Cover and Preface Pages */}
      <CoverPageForAutomatedReport />
      <PrefacePage />

      {/* Main Report Card */}
      <div className="w-[794px] min-h-[1123px] bg-white border border-gray-300 shadow-2xl rounded-lg p-10 flex flex-col space-y-8" dir="rtl">
        <h1 className="text-3xl font-bold text-center text-green-800">{`گزارش زون ${zoneName}`}</h1>
        <p className="text-lg text-center text-gray-600">{`تعداد کل افراد: ${totalPeople}`}</p>

        {/* Gender Chart */}
        {genderData && (
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-center">توزیع جنسیتی</h3>
            <div className="w-80 mx-auto">
              <BarChartComponent
                maleNumber={genderData.maleNumber}
                femaleNumber={genderData.femaleNumber}
                title="تعداد زنان و مردان"
                description={`تعداد زنان و مردان که از زون ${zoneName} کارت دریافت کرده اند.`}
              />
            </div>
          </section>
        )}

        {/* Age Categories Chart */}
        {ageCategories.length > 0 && (
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-center">بر اساس کتگوری سنی</h3>
            <PieChartComponent
              categories={ageCategories}
              total={totalPeople}
              title="توزیع سنی افراد"
            />
          </section>
        )}
      </div>

      {/* Travel Type PieChart2 */}
      {Object.keys(travelTypes).length > 0 && (
        <div className="w-[794px] bg-white border border-gray-300 shadow-2xl rounded-lg p-10 flex flex-col space-y-8" dir="rtl">
          <h3 className="text-2xl font-semibold text-center text-green-800">انواع سفرها</h3>
          <PieChart2
            categories={Object.entries(travelTypes).map(([name, value]) => ({ name, value }))}
            title="چارت مقایسه سفر ها بر اساس نوعیت آنها"
            description="در چارت زیر طوریکه مشاهده می‌کنید، تعداد سفرها بر اساس نوعیت آنها نمایش داده شده است."
          />
        </div>
      )}

      {/* Line Chart of Destinations */}
      {destinationData.length > 0 && (
        <div className="w-[794px] bg-white border border-gray-300 shadow-2xl rounded-lg p-10 flex flex-col space-y-8" dir="rtl">
          <h3 className="text-2xl font-semibold text-center text-green-800">نمودار مقاصد</h3>
          <LineChart1
            title="نمودار مقاصد"
            description="نمایش تعداد بازدیدکنندگان به تفکیک کشور"
            destinations={destinationData}
          />
        </div>
      )}
    </div>
  );
};

export default AutomatedReportPage;
