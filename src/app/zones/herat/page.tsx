"use client"

import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js'
import { reportData, ZoneItem } from '@/data/reportData'

import CoverPage from '@/app/components_2/CoverPageForGeneralReport'
import PrefacePage from '@/app/components_2/PrefaceForGeneralReport'

import { BarChartComponent } from '@/components/ui/BarChart'
import PieChart2 from '@/components/ui/PieChart2Wrapper'
import { LineChart1 } from '@/components/ui/LineChart1'

import dynamic from 'next/dynamic';

const PieChartComponent = dynamic(() =>
  import('@/components/ui/PieChartAll').then((mod) => mod.PieChartComponent), // or mod.YourNamedExport
  { ssr: false }
);

// Register chart.js modules
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
)

const HeratDataPage: React.FC = () => {
  const [heratData, setHeratData] = useState<ZoneItem[]>([])

  useEffect(() => {
    // Filter data for Herat zone
    const filteredData = reportData.zoneData.filter(item => item.zone === 'هرات')
    setHeratData(filteredData)
  }, [])

  const travelTypes = heratData.reduce((acc, item) => {
    acc[item.travelType] = (acc[item.travelType] || 0) + item.total
    return acc
  }, {} as { [key: string]: number })

  return (
    <div className="bg-[#f8fafc] text-gray-900 flex flex-col items-center justify-center space-y-10 py-8 px-4">
      
      {/* Cover and Preface Pages */}
      <CoverPage />
      <PrefacePage />

      {/* Main Report Card */}
      <div className="w-[794px] min-h-[1123px] bg-white border border-gray-300 shadow-2xl rounded-lg p-10 flex flex-col space-y-8" dir="rtl">
        <h1 className="text-3xl font-bold text-center text-green-800">گزارش زون هرات</h1>
        <p className="text-lg text-center text-gray-600">تعداد کل افراد: 1000</p>

        {/* Gender Chart */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-center">توزیع جنسیتی</h3>
          <div className="w-80 mx-auto">
            <BarChartComponent
              maleNumber={170}
              femaleNumber={130}
              title="تعداد زنان و مردان"
              description="تعداد زنان و مردان که از زون هرات کارت دریافت کرده اند."
            />
          </div>
        </section>

        {/* Age Categories Chart */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-center">بر اساس کتگوری سنی</h3>
          <PieChartComponent
            categories={[
              { name: "زیر 18 سال", value: 50 },
              { name: "18 - 29", value: 150 },
              { name: "30-50", value: 100 },
            ]}
            total={670}
            title="توزیع سنی افراد"
          />
        </section>
      </div>

      {/* Travel Type PieChart2 */}
      <div className="w-[794px] bg-white border border-gray-300 shadow-2xl rounded-lg p-10 flex flex-col space-y-8" dir="rtl">
        <h3 className="text-2xl font-semibold text-center text-green-800">انواع سفرها</h3>
        <PieChart2
          categories={[
            { name: "حج عمره", value: 300 },
            { name: "حج فرضی", value: 500 },
            { name: "سفر عادی", value: 1000 },
          ]}
          title="چارت مقایسه سفر ها بر اساس نوعیت آنها"
          description="در چارت زیر طوریکه مشاهده می‌کنید، تعداد سفرها بر اساس نوعیت آنها نمایش داده شده است."
        />
      </div>

      {/* Line Chart of Destinations */}
      <div className="w-[794px] bg-white border border-gray-300 shadow-2xl rounded-lg p-10 flex flex-col space-y-8" dir="rtl">
        <h3 className="text-2xl font-semibold text-center text-green-800">نمودار مقاصد</h3>
        <LineChart1
          title="نمودار مقاصد"
          description="نمایش تعداد بازدیدکنندگان به تفکیک کشور"
          destinations={[
            { country: "عربستان", value: 120 },
            { country: "ایران", value: 80 },
            { country: "ترکیه", value: 150 },
            { country: "آلمان", value: 200 },
            { country: "هند", value: 170 },
          ]}
        />
      </div>
    </div>
  )
}

export default HeratDataPage
