"use client"

import dynamic from "next/dynamic"

// Import PieChart2 dynamically to disable SSR
const PieChart2 = dynamic(() => import("./PieChart2").then(mod => mod.PieChart2), {
  ssr: false,
})

export default PieChart2
