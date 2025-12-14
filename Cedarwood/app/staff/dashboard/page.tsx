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
      <div>
        <h1 className="text-4xl font-bold text-grey-900">Dashboard</h1>
        <p className="mt-2 text-base text-grey-600">Welcome back! Here's what's happening at Cedarwood today.</p>
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
