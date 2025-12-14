import Link from "next/link"
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-grey-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">Cedarwood</span>
                <span className="text-xs text-grey-400">International Academy</span>
              </div>
            </Link>
            <p className="text-sm text-grey-400 mb-6">Nurturing Excellence, Building Character since 2001.</p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-grey-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-grey-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-grey-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-grey-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-white mb-4">Quick Links</h6>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-sm text-grey-400 hover:text-accent-yellow transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#sections" className="text-sm text-grey-400 hover:text-accent-yellow transition-colors">
                  Our Sections
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="text-sm text-grey-400 hover:text-accent-yellow transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="#events" className="text-sm text-grey-400 hover:text-accent-yellow transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-sm text-grey-400 hover:text-accent-yellow transition-colors">
                  Login Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h6 className="text-white mb-4">Admissions</h6>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-grey-400 hover:text-accent-yellow transition-colors">
                  Admission Process
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-grey-400 hover:text-accent-yellow transition-colors">
                  School Fees
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-grey-400 hover:text-accent-yellow transition-colors">
                  Scholarships
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-grey-400 hover:text-accent-yellow transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-grey-400 hover:text-accent-yellow transition-colors">
                  Download Forms
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h6 className="text-white mb-4">Contact Us</h6>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-0.5" />
                <span className="text-sm text-grey-400">
                  11 Allen Avenue, Ikeja,
                  <br />
                  Lagos State, Nigeria
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-0.5" />
                <span className="text-sm text-grey-400">+234 901 234 5678</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-0.5" />
                <span className="text-sm text-grey-400">info@cedarwood.edu.ng</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-grey-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-grey-400">© 2025 Cedarwood International Academy. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-grey-400 hover:text-accent-yellow transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-grey-400 hover:text-accent-yellow transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-grey-400 hover:text-accent-yellow transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
