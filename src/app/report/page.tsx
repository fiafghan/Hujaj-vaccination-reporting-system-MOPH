'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const AutomatedReportPage = dynamic(() => import('./AutomatedReportPage'), { ssr: false });

const ExampleUsage = () => {
  const [zoneName, setZoneName] = useState('');
  const [totalPeople, setTotalPeople] = useState(0);
  const [genderData, setGenderData] = useState({ maleNumber: 0, femaleNumber: 0 });
  const [ageCategories, setAgeCategories] = useState([]);
  const [travelTypes, setTravelTypes] = useState({});
  const [destinationData, setDestinationData] = useState([]);

  useEffect(() => {
    // Fetch data from individual endpoints
    fetch('http://localhost:5000/zoneName')
    .then((res) => res.json())
    .then((data) => {
      setZoneName(data.name);
    });

    fetch('http://localhost:5000/totalPeople')
      .then((response) => response.json())
      .then((data) => setTotalPeople(data));

    fetch('http://localhost:5000/genderData')
      .then((response) => response.json())
      .then((data) => setGenderData(data));

    fetch('http://localhost:5000/ageCategories')
      .then((response) => response.json())
      .then((data) => setAgeCategories(data));

    fetch('http://localhost:5000/travelTypes')
      .then((response) => response.json())
      .then((data) => setTravelTypes(data));

    fetch('http://localhost:5000/destinationData')
      .then((response) => response.json())
      .then((data) => setDestinationData(data));
  }, []);

//   // If the data is still loading, show a loading message
//   if (
//     !zoneName ||
//     totalPeople === 0 ||
//     !genderData ||
//     !ageCategories.length ||
//     !Object.keys(travelTypes).length ||
//     !destinationData.length
//   ) {
//     return <div>Loading...</div>; // Show a loading state while data is being fetched
//   }

  return (
    <AutomatedReportPage
      zoneName={zoneName}
      totalPeople={totalPeople}
      genderData={genderData}
      ageCategories={ageCategories}
      travelTypes={travelTypes}
      destinationData={destinationData}
    />
  );
};

export default ExampleUsage;
