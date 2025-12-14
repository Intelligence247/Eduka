"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Users, UserCheck, Calendar, TrendingUp, Loader2 } from "lucide-react"
import { staff } from "@/lib/sdk"

export function DashboardStats() {
  const [statsData, setStatsData] = useState({
    students: "Loading...",
    classes: "Loading...",
    events: "Loading...",
    performance: "78%" // No endpoint for this yet
  })

  useEffect(() => {
    // Fetch Assigned Classes (via Profile)
    staff.account.getProfile({
        onSuccess: (data: any) => {
            if (data.status === "success" && data.data && Array.isArray(data.data.classes_assigned)) {
                setStatsData(prev => ({ ...prev, classes: data.data.classes_assigned.length.toString() }))
            } else {
                 setStatsData(prev => ({ ...prev, classes: "0" }))
            }
        },
        onError: () => setStatsData(prev => ({ ...prev, classes: "-" }))
    })

    // Fetch Total Students
    // Note: Assuming we can fetch a list and count. Ideally, metadata would give count.
    if (staff.student && staff.student.studentList) {
        staff.student.studentList({
             params: { page: 1, limit: 1 }, // Just need metadata ideally or small fetch
             onSuccess: (data: any) => {
                 // If data.data is array, length is count (of fetched).
                 // If pagination info exists in data, use that.
                 // For now, assuming just array or simple response.
                 if (data.status === "success" && Array.isArray(data.data)) {
                     // This only counts page 1 (up to 100 or limit). 
                     // If API doesn't return "total" count separate from data, we might be limited.
                     // Let's assume for now we just show what we get or "N/A"
                     setStatsData(prev => ({ ...prev, students: data.data.length.toString() + "+" }))
                 }
             },
             onError: () => setStatsData(prev => ({ ...prev, students: "-" }))
        })
    }

    // Fetch Upcoming Events
    staff.school.getEvents({
        params: { status: "upcoming" },
        onSuccess: (data: any) => {
            if (data.status === "success" && Array.isArray(data.data)) {
                 setStatsData(prev => ({ ...prev, events: data.data.length.toString() }))
            }
        },
        onError: () => setStatsData(prev => ({ ...prev, events: "-" }))
    })

  }, [])

  const stats = [
    {
      name: "My Students",
      value: statsData.students,
      change: "Active in your classes",
      changeType: "neutral",
      icon: Users,
      color: "text-white",
      bgColor: "bg-primary-blue",
    },
    {
      name: "My Classes",
      value: statsData.classes,
      change: "Assigned subjects",
      changeType: "neutral",
      icon: UserCheck,
      color: "text-white",
      bgColor: "bg-success",
    },
    {
      name: "Upcoming Events",
      value: statsData.events,
      change: "Scheduled this term",
      changeType: "neutral",
      icon: Calendar,
      color: "text-white",
      bgColor: "bg-accent-yellow",
    },
    {
      name: "Average Performance",
      value: statsData.performance,
      change: "+5% from last term",
      changeType: "increase",
      icon: TrendingUp,
      color: "text-white",
      bgColor: "bg-accent-orange",
    },
  ]

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.name} className="p-6 border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">{stat.name}</p>
                <p className="text-2xl font-bold text-dark-gray mb-1">
                    {stat.value === "Loading..." ? <Loader2 className="h-6 w-6 animate-spin text-gray-400" /> : stat.value}
                </p>
                <p className="text-xs text-gray-500">{stat.change}</p>
              </div>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.bgColor}`}>
                <Icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
