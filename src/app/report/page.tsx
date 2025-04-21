"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AutomatedReportPage from './AutomatedReportPage';

const ReportPage = () => {
  const [zoneName, setZoneName] = useState<string | null>(null);
  const [totalPeople, setTotalPeople] = useState<number>(0);
  const [genderData, setGenderData] = useState<{ maleNumber: number; femaleNumber: number }>({ maleNumber: 0, femaleNumber: 0 });
  const [ageCategories, setAgeCategories] = useState<{ name: string; value: number }[]>([]);
  const [travelTypes, setTravelTypes] = useState<{ [key: string]: number }>({});
  const [destinationData, setDestinationData] = useState<{ country: string; value: number }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set client-side flag to true on mount

    const fetchData = async () => {
      try {
        setLoading(true);
        const responses = await Promise.all([
          fetch('http://localhost:5000/zoneName'),
          fetch('http://localhost:5000/totalPeople'),
          fetch('http://localhost:5000/genderData'),
          fetch('http://localhost:5000/ageCategories'),
          fetch('http://localhost:5000/travelTypes'),
          fetch('http://localhost:5000/destinationData')
        ]);

        const [zoneData, totalPeopleData, genderDataRes, ageCategoriesRes, travelTypesRes, destinationDataRes] = await Promise.all(responses.map((res) => res.json()));

        setZoneName(zoneData.name);
        setTotalPeople(totalPeopleData);
        setGenderData(genderDataRes);
        setAgeCategories(ageCategoriesRes);
        setTravelTypes(travelTypesRes);
        setDestinationData(destinationDataRes);
      } catch (err) {
        setError('An error occurred while fetching data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!isClient) {
    return null; // Don't render anything before client-side rendering
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Pass the fetched data to the AutomatedReportPage as props
  return (
    <AutomatedReportPage
      zoneName={zoneName || 'نام ناحیه'}
      totalPeople={totalPeople}
      genderData={genderData}
      ageCategories={ageCategories}
      travelTypes={travelTypes}
      destinationData={destinationData}
    />
  );
};

export default ReportPage;
