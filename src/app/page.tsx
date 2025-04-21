import Header from "./components_2/header";
import dynamic from 'next/dynamic';
import ReportForm from "./components_2/ReportFormWrapper";

export default function Home() {
  return (
    <div className = "bg-white" dir = "rtl">
        <Header />
        <ReportForm />
      
    </div>
  );
}
