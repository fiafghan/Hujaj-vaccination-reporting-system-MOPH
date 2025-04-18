'use client'; // اینجا برای مشخص کردن که این کامپوننت باید در سمت کلاینت رندر شود

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import CustomReportHeader from '../../components/custom_report_header';
import CustomReportFooter from '@/app/components/custom_report_footer';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const FemaleReport = () => {
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

  // گراف 1: توزیع سنی زنان
  const femaleAgeData = {
    labels: ['۱۸-۳۵', '۳۶-۶۰', '۶۱-۱۰۰'],
    datasets: [
      {
        label: 'توزیع سنی زنان',
        data: [reportData.age_18_35 * (reportData.female / reportData.totalPeople), reportData.age_36_60 * (reportData.female / reportData.totalPeople), reportData.age_61_100 * (reportData.female / reportData.totalPeople)],
        backgroundColor: 'rgba(34, 197, 94, 0.2)', // سبز
        borderColor: 'rgba(34, 197, 94, 1)', // سبز
        borderWidth: 1,
      },
    ],
  };

  // گراف 2: توزیع زنان در مناطق مختلف
  const femaleZoneData = {
    labels: reportData.zoneData.map((zone) => zone.zone),
    datasets: [
      {
        label: 'زنان به تفکیک مناطق',
        data: reportData.zoneData.map((zone) => zone.female),
        backgroundColor: 'rgba(34, 197, 94, 0.2)', // سبز
        borderColor: 'rgba(34, 197, 94, 1)', // سبز
        borderWidth: 1,
      },
    ],
  };

  // گراف 3: زنان در مقابل مردان
  const femaleVsMaleData = {
    labels: ['زنان', 'مردان'],
    datasets: [
      {
        label: 'زنان در مقابل مردان',
        data: [reportData.female, reportData.male],
        backgroundColor: ['rgba(34, 197, 94, 0.2)', 'rgba(255, 255, 255, 0.2)'], // سبز برای زنان و سفید برای مردان
        borderColor: ['rgba(34, 197, 94, 1)', 'rgba(255, 255, 255, 1)'], // سبز برای زنان و سفید برای مردان
        borderWidth: 1,
      },
    ],
  };

  // گراف 4: تعداد زنان در هر منطقه
  const femaleInZonesData = {
    labels: reportData.zoneData.map((zone) => zone.zone),
    datasets: [
      {
        label: 'تعداد زنان در هر منطقه',
        data: reportData.zoneData.map((zone) => zone.female),
        backgroundColor: 'rgba(34, 197, 94, 0.2)', // سبز
        borderColor: 'rgba(34, 197, 94, 1)', // سبز
        borderWidth: 1,
      },
    ],
  };

  // گراف 5: جمعیت زنان در مقابل جمعیت کل
  const totalFemaleVsTotalData = {
    labels: ['جمعیت کل', 'جمعیت زنان'],
    datasets: [
      {
        label: 'زنان در مقابل جمعیت کل',
        data: [reportData.totalPeople, reportData.female],
        backgroundColor: ['rgba(34, 197, 94, 0.2)', 'rgba(255, 255, 255, 0.2)'], // سبز برای زنان و سفید برای جمعیت کل
        borderColor: ['rgba(34, 197, 94, 1)', 'rgba(255, 255, 255, 1)'], // سبز برای زنان و سفید برای جمعیت کل
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className = "bg-white">
    <div className="max-w-6xl mx-auto py-16 px-6 md:px-10 bg-white min-h-screen" dir = "rtl">
    <CustomReportHeader reportType='جنسیت - اناث' title = "گزارش واکسناسیون حجاج" 
    generatedBy='مرسل احمدی' subtitle='ریاست معافیت کتلوی'  />
      <h1 className="text-2xl font-bold mb-4 text-green-600">گزارش جمعیت زنان</h1>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-green-600">توزیع سنی زنان</h3>
          <Bar data={femaleAgeData} />
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-green-600">توزیع زنان در مناطق مختلف</h3>
          <Bar data={femaleZoneData} />
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-green-600">زنان در مقابل مردان</h3>
          <Bar data={femaleVsMaleData} />
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-green-600">تعداد زنان در هر منطقه</h3>
          <Bar data={femaleInZonesData} />
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-green-600">زنان در مقابل جمعیت کل</h3>
          <Bar data={totalFemaleVsTotalData} />
        </div>
      </div>
      <CustomReportFooter />
    </div>
    </div>
  );
};

export default FemaleReport;
