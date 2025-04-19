import Image from "next/image";
import Header from "./components_2/header";
import ReportForm from "./components_2/report_gen";

export default function Home() {
  return (
    <div className = "bg-white" dir = "rtl">
        <Header />
        <ReportForm />
      
    </div>
  );
}
