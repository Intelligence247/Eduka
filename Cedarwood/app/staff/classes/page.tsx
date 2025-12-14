import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "My Classes - Staff Portal",
}

export default function ClassesPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-grey-900">My Classes</h1>
      <p className="mt-2 text-base text-grey-600">Manage your assigned classes and students</p>
      <div className="mt-8 text-grey-500">Classes content coming soon...</div>
    </div>
  )
}
