import { CheckCircle2, Target, Eye, Award } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-grey-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
                alt="Cedarwood International Academy campus"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-grey-900">23+</p>
                  <p className="text-sm text-grey-600">Years of Excellence</p>
                </div>
              </div>
              <p className="text-xs text-grey-600">
                Established in 2001, we've been shaping futures for over two decades
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary-50 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-semibold text-primary-600">About Us</span>
            </div>

            <h3 className="text-grey-900 mb-6">Building Tomorrow's Leaders Today</h3>

            <p className="text-[16px] leading-[24px] text-grey-700 mb-6">
              Cedarwood International Academy was founded in 2001 with a clear vision: to provide world-class education
              that nurtures both academic excellence and strong character in every child.
            </p>

            <p className="text-[16px] leading-[24px] text-grey-700 mb-8">
              Over the past 23 years, we've grown from a small nursery school into a comprehensive educational
              institution serving over 850 students from Crèche to Senior Secondary level. Our commitment to excellence
              has earned us recognition as one of Nigeria's leading K-12 institutions.
            </p>

            {/* Mission & Vision */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h6 className="text-grey-900 mb-2">Our Mission</h6>
                  <p className="text-[14px] leading-[20px] text-grey-600">
                    To provide holistic education that develops intellectual, physical, social, and moral capabilities
                    in a safe and inspiring environment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h6 className="text-grey-900 mb-2">Our Vision</h6>
                  <p className="text-[14px] leading-[20px] text-grey-600">
                    To be the leading K-12 institution in Nigeria, recognized for producing confident, well-rounded
                    graduates who excel in academics and life.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-grey-900 mb-3">Our Core Values:</p>
              {[
                "Excellence in All We Do",
                "Integrity & Honesty",
                "Respect & Compassion",
                "Innovation & Creativity",
              ].map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-yellow flex-shrink-0" />
                  <span className="text-[14px] text-grey-700">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
