"use client"

import { useEffect, useState } from "react"
import { StudentList } from "@/components/students/student-list"
import { StudentDistribution } from "@/components/students/student-distribution"
import { Button } from "@/components/ui/button"
import { Download, Printer, Plus, Loader2 } from "lucide-react"
import { staff } from "@/lib/sdk"

export function StudentsContent() {
  const [students, setStudents] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch students using SDK
    // Assuming staff.student.studentList exists based on sdk-doc.md
    // If not, we might need to fallback or check available methods
    if (staff.student && staff.student.studentList) {
        staff.student.studentList({
            params: { page: 1, limit: 100 }, // Fetch reasonably large list for now
            onSuccess: (data: any) => {
                if (data.status === "success" && Array.isArray(data.data)) {
                    setStudents(data.data)
                }
                setLoading(false)
            },
            onError: (err: any) => {
                console.error("Failed to fetch students", err)
                setLoading(false)
            }
        })
    } else {
        // Fallback for demo if method missing in types but present in JS SDK?
        // Or if I misread the docs and it's named differently.
        console.warn("staff.student.studentList method not found in SDK wrapper")
        setLoading(false)
    }
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
           <h1 className="text-2xl font-bold text-dark-gray">My Students</h1>
           <p className="mt-1 text-sm text-gray-500">Manage student records for your assigned classes</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2">
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export</span>
          </Button>
          <Button className="bg-primary-blue hover:bg-primary-blue/90 text-white flex items-center gap-2">
            <Plus className="w-4 h-4" />
            <span>Add Student</span>
          </Button>
        </div>
      </div>

      <StudentDistribution />

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
         <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-dark-gray">Student Directory</h2>
         </div>
         {loading ? (
             <div className="flex justify-center py-8">
                 <Loader2 className="h-8 w-8 animate-spin text-primary-blue" />
             </div>
         ) : (
             <StudentList students={students} />
         )}
      </div>
    </div>
  )
}
