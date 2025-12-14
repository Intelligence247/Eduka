"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, Bell, LogOut, User, Settings } from "lucide-react"
import { staff } from "@/lib/mockSdk"

export function StaffHeader() {
  const router = useRouter()
  const [notifications] = useState(3)

  const handleLogout = () => {
    staff.account.logout({
      onSuccess: () => {
        router.push("/login")
      },
      onError: (error) => {
        console.error("Logout error:", error)
      },
    })
  }

  return (
    <header className="bg-white border-b border-grey-200 sticky top-0 z-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 flex items-center max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-grey-400" />
              <Input type="search" placeholder="Search students, classes, events..." className="pl-10 w-full" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative p-2 text-grey-600 hover:text-grey-900 hover:bg-grey-100 rounded-lg transition-colors">
              <Bell className="h-5 w-5" />
              {notifications > 0 && <span className="absolute top-1 right-1 h-2 w-2 bg-error-600 rounded-full" />}
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-3 p-2 hover:bg-grey-100 rounded-lg transition-colors">
                  <img src="/professional-woman.png" alt="Profile" className="w-8 h-8 rounded-full" />
                  <span className="hidden md:block text-sm font-medium text-grey-900">Jane Foster</span>
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
                <DropdownMenuItem onClick={handleLogout} className="text-error-600">
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
