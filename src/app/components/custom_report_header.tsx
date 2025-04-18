// components/Header.tsx
import { Printer, ShieldCheck } from "lucide-react";
import Image from "next/image";

interface CustomReportHeaderProps {
  generatedBy: string;
  reportType: string;
  title?: string;
  subtitle?: string;
  department?: string;
}

export default function CustomReportHeader({
  generatedBy,
  reportType,
  title = "Vaccination Registration System",
  subtitle = "Islamic Emirate of Afghanistan",
  department = "Ministry of Public Health - Kitlawi",
}: CustomReportHeaderProps) {
  return (
    <header className="bg-white text-green-700 p-6 shadow-md rounded-2xl border
     border-green-600 mb-10"
    dir = "rtl">
      <div className="flex flex-col md:flex-row items-center justify-between md:space-y-0">
        {/* Logo & Titles */}
        <div className="flex items-center space-x-4">
            <Image src = "/kitlawee.jpg" width={100} height={100} alt = "kitlawee_logo" />
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-2xl font-bold">وزارت صحت عامه ا.ا.ا</h1>
            <h1 className="text-xl md:text-2xl font-bold">{subtitle}</h1>
            <p className="text-md font-semibold">{department.split(" - ")[0]}</p>
            <p className="text-sm">{department.split(" - ")[1]}</p>
          </div>
        </div>

        {/* System Info */}
        <div className="text-center">
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-sm">
            تهیه کننده: <span className="font-semibold">{generatedBy}</span>
          </p>
          <p className="text-sm">
            پست کارمند تهیه کننده گزارش: <span className="font-semibold">کارمند بخش راجستریشن</span>
          </p>
          <p className="text-sm">
            ریاست مربوطه:<span className="font-semibold">ریاست معافیت کتلوی</span>
          </p>
          <p className="text-sm">
            نوعیت گزارش: <span className="font-medium">{reportType}</span>
          </p>
          <p className="text-sm">
           تاریخ گزارش: <span className="font-medium">30 حمل 1404</span>
          </p>
        </div>

        {/* Button */}
        <div className="mt-2 md:mt-0">
          <button className="inline-flex items-center bg-green-700 text-white px-4 py-2 
          rounded-xl shadow hover:bg-green-800 transition">
            <Printer className="mr-2 ml-2" size={18} />
            چاپ گزارش
          </button>
        </div>
      </div>
    </header>
  );
}
