"use client"

import { useState, useEffect } from "react"
import { Search, FileText } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { staff } from "@/lib/sdk"

export function ResultsContent() {
  const [results, setResults] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch Exam Scores
    // The specific params would depend on filter selection (Subject/Class)
    // For now, fetching general scores or a default set
    staff.exam.getExamScores({
        params: { limit: 20 },
        onSuccess: (data: any) => {
             // Adapt data structure if needed. 
             // Assuming data.data is list of result objects
             if(data.status === "success" && Array.isArray(data.data)) {
                 setResults(data.data)
             } else {
                 // Fallback Mock if API returns empty for new staff/school
                 // Remove this in prod if actual data is expected
                 setResults([]) 
             }
             setLoading(false)
        },
        onError: (err: any) => {
            console.error("Error fetching results", err)
            setLoading(false)
        }
    })
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Search results..." className="pl-9" />
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50/50">
              <TableHead className="w-[300px]">Student Name</TableHead>
              <TableHead>Exam ID/Subject</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
                 <TableRow>
                    <TableCell colSpan={5} className="text-center py-8 text-gray-500">Loading results...</TableCell>
                </TableRow>
            ) : results.length === 0 ? (
                 <TableRow>
                    <TableCell colSpan={5} className="text-center py-8 text-gray-500">No results found.</TableCell>
                </TableRow>
            ) : (
                results.map((result, idx) => (
                <TableRow key={idx} className="hover:bg-gray-50 transition-colors">
                    <TableCell className="font-medium">
                        {/* Assuming result structure */}
                        {result.student_name || "Unknown Student"}
                    </TableCell>
                    <TableCell>{result.subject || result.exam_id}</TableCell>
                    <TableCell>{result.score}</TableCell>
                    <TableCell>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                            (result.score >= 70) ? "bg-green-100 text-green-700" : 
                            (result.score >= 50) ? "bg-yellow-100 text-yellow-700" : 
                            "bg-red-100 text-red-700"
                        }`}>
                            {result.grade || (result.score >= 70 ? "A" : result.score >= 50 ? "C" : "F")}
                        </span>
                    </TableCell>
                    <TableCell className="text-right">
                        <button className="p-2 text-primary-blue hover:bg-blue-50 rounded transition-colors">
                            <FileText className="h-4 w-4" />
                        </button>
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
