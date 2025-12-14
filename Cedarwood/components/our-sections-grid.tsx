import { Baby, School, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function OurSectionsGrid() {
  return (
    <section id="sections" className="py-24 lg:py-32 bg-grey-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-primary-600 mb-4">Our Educational Sections</h2>
          <p className="text-[18px] leading-[28px] text-grey-600 max-w-3xl mx-auto">
            Comprehensive education tailored to each developmental stage, from toddlers to young adults ready for
            university
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Early Years */}
          <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=2070&auto=format&fit=crop"
                alt="Early Years - Toddlers learning through play"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 w-14 h-14 bg-accent-yellow rounded-full flex items-center justify-center shadow-lg">
                <Baby className="w-7 h-7 text-grey-900" />
              </div>
            </div>
            <div className="p-8">
              <h4 className="text-primary-600 mb-3">Early Years</h4>
              <p className="text-sm text-grey-600 mb-2 font-medium">Crèche & Nursery (Ages 2-5)</p>
              <p className="text-[14px] leading-[20px] text-grey-700 mb-6">
                A nurturing foundation where young minds begin their educational journey. We use Montessori methods and
                play-based learning to develop creativity, social skills, and early literacy.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm text-grey-700">
                  <span className="w-1.5 h-1.5 bg-accent-yellow rounded-full mt-2" />
                  Play-based learning approach
                </li>
                <li className="flex items-start gap-2 text-sm text-grey-700">
                  <span className="w-1.5 h-1.5 bg-accent-yellow rounded-full mt-2" />
                  Safe, colorful environment
                </li>
                <li className="flex items-start gap-2 text-sm text-grey-700">
                  <span className="w-1.5 h-1.5 bg-accent-yellow rounded-full mt-2" />
                  Certified early childhood educators
                </li>
              </ul>
              <Button
                variant="outline"
                className="w-full border-primary-600 text-primary-600 hover:bg-primary-50 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Primary Section */}
          <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
                alt="Primary Section - Children in classroom"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 w-14 h-14 bg-accent-yellow rounded-full flex items-center justify-center shadow-lg">
                <School className="w-7 h-7 text-grey-900" />
              </div>
            </div>
            <div className="p-8">
              <h4 className="text-primary-600 mb-3">Primary Section</h4>
              <p className="text-sm text-grey-600 mb-2 font-medium">Basic 1 - 6 (Ages 6-11)</p>
              <p className="text-[14px] leading-[20px] text-grey-700 mb-6">
                Building strong academic foundations across all subjects. Our curriculum combines the Nigerian and
                British systems to provide comprehensive, world-class primary education.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm text-grey-700">
                  <span className="w-1.5 h-1.5 bg-accent-yellow rounded-full mt-2" />
                  Dual curriculum approach
                </li>
                <li className="flex items-start gap-2 text-sm text-grey-700">
                  <span className="w-1.5 h-1.5 bg-accent-yellow rounded-full mt-2" />
                  Interactive learning methods
                </li>
                <li className="flex items-start gap-2 text-sm text-grey-700">
                  <span className="w-1.5 h-1.5 bg-accent-yellow rounded-full mt-2" />
                  Character development focus
                </li>
              </ul>
              <Button
                variant="outline"
                className="w-full border-primary-600 text-primary-600 hover:bg-primary-50 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Secondary Section */}
          <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                alt="Secondary Section - Teenagers in science lab"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 w-14 h-14 bg-accent-yellow rounded-full flex items-center justify-center shadow-lg">
                <GraduationCap className="w-7 h-7 text-grey-900" />
              </div>
            </div>
            <div className="p-8">
              <h4 className="text-primary-600 mb-3">Secondary Section</h4>
              <p className="text-sm text-grey-600 mb-2 font-medium">JSS 1 - SSS 3 (Ages 12-18)</p>
              <p className="text-[14px] leading-[20px] text-grey-700 mb-6">
                Preparing students for WAEC, NECO, and JAMB with excellence. Advanced curriculum with modern labs,
                career guidance, and university preparation programs.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm text-grey-700">
                  <span className="w-1.5 h-1.5 bg-accent-yellow rounded-full mt-2" />
                  Exam-focused preparation
                </li>
                <li className="flex items-start gap-2 text-sm text-grey-700">
                  <span className="w-1.5 h-1.5 bg-accent-yellow rounded-full mt-2" />
                  Modern science & computer labs
                </li>
                <li className="flex items-start gap-2 text-sm text-grey-700">
                  <span className="w-1.5 h-1.5 bg-accent-yellow rounded-full mt-2" />
                  Career counseling programs
                </li>
              </ul>
              <Button
                variant="outline"
                className="w-full border-primary-600 text-primary-600 hover:bg-primary-50 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
