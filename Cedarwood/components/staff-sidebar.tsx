"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Users, ClipboardCheck, FileText, Calendar, Settings, GraduationCap } from "lucide-react"
import { useEffect, useState } from "react"
import { staff } from "@/lib/sdk"

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
  const [school, setSchool] = useState<any>(null)

  useEffect(() => {
    staff.school.schoolInfo({
        onSuccess: (data: any) => {
            if (data.status === "success" && data.data) {
                setSchool(data.data)
            }
        },
        onError: (err: any) => console.error("Failed to fetch school info", err)
    })
  }, [])

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow border-r border-gray-200 bg-white overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-6 py-6 border-b border-gray-200">
            <div className="flex items-center">
              {school?.logo ? (
                  // Assuming logo is a URL. If it's relative, might need base URL handling
                  <img src={process.env.NEXT_PUBLIC_API_URL+school.logo} alt="Logo" className="w-10 h-10 rounded-lg object-cover" />
              ) : (
                <div className="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center">
                    <span className="text-xl font-bold text-white">{school?.name?.[0] || "C"}</span>
                </div>
              )}
              <div className="ml-3 truncate">
                <h2 className="text-lg font-semibold text-dark-gray truncate max-w-[140px]" title={school?.name}>
                    {school?.name || "Cedarwood"}
                </h2>
                <p className="text-xs text-gray-500">Staff Portal</p>
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
                    isActive ? "bg-primary-blue text-white" : "text-gray-600 hover:bg-gray-100 hover:text-dark-gray",
                  )}
                >
                  <Icon className={cn("mr-3 h-5 w-5", isActive ? "text-white" : "text-gray-500")} />
                  {item.name}
                </Link>
              )
            })}
          </nav>

          <div className="flex-shrink-0 border-t border-gray-200 p-4">
            <div className="flex items-center space-x-2">
               {/* Using a placeholder icon/image for Educa logo small */}
               <div className="w-8 h-8 bg-primary-blue rounded flex items-center justify-center text-white font-bold text-xs">E</div>
              <div className="text-xs text-gray-500">
                <div>Powered by Educa</div>
                <div className="text-[10px]">v1.0.0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
