'use client';

import React from 'react';

interface CoverPageProps {
  generatedBy: string;
  reportDate: string;
  reportType: string;
  startDate?: string | null;
  endDate?: string | null;
  logo?: string;
}

export default function CoverPage({
  generatedBy,
  reportDate,
  reportType,
  startDate = '---',
  endDate = '---',
  logo = '/moph_logo.jpg',
}: CoverPageProps) {
  return (
    <div className="bg-[#f8fafc] text-gray-900 flex items-center justify-center p-6">
      <div
        className="w-[794px] h-[1123px] bg-white border border-gray-300 shadow-2xl rounded-sm px-20 py-20 flex flex-col justify-between"
        style={{ fontFamily: `'Segoe UI', 'Helvetica Neue', Arial, sans-serif` }}
        dir="rtl"
      >
        {/* Header: Logo */}
        <div className="flex justify-center">
          <img src={logo} alt="MoPH Logo" className="h-28 object-contain" />
        </div>

        {/* Middle: Title Section */}
        <div className="text-center space-y-3 mt-12">
          <h1 className="text-4xl font-bold text-green-900 tracking-wide">
            وزارت صحت عامه ا.ا.ا
          </h1>
          <p className="text-2xl font-semibold text-gray-800">ریاست طب وقایوی</p>
          <p className="text-lg text-gray-600 italic border-t border-b border-gray-200 py-2">
            گزارش کارت‌های واکسین
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-300 my-12" />

        {/* Report Details */}
        <div className="text-right text-md space-y-4">
          <p><span className="font-semibold text-gray-700">گزارش دهنده:</span> {generatedBy}</p>
          <p><span className="font-semibold text-gray-700">تاریخ تهیه گزارش:</span> {reportDate}</p>
          <p><span className="font-semibold text-gray-700">نوع گزارش:</span> {reportType}</p>
          <p>
            <span className="font-semibold text-gray-700">از تاریخ:</span> {startDate} |
            <span className="font-semibold text-gray-700 mx-1">تا تاریخ:</span> {endDate}
          </p>
        </div>

        {/* Footer Disclaimer */}
        <div className="pt-16 border-t border-gray-200 text-sm text-center text-gray-500">
          این گزارش محرمانه می‌باشد و تنها برای استفاده داخلی وزارت صحت عامه تهیه شده است.
        </div>
      </div>
    </div>
  );
}
