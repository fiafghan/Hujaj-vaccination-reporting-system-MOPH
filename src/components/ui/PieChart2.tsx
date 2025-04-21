"use client"

import * as React from "react"
import { Pie, PieChart, Cell, Legend, Tooltip } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface CategoryData {
  name: string
  value: number
}

interface Props {
  title: string
  description: string
  categories: CategoryData[] // Max 5 categories
}

const COLORS = ["#10B981", "#D1FAE5", "#6EE7B7", "#34D399", "#059669"] // Green & white shades

export function PieChart2({ title, description, categories }: Props) {
  const validatedCategories = categories.slice(0, 5) // Max 5 items

  return (
    <Card className="w-full max-w-md mx-auto" dir="rtl">
      <CardHeader className="items-center text-center pb-0">
        <CardTitle className="text-green-700">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="flex justify-center">
        <PieChart width={320} height={320}>
          <Pie
            data={validatedCategories}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label={({ name, value }) => `${name}: ${value}`}
            labelLine={false}
          >
            {validatedCategories.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
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
