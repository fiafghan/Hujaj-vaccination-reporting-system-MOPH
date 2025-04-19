"use client"

import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  LabelList,
  Legend,
  ResponsiveContainer,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ChartConfig,
  ChartContainer,
} from "@/components/ui/chart"

export const reportData = {
  totalPeople: 1300,
  male: 700,
  female: 600,
  under_18: 100,
  age_19_29: 500,
  age_30_50: 400,
  age_over_50: 300,
  zoneData: [
    { zone: "کابل", total: 400, male: 250, female: 150 },
    { zone: "هرات", total: 300, male: 170, female: 130 },
    { zone: "کندهار", total: 200, male: 100, female: 100 },
    { zone: "مزار شریف", total: 300, male: 180, female: 120 },
  ],
}

const chartConfig = {
  male: {
    label: "Male",
    color: "#4CAF50",
  },
  female: {
    label: "Female",
    color: "#81C784",
  },
} satisfies ChartConfig

export function ZoneGenderBarChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>نمودار تعداد ذکور و اناث در زون‌ها</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={reportData.zoneData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              barGap={8}
            >
              <XAxis dataKey="zone" tickLine={false} axisLine={false} />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickFormatter={(value: number) => `${value}`}
                label={{
                  value: "تعداد افراد",
                  angle: -90,
                  position: "insideLeft",
                  offset: 10,
                }}
              />

              <Bar
                dataKey="male"
                stackId="a"
                fill={chartConfig.male.color}
                radius={[4, 4, 0, 0]}
              >
                <LabelList
                  dataKey="male"
                  position="top"
                  formatter={(value: number) => `${value}`}
                />
              </Bar>

              <Bar
                dataKey="female"
                stackId="a"
                fill={chartConfig.female.color}
                radius={[4, 4, 0, 0]}
              >
                <LabelList
                  dataKey="female"
                  position="top"
                  formatter={(value: number) => `${value}`}
                />
              </Bar>

              {/* Legend for print visibility */}
              <Legend />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
