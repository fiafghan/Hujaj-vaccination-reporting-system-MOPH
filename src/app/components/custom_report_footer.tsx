// components/CustomReportFooter.tsx
import Image from "next/image";
import { FileText } from "lucide-react";

interface CustomReportFooterProps {
  organization?: string;
  note?: string;
  logoPath?: string;
}

export default function CustomReportFooter({
  organization = "وزارت صحت عامه - ریاست معافیت کتلوی",
  note = "این سیستم به هدف ثبت واکسین حجاج ایجاد گردیده است.",
  logoPath = "/kitlawee.jpg",
}: CustomReportFooterProps) {
  return (
    <footer
      className="bg-green-700 text-white p-6 shadow-md rounded-sm border border-green-600 mt-10"
      dir="rtl"
    >
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Logo and Info */}
        <div className="flex items-center space-x-4 space-x-reverse">
          <Image src={logoPath} width={50} height={50} alt="logo" className="rounded-full" />
          <div>
            <h2 className="text-lg font-semibold mr-3">{organization}</h2>
            <p className="text-sm mr-3">{note}</p>
          </div>
        </div>

        {/* Footer icon or text */}
        <div className="mt-4 md:mt-0 flex items-center space-x-2 space-x-reverse text-sm" dir = "rtl">
          <FileText size={20} />
          <span>تمام حقوق محفوظ است © 1404</span>
        </div>
      </div>
    </footer>
  );
}
