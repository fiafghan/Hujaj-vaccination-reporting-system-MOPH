'use client';

import React from 'react';

interface ConclusionPageProps {
  conclusionText: string;
  authorName: string;
  position: string;
  organization?: string;
  date: string;
  pageNumber?: string; // e.g., 'پ'
}

export default function ConclusionPage({
  conclusionText,
  authorName,
  position,
  organization = 'وزارت صحت عامه',
  date,
  pageNumber = '',
}: ConclusionPageProps) {
  return (
    <div className="bg-[#f9fafb] flex items-center justify-center min-h-screen px-6 mt-5 mb-5">
      <div
        className="relative w-[794px] h-[1123px] bg-white shadow-2xl rounded-sm border
         border-gray-300 px-20 py-16 flex flex-col justify-between"
        style={{ fontFamily: `'Segoe UI', 'Helvetica Neue', Arial, sans-serif` }}
        dir="rtl"
      >
        {/* Title & Text */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-900 tracking-wider pb-4">نتیجه‌گیری</h2>
          <div className="text-[16px] text-black leading-loose text-justify whitespace-pre-line">
            {conclusionText}
          </div>
        </div>

        {/* Signature */}
        <div className="text-right mt-20 space-y-1 text-[15px] text-gray-800">
          <p className="font-semibold text-lg">{authorName}</p>
          <p>{position}</p>
          <p>{organization}</p>
          <p className="text-sm text-gray-500 mt-2">{date}</p>
        </div>

        {/* Page Number */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-gray-500">
          {pageNumber}
        </div>
      </div>
    </div>
  );
}
