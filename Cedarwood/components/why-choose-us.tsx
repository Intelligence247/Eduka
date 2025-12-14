import { Shield, Users, Lightbulb, Trophy, Heart, Microscope } from "lucide-react"

export function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: "Safe Environment",
      description:
        "Round-the-clock security, medical support, and a nurturing atmosphere where every child feels protected and valued.",
    },
    {
      icon: Users,
      title: "Qualified Teachers",
      description:
        "Our educators hold advanced degrees and certifications, bringing years of experience and passion to every classroom.",
    },
    {
      icon: Lightbulb,
      title: "Montessori Methods",
      description:
        "Child-centered learning approaches that foster independence, curiosity, and natural love for education.",
    },
    {
      icon: Microscope,
      title: "Modern Facilities",
      description:
        "State-of-the-art science labs, computer rooms, libraries, and sports facilities that enhance practical learning.",
    },
    {
      icon: Trophy,
      title: "Excellence Track Record",
      description:
        "98% success rate in external exams with multiple students gaining admission to top universities annually.",
    },
    {
      icon: Heart,
      title: "Character Building",
      description:
        "We emphasize moral values, leadership skills, and emotional intelligence alongside academic excellence.",
    },
  ]

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-primary-600 mb-4">Why Choose Cedarwood</h2>
          <p className="text-[18px] leading-[28px] text-grey-600 max-w-3xl mx-auto">
            We go beyond academics to develop well-rounded individuals ready to excel in life
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-yellow/10 rounded-xl flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-accent-yellow group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <h5 className="text-grey-900 mb-2">{feature.title}</h5>
                  <p className="text-[14px] leading-[20px] text-grey-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Gallery */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2032&auto=format&fit=crop"
              alt="Students in classroom"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=2069&auto=format&fit=crop"
              alt="Happy students"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
              alt="School facilities"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
