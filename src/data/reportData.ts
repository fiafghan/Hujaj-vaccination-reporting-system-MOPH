// Define the ZoneItem type
export type ZoneItem = {
  zone: string;
  total: number;
  male: number;
  female: number;
  travelType: string;
  ageCategory: 'under18' | '19-29' | '30-50' | '50plus';
  departureCountry: string;
  arrivalCountry: string;
  [key: string]: string | number; // Allows accessing fields dynamically like item[key]
};

// Export the reportData with proper typing
export const reportData = {
  totalPeople: 1300,
  male: 700,
  female: 600,
  under_18: 100,
  age_19_29: 500,
  age_30_50: 400,
  age_over_50: 300,
  zoneData: [
    {
      zone: 'کابل',
      total: 400,
      male: 250,
      female: 150,
      travelType: 'حج فرضی',
      ageCategory: 'under18',
      departureCountry: 'افغانستان',
      arrivalCountry: 'عربستان سعودی',
    },
    {
      zone: 'هرات',
      total: 300,
      male: 170,
      female: 130,
      travelType: 'عمره',
      ageCategory: '19-29',
      departureCountry: 'افغانستان',
      arrivalCountry: 'عربستان سعودی',
    },
    {
      zone: 'قندهار',
      total: 200,
      male: 100,
      female: 100,
      travelType: 'سفر عادی',
      ageCategory: '30-50',
      departureCountry: 'افغانستان',
      arrivalCountry: 'پاکستان',
    },
    {
      zone: 'مزار شریف',
      total: 300,
      male: 180,
      female: 120,
      travelType: 'حج فرضی',
      ageCategory: '50plus',
      departureCountry: 'افغانستان',
      arrivalCountry: 'عربستان سعودی',
    },
  ] as ZoneItem[],
};
