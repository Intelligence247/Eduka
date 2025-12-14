import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, BookOpen } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop"
          alt="Students studying in library"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/90 to-primary-700/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent-yellow/20 backdrop-blur-sm border border-accent-yellow/30 rounded-full px-4 py-2 mb-8">
            <Award className="w-4 h-4 text-accent-yellow" />
            <span className="text-sm font-medium text-white">Award-Winning Education Since 2001</span>
          </div>

          {/* Headline */}
          <h1 className="text-white mb-6 text-balance">World-Class Education from Nursery to Secondary</h1>

          {/* Subheadline */}
          <p className="text-[18px] leading-[28px] text-white/90 mb-8 max-w-2xl text-pretty">
            At Cedarwood International Academy, we nurture excellence and build character in every child. From Crèche to
            Senior Secondary, we provide a safe, inspiring environment where young minds thrive.
          </p>

          {/* Motto */}
          <div className="flex items-center gap-3 mb-10 p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg inline-flex">
            <div className="w-1 h-12 bg-accent-yellow rounded-full" />
            <div>
              <p className="text-sm text-white/70 mb-1">Our Motto</p>
              <p className="text-lg font-semibold text-white">"Nurturing Excellence, Building Character"</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-accent-yellow hover:bg-accent-yellow-600 text-grey-900 px-8 py-6 rounded-lg font-semibold text-base transition-all hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-6 rounded-lg font-semibold text-base transition-all bg-transparent"
            >
              Schedule a Tour
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-white/20">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-accent-yellow" />
                <p className="text-3xl font-bold text-white">850+</p>
              </div>
              <p className="text-sm text-white/70">Active Students</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-5 h-5 text-accent-yellow" />
                <p className="text-3xl font-bold text-white">45+</p>
              </div>
              <p className="text-sm text-white/70">Qualified Teachers</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-accent-yellow" />
                <p className="text-3xl font-bold text-white">98%</p>
              </div>
              <p className="text-sm text-white/70">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
