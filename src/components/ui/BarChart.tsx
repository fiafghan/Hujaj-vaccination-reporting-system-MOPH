"use client"

import { BarChart, Bar, CartesianGrid, XAxis, YAxis, LabelList, ResponsiveContainer } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type BarChartComponentProps = {
  maleNumber: number;
  femaleNumber: number;
  title: string;
  description: string;
};

export function BarChartComponent({
  maleNumber,
  femaleNumber,
  title,
  description,
}: BarChartComponentProps) {
  const chartData = [
    { category: "مرد", value: maleNumber },
    { category: "زن", value: femaleNumber },
  ];

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-green-700">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" tick={{ fill: "#059669", fontWeight: 600 }} />
            <YAxis tick={{ fill: "#059669" }} />
            <Bar dataKey="value" fill="#10B981" radius={[10, 10, 0, 0]}>
              <LabelList
                dataKey="value"
                position="top"
                className="fill-green-800 font-bold"
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
