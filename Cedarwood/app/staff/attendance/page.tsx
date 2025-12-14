import { AttendanceContent } from "@/components/attendance/attendance-content"

export default function AttendancePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-dark-gray">Attendance</h1>
          <p className="text-gray-500 mt-1">Mark and view daily attendance</p>
        </div>
      </div>
      <AttendanceContent />
    </div>
  )
}
