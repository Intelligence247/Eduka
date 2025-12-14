import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Students - Staff Portal",
}

export default function StudentsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-grey-900">Students</h1>
      <p className="mt-2 text-base text-grey-600">Browse and manage student records</p>
      <div className="mt-8 text-grey-500">Students content coming soon...</div>
    </div>
  )
}
