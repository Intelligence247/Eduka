"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock } from "lucide-react"
import { staff } from "@/lib/sdk"

export function UpcomingEvents() {
  const [events, setEvents] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    staff.school.getEvents({
      params: { status: "upcoming" },
      onSuccess: (data: any) => {
        // API docs say: { status: "success", data: [...] }
        if (data.status === "success" && Array.isArray(data.data)) {
             setEvents(data.data.slice(0, 3))
        }
        setLoading(false)
      },
      onError: (error: any) => {
        console.error("Failed to fetch events:", error)
        setLoading(false)
      },
    })
  }, [])

  if (loading) {
    return (
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-grey-900 mb-4">Upcoming Events</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="h-4 bg-grey-200 rounded w-3/4 mb-2" />
              <div className="h-3 bg-grey-200 rounded w-1/2" />
            </div>
          ))}
        </div>
      </Card>
    )
  }

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-grey-900">Upcoming Events</h3>
        <Button variant="link" className="text-primary-600" asChild>
          <a href="/staff/events">View all</a>
        </Button>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-4 border border-grey-200 rounded-lg hover:border-primary-300 transition-colors"
          >
            <h4 className="font-semibold text-grey-900 mb-2">{event.title}</h4>
            <div className="space-y-1 text-sm text-grey-600">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(event.date).toLocaleDateString("en-US", {
                  weekday: "short",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {event.time}
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                {event.venue}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
