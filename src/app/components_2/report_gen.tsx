'use client'

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  MapPin,
  Users,
  Calendar,
  BarChart2,
  CalendarDays,
  PlaneLanding
} from "lucide-react";

export default function ReportForm() {
  const [zone, setZone] = useState("");
  const [gender, setGender] = useState("");
  const [ageCategory, setAgeCategory] = useState("");
  const [generalReport, setGeneralReport] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [travelType, setTravelType] = useState("");
  const [arrivalCountry, setArrivalCountry] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const handleGenerateReport = () => {
    if (!generalReport) {
      if (!zone || !gender || !ageCategory || !travelType || !arrivalCountry) {
        alert("لطفاً تمام فیلدهای ضروری را تکمیل کنید.");
        return;
      }
    }

    const queryParams = new URLSearchParams();

    if (startDate) queryParams.append("startDate", startDate);
    if (endDate) queryParams.append("endDate", endDate);

    if (generalReport) {
      router.push(`/full_report?${queryParams.toString()}`);
      return;
    }

    queryParams.append("zone", zone);
    queryParams.append("gender", gender);
    queryParams.append("ageCategory", ageCategory);
    queryParams.append("travelType", travelType);
    queryParams.append("arrivalCountry", arrivalCountry);

    router.push(`/report?${queryParams.toString()}`);
  };

  return (
    <div className="bg-white backdrop-blur-lg border border-gray-200 p-10 rounded-2xl shadow-xl max-w-4xl mx-auto mt-16 transition-all duration-300">
      <div className="text-center mb-10 text-green-700 text-4xl font-semibold flex items-center justify-center gap-3">
        <BarChart2 className="w-7 h-7" />
        <span>فورم گزارش‌ گیری</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Zone */}
        <div>
          <label className="text-gray-700 mb-2 flex items-center gap-2 text-sm font-medium">
            <MapPin className="w-4 h-4 text-green-600" />زون
          </label>
          <select className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={zone}
            onChange={(e) => setZone(e.target.value)}
            disabled={generalReport}
            required>
            <option value="">انتخاب زون</option>
            <option value="kabul">کابل</option>
            <option value="kandahar">کندهار</option>
            <option value="herat">هرات</option>
            <option value="mazar">مزار شریف</option>
          </select>
        </div>

        {/* Gender */}
        <div>
          <label className="text-gray-700 mb-2 flex items-center gap-2 text-sm font-medium">
            <Users className="w-4 h-4 text-green-600" />جنسیت
          </label>
          <select className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            disabled={generalReport}
            required>
            <option value="">انتخاب جنسیت</option>
            <option value="male">مرد</option>
            <option value="female">زن</option>
          </select>
        </div>

        {/* Age Category */}
        <div dir="rtl">
          <label className="text-gray-700 mb-2 flex items-center gap-2 text-sm font-medium">
            <Calendar className="w-4 h-4 text-green-600" />سن
          </label>
          <select className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={ageCategory}
            onChange={(e) => setAgeCategory(e.target.value)}
            disabled={generalReport}
            required>
            <option value="">انتخاب سن</option>
            <option value="under18">زیر سن 18</option>
            <option value="19-29">19 - 29</option>
            <option value="30-50">30 - 50</option>
            <option value="50plus">بالای 50 سال</option>
          </select>
        </div>

        {/* Travel Type */}
        <div className="mb-4">
          <label className="text-gray-700 mb-2 flex items-center gap-2 text-sm font-medium">نوع سفر</label>
          <select value={travelType}
            onChange={(e) => setTravelType(e.target.value)}
            className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
            disabled={generalReport}
            required>
            <option value="">انتخاب نوع سفر</option>
            <option value="حج فرضی">حج فرضی</option>
            <option value="عمره">عمره</option>
            <option value="سفر عادی">سفر عادی</option>
          </select>
        </div>

        {/* Arrival Country */}
        <div>
          <label className="text-gray-700 mb-2 flex items-center gap-2 text-sm font-medium">
            <PlaneLanding className="w-4 h-4 text-green-600" />کشور مقصد
          </label>
          <input type="text"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={arrivalCountry}
            onChange={(e) => setArrivalCountry(e.target.value)}
            disabled={generalReport}
            required />
        </div>

        {/* Start Date */}
        <div>
          <label className="text-gray-700 mb-2 flex items-center gap-2 text-sm font-medium">
            <CalendarDays className="w-4 h-4 text-green-600" />تاریخ شروع
          </label>
          <input type="date"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            disabled={generalReport} />
        </div>

        {/* End Date */}
        <div>
          <label className="text-gray-700 mb-2 flex items-center gap-2 text-sm font-medium">
            <CalendarDays className="w-4 h-4 text-green-600" />تاریخ ختم
          </label>
          <input type="date"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            disabled={generalReport} />
        </div>
      </div>

      {/* General Report Checkbox */}
      <div className="mt-6 text-right">
        <label className="inline-flex items-center">
          <input type="checkbox"
            className="form-checkbox text-green-600"
            checked={generalReport}
            onChange={(e) => setGeneralReport(e.target.checked)} />
          <span className="ml-2 text-sm text-gray-700 mr-3">گزارش عمومی (شامل تمام زون‌ها و گروه‌ها)</span>
        </label>
      </div>

      {/* Submit Button */}
      <div className="mt-10 text-center">
        <button onClick={handleGenerateReport}
          className="px-8 py-3 rounded-xl font-semibold text-white bg-green-700 text-lg transition-all duration-300">
          تولید گزارش
        </button>
      </div>
    </div>
  );
}
