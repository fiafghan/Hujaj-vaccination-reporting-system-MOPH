"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, LabelList } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// معلومات راپور
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

// تبدیل معلومات سنی برای نمودار
const chartData = [
  { ageGroup: "زیر ۱۸ سال", people: reportData.under_18 },
  { ageGroup: "۱۹ تا ۲۹ سال", people: reportData.age_19_29 },
  { ageGroup: "۳۰ تا ۵۰ سال", people: reportData.age_30_50 },
  { ageGroup: "بالای ۵۰ سال", people: reportData.age_over_50 },
]

// تنظیمات رنگ برای نمودار
const chartConfig = {
  people: {
    label: "افراد",
    color: "#90EE90", // سبز روشن
  },
} satisfies ChartConfig

export function BarChartFullReport() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>توزیع سنی</CardTitle>
        <CardDescription>مجموع: {reportData.totalPeople} نفر</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="ageGroup"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar
              dataKey="people"
              fill="#90EE90"
              radius={4}
            >
              <LabelList dataKey="people" position="top" />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm" />
    </Card>
  )
}
