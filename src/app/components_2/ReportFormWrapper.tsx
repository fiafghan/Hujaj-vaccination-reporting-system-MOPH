'use client';

import dynamic from 'next/dynamic';

const ReportForm = dynamic(() => import('./report_gen'), {
  ssr: false,
});

export default function ReportFormWrapper() {
  return <ReportForm />;
}
