import type React from "react"
import { StaffSidebar } from "@/components/staff-sidebar"
import { StaffHeader } from "@/components/staff-header"

export default function StaffLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-grey-50">
      <StaffSidebar />

      <div className="lg:pl-64">
        <StaffHeader />

        <main className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  )
}
