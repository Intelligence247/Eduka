"use client"

import { useEffect, useState } from "react"
import { ClassList } from "@/components/classes/class-list"
import { Button } from "@/components/ui/button"
import { Plus, SlidersHorizontal, Loader2 } from "lucide-react"
import { staff } from "@/lib/sdk"

export function ClassesContent() {
  const [classes, setClasses] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch staff profile to get assigned classes
    staff.account.getProfile({
        onSuccess: (data: any) => {
            if (data.status === "success" && data.data && Array.isArray(data.data.classes_assigned)) {
                // Map the string array (or object array) to the format expected by ClassList
                // If it's just strings, we mock the rest or set defaults
                const assigned = data.data.classes_assigned.map((cls: any, index: number) => {
                    const className = typeof cls === "string" ? cls : cls.name || "Unknown Class"
                    return {
                        id: `CLS-${index}`,
                        name: className,
                        subject: "Assigned Subject", // API doesn't seem to provide this in profile
                        students: 0, // Placeholder
                        schedule: "TBD", // Placeholder
                        room: "TBD" // Placeholder
                    }
                })
                setClasses(assigned)
            }
            setLoading(false)
        },
        onError: (err: any) => {
            console.error("Failed to fetch profile/classes", err)
            setLoading(false)
        }
    })
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
           <h1 className="text-2xl font-bold text-dark-gray">My Classes</h1>
           <p className="mt-1 text-sm text-gray-500">Manage your assigned classes and subjects</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filter</span>
          </Button>
          <Button className="bg-primary-blue hover:bg-primary-blue/90 text-white flex items-center gap-2">
            <Plus className="w-4 h-4" />
            <span>Request Schedule Change</span>
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
         {loading ? (
             <div className="flex justify-center py-8">
                 <Loader2 className="h-8 w-8 animate-spin text-primary-blue" />
             </div>
         ) : (
            <ClassList classes={classes} />
         )}
      </div>
    </div>
  )
}
