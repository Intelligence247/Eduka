import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ClipboardCheck, FileText, UserPlus, Calendar } from "lucide-react"

const actions = [
  {
    name: "Mark Attendance",
    description: "Record student attendance for today",
    icon: ClipboardCheck,
    href: "/staff/attendance",
  },
  {
    name: "Enter Results",
    description: "Input test scores and grades",
    icon: FileText,
    href: "/staff/results",
  },
  {
    name: "View Students",
    description: "Browse student profiles and records",
    icon: UserPlus,
    href: "/staff/students",
  },
  {
    name: "Schedule Event",
    description: "Create or manage school events",
    icon: Calendar,
    href: "/staff/events",
  },
]

export function QuickActions() {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold text-grey-900 mb-4">Quick Actions</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {actions.map((action) => {
          const Icon = action.icon
          return (
            <Button
              key={action.name}
              variant="outline"
              className="h-auto flex-col items-start p-4 text-left hover:bg-grey-50 bg-transparent"
              asChild
            >
              <a href={action.href}>
                <Icon className="h-5 w-5 text-primary-600 mb-2" />
                <div className="font-medium text-grey-900">{action.name}</div>
                <div className="text-xs text-grey-600 mt-1">{action.description}</div>
              </a>
            </Button>
          )
        })}
      </div>
    </Card>
  )
}
