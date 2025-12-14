import { LoginForm } from "@/components/login-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Staff Login - Cedarwood International Academy",
  description: "Login to access your staff dashboard and manage school activities",
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-grey-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-white">C</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-grey-900">Staff Portal</h2>
          <p className="mt-2 text-base text-grey-600">Sign in to access your dashboard</p>
        </div>

        <LoginForm />

        <div className="mt-6 text-center">
          <a href="/" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
            ← Back to School Website
          </a>
        </div>
      </div>
    </div>
  )
}
