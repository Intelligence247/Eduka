import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { UpcomingEvents } from "@/components/dashboard/upcoming-events"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard - Staff Portal",
  description: "Staff dashboard for Cedarwood International Academy",
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-dark-gray">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">Welcome back! Here's what's happening at Cedarwood today.</p>
        </div>
      </div>

      <DashboardStats />
      <QuickActions />

      <div className="grid gap-6 lg:grid-cols-2">
        <UpcomingEvents />
        <RecentActivity />
      </div>
    </div>
  )
}
