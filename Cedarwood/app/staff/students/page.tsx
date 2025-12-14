import type { Metadata } from "next"
import { StudentsContent } from "@/components/students/students-content"

export const metadata: Metadata = {
  title: "Students - Staff Portal",
}

export default function StudentsPage() {
  return <StudentsContent />
}
