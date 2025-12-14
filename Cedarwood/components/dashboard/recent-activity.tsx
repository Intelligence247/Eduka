import { Card } from "@/components/ui/card"
import { FileText, ClipboardCheck, UserPlus, Bell } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "attendance",
    message: "Attendance marked for JSS 2A",
    time: "2 hours ago",
    icon: ClipboardCheck,
    color: "text-success-600",
    bgColor: "bg-success-50",
  },
  {
    id: 2,
    type: "results",
    message: "Mathematics test results uploaded",
    time: "5 hours ago",
    icon: FileText,
    color: "text-primary-600",
    bgColor: "bg-primary-50",
  },
  {
    id: 3,
    type: "student",
    message: "New student profile created",
    time: "1 day ago",
    icon: UserPlus,
    color: "text-accent-yellow-600",
    bgColor: "bg-accent-yellow-50",
  },
  {
    id: 4,
    type: "event",
    message: "Inter-House Sports reminder sent",
    time: "2 days ago",
    icon: Bell,
    color: "text-accent-orange-600",
    bgColor: "bg-accent-orange-50",
  },
]

export function RecentActivity() {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold text-grey-900 mb-4">Recent Activity</h3>

      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon
          return (
            <div key={activity.id} className="flex items-start gap-3">
              <div className={`p-2 rounded-lg ${activity.bgColor} flex-shrink-0`}>
                <Icon className={`h-4 w-4 ${activity.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-grey-900">{activity.message}</p>
                <p className="text-xs text-grey-500 mt-1">{activity.time}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
