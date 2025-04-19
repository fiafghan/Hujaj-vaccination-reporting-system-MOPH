'use client'; // اینجا برای مشخص کردن که این کامپوننت باید در سمت کلاینت رندر شود

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import CustomReportHeader from '../../components_2/custom_report_header';
import CustomReportFooter from '@/app/components_2/custom_report_footer';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const MaleReport = () => {
  const reportData = {
    totalPeople: 1200,
    male: 700,
    female: 500,
    age_18_35: 500,
    age_36_60: 400,
    age_61_100: 300,
    zoneData: [
      { zone: 'کابل', total: 400, male: 250, female: 150 },
      { zone: 'هرات', total: 300, male: 170, female: 130 },
      { zone: 'کندهار', total: 200, male: 100, female: 100 },
      { zone: 'مزار شریف', total: 300, male: 180, female: 120 },
    ],
  };

  // گراف 1: توزیع سنی مردان
  const maleAgeData = {
    labels: ['۱۸-۳۵', '۳۶-۶۰', '۶۱-۱۰۰'],
    datasets: [
      {
        label: 'توزیع سنی مردان',
        data: [
          reportData.age_18_35 * (reportData.male / reportData.totalPeople),
          reportData.age_36_60 * (reportData.male / reportData.totalPeople),
          reportData.age_61_100 * (reportData.male / reportData.totalPeople),
        ],
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        borderColor: 'rgba(34, 197, 94, 1)',
        borderWidth: 1,
      },
    ],
  };

  // گراف 2: توزیع مردان در مناطق مختلف
  const maleZoneData = {
    labels: reportData.zoneData.map((zone) => zone.zone),
    datasets: [
      {
        label: 'مردان به تفکیک مناطق',
        data: reportData.zoneData.map((zone) => zone.male),
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        borderColor: 'rgba(34, 197, 94, 1)',
        borderWidth: 1,
      },
    ],
  };

  // گراف 3: مردان در مقابل زنان
  const maleVsFemaleData = {
    labels: ['مردان', 'زنان'],
    datasets: [
      {
        label: 'مردان در مقابل زنان',
        data: [reportData.male, reportData.female],
        backgroundColor: ['rgba(34, 197, 94, 0.2)', 'rgba(255, 255, 255, 0.2)'],
        borderColor: ['rgba(34, 197, 94, 1)', 'rgba(255, 255, 255, 1)'],
        borderWidth: 1,
      },
    ],
  };

  // گراف 4: تعداد مردان در هر منطقه
  const maleInZonesData = {
    labels: reportData.zoneData.map((zone) => zone.zone),
    datasets: [
      {
        label: 'تعداد مردان در هر منطقه',
        data: reportData.zoneData.map((zone) => zone.male),
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        borderColor: 'rgba(34, 197, 94, 1)',
        borderWidth: 1,
      },
    ],
  };

  // گراف 5: جمعیت مردان در مقابل جمعیت کل
  const totalMaleVsTotalData = {
    labels: ['جمعیت کل', 'جمعیت مردان'],
    datasets: [
      {
        label: 'مردان در مقابل جمعیت کل',
        data: [reportData.totalPeople, reportData.male],
        backgroundColor: ['rgba(255, 255, 255, 0.2)', 'rgba(34, 197, 94, 0.2)'],
        borderColor: ['rgba(255, 255, 255, 1)', 'rgba(34, 197, 94, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto py-16 px-6 md:px-10 bg-white min-h-screen" dir="rtl">
        <CustomReportHeader
          reportType="جنسیت - ذکور"
          title="گزارش واکسناسیون حجاج"
          generatedBy="مرسل احمدی"
          subtitle="ریاست معافیت کتلوی"
        />
        <h1 className="text-2xl font-bold mb-4 text-green-600">گزارش جمعیت مردان</h1>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-green-600">توزیع سنی مردان</h3>
            <Bar data={maleAgeData} />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-green-600">توزیع مردان در مناطق مختلف</h3>
            <Bar data={maleZoneData} />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-green-600">مردان در مقابل زنان</h3>
            <Bar data={maleVsFemaleData} />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-green-600">تعداد مردان در هر منطقه</h3>
            <Bar data={maleInZonesData} />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-green-600">مردان در مقابل جمعیت کل</h3>
            <Bar data={totalMaleVsTotalData} />
          </div>
        </div>
        <CustomReportFooter />
      </div>
    </div>
  );
};

export default MaleReport;
