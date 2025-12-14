"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Users, ClipboardCheck, FileText, Calendar, Settings, GraduationCap } from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/staff/dashboard", icon: LayoutDashboard },
  { name: "My Classes", href: "/staff/classes", icon: GraduationCap },
  { name: "Students", href: "/staff/students", icon: Users },
  { name: "Attendance", href: "/staff/attendance", icon: ClipboardCheck },
  { name: "Results", href: "/staff/results", icon: FileText },
  { name: "Events", href: "/staff/events", icon: Calendar },
  { name: "Settings", href: "/staff/settings", icon: Settings },
]

export function StaffSidebar() {
  const pathname = usePathname()

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow border-r border-grey-200 bg-white overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-6 py-6 border-b border-grey-200">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">C</span>
              </div>
              <div className="ml-3">
                <h2 className="text-lg font-semibold text-grey-900">Cedarwood</h2>
                <p className="text-xs text-grey-600">Staff Portal</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 px-4 py-4 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                    isActive ? "bg-primary-50 text-primary-700" : "text-grey-700 hover:bg-grey-100 hover:text-grey-900",
                  )}
                >
                  <Icon className={cn("mr-3 h-5 w-5", isActive ? "text-primary-600" : "text-grey-500")} />
                  {item.name}
                </Link>
              )
            })}
          </nav>

          <div className="flex-shrink-0 border-t border-grey-200 p-4">
            <div className="flex items-center">
              <img src="/professional-woman.png" alt="Profile" className="w-10 h-10 rounded-full" />
              <div className="ml-3">
                <p className="text-sm font-medium text-grey-900">Jane Foster</p>
                <p className="text-xs text-grey-600">English Teacher</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
