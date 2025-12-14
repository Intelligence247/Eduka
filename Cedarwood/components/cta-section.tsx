import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-primary-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-6">Ready to Give Your Child the Best Education?</h2>
          <p className="text-[18px] leading-[28px] text-white/90 mb-10 max-w-2xl mx-auto">
            Join the Cedarwood family today. Schedule a tour, meet our teachers, and discover why parents trust us with
            their children's future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-accent-yellow hover:bg-accent-yellow-600 text-grey-900 px-8 py-6 rounded-lg font-semibold text-base transition-all hover:scale-105"
            >
              Schedule a School Tour
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-6 rounded-lg font-semibold text-base transition-all bg-transparent"
            >
              Download Prospectus
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl">
              <Phone className="w-5 h-5 text-accent-yellow" />
              <div className="text-left">
                <p className="text-xs text-white/70 mb-1">Call Us</p>
                <p className="text-sm font-semibold text-white">+234 901 234 5678</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl">
              <Mail className="w-5 h-5 text-accent-yellow" />
              <div className="text-left">
                <p className="text-xs text-white/70 mb-1">Email Us</p>
                <p className="text-sm font-semibold text-white">info@cedarwood.edu.ng</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
