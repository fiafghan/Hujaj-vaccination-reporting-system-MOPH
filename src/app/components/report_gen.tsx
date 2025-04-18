'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  MapPin,
  Users,
  Calendar,
  BarChart2,
  CalendarDays,
} from "lucide-react";

export default function ReportForm() {
  const [zone, setZone] = useState("");
  const [gender, setGender] = useState("");
  const [ageCategory, setAgeCategory] = useState("");
  const [generalReport, setGeneralReport] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const router = useRouter();

  const handleGenerateReport = () => {
    let query = `?startDate=${startDate}&endDate=${endDate}`;

    if (generalReport) {
      // Redirect to the general report route
      router.push(`/full_report${query}`); }
  
    if (!generalReport) {
      if (zone) {
        query += `&gender=${gender}&ageCategory=${ageCategory}`;
        router.push(`/zones/${zone}${query}`);
      }
    }
  };

  return (
    <div className="bg-white backdrop-blur-lg border border-gray-200 p-10 
    rounded-2xl shadow-xl max-w-4xl mx-auto mt-16 transition-all duration-300">

      {/* Header */}
      <div className="text-center mb-10 text-green-700 text-4xl font-semibold flex 
      items-center justify-center gap-3">
        <BarChart2 className="w-7 h-7" />
        <span>فورم گزارش‌ گیری</span>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Zone */}
        <div>
          <label className="text-gray-700 mb-2 flex items-center gap-2 text-sm font-medium">
            <MapPin className="w-4 h-4 text-green-600" />
            زون
          </label>
          <select
            className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 
            text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={zone}
            onChange={(e) => setZone(e.target.value)}
            disabled={generalReport}
          >
            <option value="">انتخاب کنید</option>
            <option value="kabul">کابل</option>
            <option value="kandahar">کندهار</option>
            <option value="herat">هرات</option>
            <option value="mazar">مزار شریف</option>
          </select>
        </div>

        {/* Gender */}
        <div>
          <label className="text-gray-700 mb-2 flex items-center gap-2 text-sm font-medium">
            <Users className="w-4 h-4 text-green-600" />
            جنسیت
          </label>
          <select
            className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 
            text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            disabled={generalReport}
          >
            <option value="">انتخاب کنید</option>
            <option value="male">مرد</option>
            <option value="female">زن</option>
          </select>
        </div>

        {/* Age Category */}
        <div dir="rtl">
          <label className="text-gray-700 mb-2 flex items-center gap-2 text-sm font-medium">
            <Calendar className="w-4 h-4 text-green-600" />
            سن
          </label>
          <select
            className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 
            text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={ageCategory}
            onChange={(e) => setAgeCategory(e.target.value)}
            disabled={generalReport}
          >
            <option value="">انتخاب کنید</option>
            <option value="18-35">۱۸ - ۳۵ سال</option>
            <option value="36-60">۳۶ - ۶۰ سال</option>
            <option value="61-100">۶۱ - ۱۰۰ سال</option>
          </select>
        </div>

        {/* Start Date */}
        <div>
          <label className="text-gray-700 mb-2 flex items-center gap-2 text-sm font-medium">
            <CalendarDays className="w-4 h-4 text-green-600" />
            تاریخ شروع
          </label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 
            focus:outline-none focus:ring-2 focus:ring-green-400"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        {/* End Date */}
        <div>
          <label className="text-gray-700 mb-2 flex items-center gap-2 text-sm font-medium">
            <CalendarDays className="w-4 h-4 text-green-600" />
            تاریخ ختم
          </label>
          <input
            type="date"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 
            focus:outline-none focus:ring-2 focus:ring-green-400"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>

      {/* General Report Toggle */}
      <div className="mt-6 text-right">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox text-green-600"
            checked={generalReport}
            onChange={(e) => setGeneralReport(e.target.checked)}
          />
          <span className="ml-2 text-sm text-gray-700">
            گزارش عمومی (شامل تمام زون‌ها و گروه‌ها)
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <div className="mt-10 text-center">
        <button
          onClick={handleGenerateReport}
          className="px-8 py-3 rounded-xl font-semibold text-white bg-green-700 
          text-lg transition-all duration-300"
        >
          تولید گزارش
        </button>
      </div>
    </div>
  );
}
