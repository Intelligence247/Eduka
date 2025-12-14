"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, Bell, LogOut, User, Settings, MessageSquare } from "lucide-react"
import { staff } from "@/lib/sdk"

export function StaffHeader() {
  const router = useRouter()
  const [notifications] = useState(3)
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    staff.account.getProfile({
        onSuccess: (data: any) => {
            if(data.status === "success") {
                setUser(data.data)
            }
            setLoading(false)
        },
        onError: (err: any) => {
            console.error("Failed to fetch profile", err)
            // If unauthorized, maybe redirect or just show loading/error
            setLoading(false)
        }
    })
  }, [])

  const handleLogout = () => {
    staff.account.logout({
      onSuccess: () => {
        router.push("/login")
      },
      onError: (error: any) => {
        console.error("Logout error:", error)
        // Force redirect anyway
        router.push("/login")
      },
    })
  }

  // Helper for initials
  const initials = user 
    ? `${user.firstName?.[0] || ""}${user.lastName?.[0] || ""}`.toUpperCase()
    : ""

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 flex items-center max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input type="search" placeholder="Search students, classes, events..." className="pl-10 w-full" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Message Icon */}
            <button className="relative p-2 text-gray-500 hover:text-dark-gray hover:bg-gray-100 rounded-lg transition-colors">
              <MessageSquare className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-error rounded-full" />
            </button>

            {/* Notification Icon */}
            <button className="relative p-2 text-gray-500 hover:text-dark-gray hover:bg-gray-100 rounded-lg transition-colors">
              <Bell className="h-5 w-5" />
              {notifications > 0 && <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />}
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg transition-colors outline-none">
                  <div className="w-8 h-8 bg-primary-blue rounded-full flex items-center justify-center text-white font-medium">
                    {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : initials || "U"}
                  </div>
                  <div className="hidden md:block text-left">
                    <div className="text-sm font-medium text-dark-gray">
                        {loading ? "Loading..." : (user ? `${user.firstName} ${user.lastName}` : "User")}
                    </div>
                    <div className="text-xs text-gray-500">{user?.role || "Staff"}</div>
                  </div>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-error-600 cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}
