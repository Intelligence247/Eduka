"use client"

import { Card } from "@/components/ui/card"
import { Users, UserCheck, Calendar, TrendingUp } from "lucide-react"

const stats = [
  {
    name: "Total Students",
    value: "850",
    change: "+12 this term",
    changeType: "increase",
    icon: Users,
    color: "text-primary-600",
    bgColor: "bg-primary-50",
  },
  {
    name: "Staff Present",
    value: "42/45",
    change: "93% attendance",
    changeType: "neutral",
    icon: UserCheck,
    color: "text-success-600",
    bgColor: "bg-success-50",
  },
  {
    name: "Upcoming Term",
    value: "12 Days",
    change: "2nd Term begins Jan 12",
    changeType: "neutral",
    icon: Calendar,
    color: "text-accent-yellow-600",
    bgColor: "bg-accent-yellow-50",
  },
  {
    name: "Average Performance",
    value: "78%",
    change: "+5% from last term",
    changeType: "increase",
    icon: TrendingUp,
    color: "text-accent-orange-600",
    bgColor: "bg-accent-orange-50",
  },
]

export function DashboardStats() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.name} className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-grey-600">{stat.name}</p>
                <p className="mt-2 text-3xl font-bold text-grey-900">{stat.value}</p>
                <p className="mt-1 text-xs text-grey-500">{stat.change}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <Icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
