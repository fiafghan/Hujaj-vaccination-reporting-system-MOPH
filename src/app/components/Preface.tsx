'use client';

import React from 'react';

interface PrefacePageProps {
  authorName?: string;
  position?: string;
  organization?: string;
  date?: string;
  message?: string;
}

export default function PrefacePage({
  authorName,
  position,
  organization = 'وزارت صحت عامه',
  date,
  message = `سلامتی یکی از اساسی‌ترین نیازهای هر جامعه می‌باشد و واکسیناسیون از مؤثرترین راهکارها برای جلوگیری از شیوع امراض قابل وقایه است. در همین راستا، وزارت صحت عامه با تعهد به بهبود خدمات صحی و ارتقای سطح وقایه، این گزارش را به هدف ارزیابی دقیق روند تطبیق کارت‌های واکسین در سراسر کشور تهیه نموده است.

اطلاعات گردآوری‌شده در این گزارش، بازتاب‌دهندهٔ تلاش همکاران صحی در ولایات مختلف می‌باشد و تحلیل آن می‌تواند زمینه‌ساز تصمیم‌گیری‌های مبتنی بر شواهد در برنامه‌های آینده گردد. این گزارش همچنان خلأها و چالش‌های موجود را برجسته ساخته و فرصت‌های بهبود را مشخص می‌سازد.

امید است که یافته‌های این گزارش مورد استفاده‌ی مسوولین و برنامه‌ریزان قرار گیرد و به‌عنوان یک گام دیگر در راستای ارتقای معافیت کتلوی و صحت جامعه نقش مؤثری ایفا نماید.`,
}: PrefacePageProps) {
  return (
    <div className="bg-[#f9fafb] flex items-center justify-center min-h-screen px-6">
      <div
        className="relative w-[794px] h-[1123px] bg-white shadow-2xl rounded-sm border
         border-gray-300 px-20 py-16 flex flex-col justify-between"
        style={{ fontFamily: `'Segoe UI', 'Helvetica Neue', Arial, sans-serif` }}
        dir="rtl"
      >
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-900 tracking-wider pb-4">پیش‌گفتار</h2>
           {/* Message */}
        <div className="text-[16px] text-black leading-loose text-justify whitespace-pre-line">
          {message}
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
          ب
        </div>
      </div>
    </div>
  );
}
