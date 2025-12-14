import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EventsPreview() {
  const events = [
    {
      title: "Inter-House Sports Competition",
      date: "December 20, 2024",
      time: "8:00 AM - 4:00 PM",
      venue: "School Sports Complex",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Parents-Teachers Association Meeting",
      date: "January 15, 2025",
      time: "10:00 AM - 12:00 PM",
      venue: "School Auditorium",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Common Entrance Examination Prep",
      date: "January 22, 2025",
      time: "9:00 AM - 1:00 PM",
      venue: "Examination Hall",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
    },
  ]

  return (
    <section id="events" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-primary-600 mb-4">Upcoming Events</h2>
            <p className="text-[18px] leading-[28px] text-grey-600 max-w-2xl">
              Stay connected with our vibrant school community through exciting events and activities
            </p>
          </div>
          <Button
            variant="outline"
            className="hidden md:flex border-primary-600 text-primary-600 hover:bg-primary-50 bg-transparent"
          >
            View All Events
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group bg-grey-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-accent-yellow px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-grey-900">{event.status}</span>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6">
                <h5 className="text-grey-900 mb-4 group-hover:text-primary-600 transition-colors">{event.title}</h5>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-grey-600">
                    <Calendar className="w-4 h-4 text-primary-600 flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-grey-600">
                    <Clock className="w-4 h-4 text-primary-600 flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-grey-600">
                    <MapPin className="w-4 h-4 text-primary-600 flex-shrink-0" />
                    <span>{event.venue}</span>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  className="w-full mt-6 text-primary-600 hover:bg-primary-50 group-hover:bg-primary-600 group-hover:text-white transition-all"
                >
                  View Details
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 flex justify-center md:hidden">
          <Button variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-50 bg-transparent">
            View All Events
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
