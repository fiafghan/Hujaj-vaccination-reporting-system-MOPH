"use client"

import { Pie, PieChart, Cell, Tooltip, Legend } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type PieChartComponentProps = {
  categories: { name: string; value: number }[]
  total: number
  title: string
}

// Green/white theme with up to 7 shades
const COLORS = ["#10B981", "#6EE7B7", "#A7F3D0", "#D1FAE5", "#059669", "#047857", "#064E3B"]

export function PieChartComponent({ categories, total, title }: PieChartComponentProps) {
  if (categories.length < 1 || categories.length > 7) {
    console.warn("Categories count must be between 1 and 7.")
    return null
  }

  const chartData = categories.map((category, index) => ({
    name: category.name,
    value: category.value,
    fill: COLORS[index % COLORS.length],
  }))

  return (
    <Card className="flex flex-col w-full max-w-md mx-auto" dir="rtl">
      <CardHeader className="items-center text-center pb-0">
        <CardTitle className="text-green-700">{title}</CardTitle>
        <CardDescription>مجموع: {total}</CardDescription>
      </CardHeader>

      <CardContent className="flex justify-center">
        <PieChart width={320} height={320}>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label={({ name, value }) => `${name}: ${value}`}
            labelLine={false}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ backgroundColor: "#f0fdf4", borderColor: "#10B981" }}
            itemStyle={{ color: "#064e3b", fontWeight: "bold" }}
          />
          <Legend
            iconType="circle"
            layout="horizontal"
            align="center"
            verticalAlign="bottom"
            wrapperStyle={{ marginTop: "10px" }}
          />
        </PieChart>
      </CardContent>
    </Card>
  )
}
