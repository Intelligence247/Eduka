"use client"

import type React from "react"
import { useState } from "react"
import { Eye, Users, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ClassItem {
  id: string
  name: string
  subject: string
  students: number
  schedule: string
  room: string
}

interface ClassListProps {
  classes: ClassItem[]
}

export function ClassList({ classes }: ClassListProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentClasses = classes.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(classes.length / itemsPerPage)

  return (
    <div>
      {/* Classes Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left py-3 px-4 font-medium text-gray-600">Class Name</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Subject</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Students</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Schedule</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Room</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentClasses.map((item, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 text-dark-gray font-medium">{item.name}</td>
                <td className="py-3 px-4 text-gray-600">{item.subject}</td>
                <td className="py-3 px-4 text-gray-600 flex items-center gap-1">
                   <Users className="w-4 h-4 text-gray-400" />
                   {item.students}
                </td>
                <td className="py-3 px-4 text-gray-600">{item.schedule}</td>
                <td className="py-3 px-4 text-gray-600">{item.room}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-2">
                    <button className="p-1 text-primary-600 hover:bg-primary-50 rounded transition-colors" title="View Students">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-accent-orange-500 hover:bg-accent-orange/10 rounded transition-colors" title="View Timetable">
                      <Calendar className="w-4 h-4" />
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
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, classes.length)} of {classes.length} results
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
