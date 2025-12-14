import type { Metadata } from "next"
import { ClassesContent } from "@/components/classes/classes-content"

export const metadata: Metadata = {
  title: "My Classes - Staff Portal",
}

export default function ClassesPage() {
  return <ClassesContent />
}
