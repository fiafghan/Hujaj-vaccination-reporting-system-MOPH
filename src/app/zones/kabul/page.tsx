"use client";

import React from "react";
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
} from "recharts";

import CustomReportHeader from "@/app/components_2/custom_report_header";
import CustomReportFooter from "@/app/components_2/custom_report_footer";

const COLORS = ["#10B981", "#3B82F6"];

const genderData = [
  { name: "Male", value: 150 },
  { name: "Female", value: 250 },
];

const ageCategoryData = [
  {
    ageGroup: "18-35",
    male: 30,
    female: 20,
  },
  {
    ageGroup: "36-60",
    male: 25,
    female: 20,
  },
  {
    ageGroup: "61-100",
    male: 200,
    female: 205,
  },
];

export default function KabulReportPage() {
  const totalVaccinated = genderData.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="max-w-6xl mx-auto py-16 px-6 md:px-10 bg-white min-h-screen">
      <CustomReportHeader generatedBy="فردین ابراهیمی" reportType="بر اساس زون کابل" 
      title = "گزارش واکسیناسیون حجاج بر اساس زون کابل" subtitle="ریاست معافیت کتلوی" 
      department="سیستم ثبت واکسیناسیون حجاج" />
      <h1 className="text-4xl font-bold text-center text-green-700 mb-12">
        گزارش واکسین‌شده‌ها در زون کابل
      </h1>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Total Vaccinated */}
        <div className="bg-green-100 rounded-2xl p-6 shadow-md flex flex-col justify-center items-center">
          <h2 className="text-xl text-gray-700 font-semibold mb-4">
            مجموع واکسین‌شده‌ها
          </h2>
          <p className="text-5xl text-green-700 font-bold">{totalVaccinated}</p>
        </div>

        {/* Gender Pie Chart */}
        <div className="bg-blue-50 rounded-2xl p-6 shadow-md">
          <h2 className="text-xl text-gray-700 font-semibold mb-4 text-center">
            تقسیم جنسیتی
          </h2>
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
      </div>

      {/* Age Category Bar Chart */}
      <div className="bg-gray-50 rounded-2xl p-6 shadow-md">
        <h2 className="text-xl text-gray-700 font-semibold mb-4 text-center">
          تقسیم سنی به تفکیک جنسیت
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
      <CustomReportFooter />
    </div>
  );
}
