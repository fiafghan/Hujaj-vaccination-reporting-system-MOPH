"use client"

import * as React from "react"
import { Pie, PieChart, Cell, LabelList, Label } from "recharts"

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

export const reportData = {
  male: 700,
  female: 600,
}

const chartData = [
  { category: "Male", visitors: reportData.male, fill: "#4CAF50" },
  { category: "Female", visitors: reportData.female, fill: "#81C784" },
]

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

// Explicitly typing the 'value' in 'formatter' and 'label'
export function PieChartFullReport() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>نمودار تقسیم جنسیتی</CardTitle>
        <CardDescription>تعداد ذکور و اناث</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart width={300} height={300}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="category"
              innerRadius={60}
              outerRadius={100}
              stroke="#ffffff"
              strokeWidth={3}
              label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
                const entry = chartData[index]; // Get the entry corresponding to the index
                if (entry) {
                  return (
                    <text
                      x={cx}
                      y={cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={cx}
                        y={cy}
                        className="fill-foreground text-3xl font-bold"
                      >
                        {totalVisitors.toLocaleString()}
                      </tspan>
                      <tspan
                        x={cx}
                        y={(cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Visitors
                      </tspan>
                    </text>
                  );
                }
                return null; // Return null if the entry is not found
              }}
              labelLine={false}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex justify-around w-full mt-2 print:mt-4">
          {chartData.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span
                className="inline-block w-4 h-4 rounded"
                style={{ backgroundColor: item.fill }}
              ></span>
              <span>{item.category}</span>
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}
