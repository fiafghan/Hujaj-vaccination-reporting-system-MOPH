import Image from "next/image";
import Link from "next/link";
import { Home, User, Briefcase, Phone } from "lucide-react"; // Lucide icons

export default function Header() {
  return (
    <header className="bg-gray-100 shadow-lg p-5 flex items-center justify-between" dir="rtl">
      {/* Logo Section */}
      <div className="flex items-center space-x-3 rtl:space-x-reverse">
        <Image
          src="/moph_logo.jpg"
          alt="لوگوی وزارت صحت عامه"
          width={50}
          height={50}
          className="rounded-full"
        />
        <span className="text-green-700 text-2xl font-bold mx-5">وزارت صحت عامه</span>
      </div>

      {/* Navigation Section */}
      <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
        <Link href="#" className="flex items-center text-green-600 hover:text-green-800 transition-colors duration-300">
          <Home className="w-5 h-5 ml-2" />
          <span>خانه</span>
        </Link>
        <Link href="#" className="flex items-center text-green-600 hover:text-green-800 transition-colors duration-300">
          <User className="w-5 h-5 ml-2" />
          <span>درباره ما</span>
        </Link>
        <Link href="#" className="flex items-center text-green-600 hover:text-green-800 transition-colors duration-300">
          <Briefcase className="w-5 h-5 ml-2" />
          <span>خدمات صحی</span>
        </Link>
        <Link href="#" className="flex items-center mx-5 text-green-600 hover:text-green-800 transition-colors duration-300">
          <Phone className="w-5 h-5 ml-2" />
          <span>تماس با ما</span>
        </Link>
      </nav>

      {/* Mobile Navigation Toggle Button */}
      <div className="md:hidden flex items-center">
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
          ☰
        </button>
      </div>

      {/* Call to Action Button */}
      <div className="hidden md:block">
        <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-colors duration-300">
          ورود به سیستم
        </button>
      </div>
    </header>
  );
}
