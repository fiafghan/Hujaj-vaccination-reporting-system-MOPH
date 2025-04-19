'use client';

import React from 'react';

interface PrefacePageProps {
  authorName: string;
  position: string;
  organization?: string;
  date: string;
  message?: string;
}

export default function PrefacePage({
  authorName,
  position,
  organization = 'وزارت صحت عامه',
  date,
  message = `این گزارش به هدف ارزیابی مؤثر روند تطبیق برنامه‌های وقایوی و تحلیل دقیق کارت‌های واکسین تهیه گردیده است. 
تلاش گردیده تا با استفاده از اطلاعات جمع‌آوری‌شده، زمینه برای تصمیم‌گیری‌های بهتر در آینده مساعد گردد. 
امید است که این گزارش بتواند گامی مؤثر در راستای بهبود صحت عامه کشور باشد.`,
}: PrefacePageProps) {
  return (
    <div className="bg-[#f9fafb] flex items-center justify-center min-h-screen py-12 px-6">
      <div
        className="w-[794px] h-[1123px] bg-white shadow-2xl rounded-2xl border border-gray-300 px-20 py-16 flex flex-col justify-between"
        style={{ fontFamily: `'Segoe UI', 'Helvetica Neue', Arial, sans-serif` }}
        dir="rtl"
      >
        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-900 tracking-wider border-b border-gray-300 pb-4">
            پیش‌گفتار
          </h2>
        </div>

        {/* Message */}
        <div className="mt-12 text-[16px] text-gray-900">
          {message}
        </div>

        {/* Signature Block */}
        <div className="text-right mt-20 space-y-1 text-[15px] text-gray-800">
          <p className="font-semibold text-lg">{authorName}</p>
          <p>{position}</p>
          <p>{organization}</p>
          <p className="text-sm text-gray-500 mt-2">{date}</p>
        </div>
      </div>
    </div>
  );
}
