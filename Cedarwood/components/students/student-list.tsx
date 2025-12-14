"use client"

import type React from "react"
import { useState } from "react"
import { Eye, CheckSquare, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

// Context: Staff viewing students. Actions might be "View", "Attendance", "Message"
interface Student {
  id: string
  name: string
  gender: string
  class: string
  status: string
}

interface StudentListProps {
  students: Student[]
}

export function StudentList({ students }: StudentListProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const studentsPerPage = 10

  const indexOfLastStudent = currentPage * studentsPerPage
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage
  const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent)

  const totalPages = Math.ceil(students.length / studentsPerPage)

  const getStatusColor = (status: string) => {
    return status === "Active" ? "text-success-600 bg-success/10" : "text-error-600 bg-error/10"
  }

  return (
    <div>
      {/* Student Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left py-3 px-4 font-medium text-gray-600">Student ID</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Full Name</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Gender</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Class</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentStudents.map((student, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 text-dark-gray font-medium">{student.id}</td>
                <td className="py-3 px-4 text-gray-600">{student.name}</td>
                <td className="py-3 px-4 text-gray-600">{student.gender}</td>
                <td className="py-3 px-4 text-gray-600">{student.class}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(student.status)}`}>
                    {student.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-2">
                    <button className="p-1 text-primary-600 hover:bg-primary-50 rounded transition-colors" title="View Details">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-success-600 hover:bg-success/10 rounded transition-colors" title="Mark Attendance">
                      <CheckSquare className="w-4 h-4" />
                    </button>
                     <button className="p-1 text-accent-orange-500 hover:bg-accent-orange-500/10 rounded transition-colors" title="Message Parent">
                      <MessageSquare className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <div className="text-sm text-gray-600">
          Showing {indexOfFirstStudent + 1} to {Math.min(indexOfLastStudent, students.length)} of {students.length} results
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="h-8 px-3 text-sm"
          >
            Previous
          </Button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 text-sm border rounded h-8 transition-colors ${
                currentPage === page
                  ? "bg-primary-blue text-white border-primary-blue"
                  : "border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="h-8 px-3 text-sm"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
