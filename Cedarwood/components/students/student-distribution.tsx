"use client"

import type React from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts"

interface TooltipProps {
  active?: boolean
  payload?: Array<{
    value: number
    name: string
  }>
  label?: string
}

export function StudentDistribution() {
  // Mock data tailored for a teacher's view (e.g., classes they teach)
  const classData = [
    { class: "JSS1 A", female: 15, male: 18, total: 33 },
    { class: "JSS1 B", female: 12, male: 20, total: 32 },
    { class: "JSS2 A", female: 16, male: 14, total: 30 },
  ]

  const chartData = [
    { class: "JSS1 A", students: 33 },
    { class: "JSS1 B", students: 32 },
    { class: "JSS2 A", students: 30 },
  ]

  const CustomTooltip: React.FC<TooltipProps> = ({ active, payload, label }) => {
     if (active && payload && payload.length) {
      return (
        <div className="bg-primary-blue text-white p-3 rounded-lg shadow-lg border-0">
          <p className="font-medium">{`${label}`}</p>
          <p>{`Students: ${payload[0].value}`}</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-dark-gray mb-6">Class Distribution</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Summary Table */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Class</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Students (F/M)</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Total</th>
                </tr>
              </thead>
              <tbody>
                {classData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                    <td className="py-2 px-4 text-gray-700">{item.class}</td>
                    <td className="py-2 px-4 text-gray-700">{item.female}/{item.male}</td>
                    <td className="py-2 px-4 text-gray-700 font-medium">{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <section className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-success/10 border border-success/20 rounded-lg p-4 text-center">
              <h3 className="text-lg font-bold text-success-600">95</h3>
              <p className="text-xs text-success-600 font-medium">Total Students</p>
            </div>
            <div className="bg-primary-blue/10 border border-primary-blue/20 rounded-lg p-4 text-center">
              <h3 className="text-lg font-bold text-primary-blue">43</h3>
              <p className="text-xs text-primary-blue font-medium">Females</p>
            </div>
            <div className="bg-accent-orange/10 border border-accent-orange/20 rounded-lg p-4 text-center">
              <h3 className="text-lg font-bold text-accent-orange-500">52</h3>
              <p className="text-xs text-accent-orange-500 font-medium">Males</p>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                  <XAxis 
                    dataKey="class" 
                    tick={{ fontSize: 10, fill: "#666" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis 
                    tick={{ fontSize: 10, fill: "#666" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
                  <Bar 
                    dataKey="students" 
                    fill="#0A3D62" // primary-blue
                    radius={[4, 4, 0, 0]}
                    barSize={40}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
