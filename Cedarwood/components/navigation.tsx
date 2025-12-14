import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap } from "lucide-react"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-grey-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-grey-900">Cedarwood</span>
              <span className="text-xs text-grey-600">International Academy</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-sm font-medium text-grey-700 hover:text-primary-600 transition-colors">
              About Us
            </Link>
            <Link
              href="#sections"
              className="text-sm font-medium text-grey-700 hover:text-primary-600 transition-colors"
            >
              Our Sections
            </Link>
            <Link href="#why-us" className="text-sm font-medium text-grey-700 hover:text-primary-600 transition-colors">
              Why Choose Us
            </Link>
            <Link href="#events" className="text-sm font-medium text-grey-700 hover:text-primary-600 transition-colors">
              Events
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-grey-700 hover:text-primary-600 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Login Button */}
          <Button
            asChild
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium text-sm transition-colors"
          >
            <Link href="/login">Login Portal</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
