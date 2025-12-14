"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { staff } from "@/lib/sdk"

export function AttendanceContent() {
  const [students, setStudents] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // For now, fetch all students. Ideally we select a class first.
    // Using studentList as placeholder, or could use classroom.getClassroomStudents if we knew a roomId
    staff.student.studentList({
        params: { page: 1, limit: 50 },
        onSuccess: (data: any) => {
            if(data.status === "success" && Array.isArray(data.data)) {
                // Mocking attendance status for now as we don't have a "getTodayAttendance" that works without roomId easily
                const studentsWithStatus = data.data.map((s: any) => ({
                    ...s,
                    status: 'present' // default
                }))
                setStudents(studentsWithStatus)
            }
            setLoading(false)
        },
        onError: (err: any) => {
            console.error("Error fetching students for attendance", err)
            setLoading(false)
        }
    })
  }, [])

  const toggleStatus = (id: string) => {
    setStudents(students.map(s => {
        if(s.student_id === id) {
            return { ...s, status: s.status === 'present' ? 'absent' : 'present' }
        }
        return s
    }))
  }

  const saveAttendance = () => {
    // Mock save
    alert("Attendance saved locally. (API Integration pending specific class selection logic)")
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Search students..." className="pl-9" />
        </div>
        <div className="flex gap-2">
            <Button onClick={saveAttendance} className="bg-primary-blue hover:bg-primary-blue/90 text-white">
                Save Attendance
            </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50/50">
              <TableHead className="w-[300px]">Student Name</TableHead>
              <TableHead>ID</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
                <TableRow>
                    <TableCell colSpan={4} className="text-center py-8 text-gray-500">Loading students...</TableCell>
                </TableRow>
            ) : students.length === 0 ? (
                <TableRow>
                     <TableCell colSpan={4} className="text-center py-8 text-gray-500">No students found.</TableCell>
                </TableRow>
            ) : (
                students.map((student) => (
                <TableRow key={student.student_id} className="hover:bg-gray-50 transition-colors">
                    <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary-blue/10 flex items-center justify-center text-primary-blue font-medium text-xs">
                        {student.firstName?.[0]}{student.lastName?.[0]}
                        </div>
                        <div className="flex flex-col">
                            <span>{student.firstName} {student.lastName}</span>
                            <span className="text-xs text-gray-400">{student.student_id}</span>
                        </div>
                    </div>
                    </TableCell>
                    <TableCell className="text-gray-500">{student.student_id}</TableCell>
                    <TableCell className="text-gray-500 capitalize">{student.gender}</TableCell>
                    <TableCell className="text-right">
                        <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => toggleStatus(student.student_id)}
                            className={student.status === 'present' ? 
                                "bg-green-50 text-green-700 border-green-200 hover:bg-green-100 hover:text-green-800" : 
                                "bg-red-50 text-red-700 border-red-200 hover:bg-red-100 hover:text-red-800"
                            }
                        >
                            {student.status === 'present' ? "Present" : "Absent"}
                        </Button>
                    </TableCell>
                </TableRow>
                ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
