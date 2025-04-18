import Image from "next/image";
import Header from "./components/header";
import ReportForm from "./components/report_gen";

export default function Home() {
  return (
    <div className = "bg-white" dir = "rtl">
        <Header />
        <ReportForm />
      
    </div>
  );
}
