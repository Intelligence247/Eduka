"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { staff } from "@/lib/mockSdk"
import { Eye, EyeOff, Loader2, AlertCircle } from "lucide-react"

export function LoginForm() {
  const router = useRouter()
  const [step, setStep] = useState<"login" | "otp">("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [otp, setOtp] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccessMessage("")
    setLoading(true)

    staff.account.login({
      formData: { email, password },
      onSuccess: (data) => {
        setLoading(false)

        // Check if OTP is required (email field in response)
        if (data.email) {
          setStep("otp")
          setSuccessMessage(data.message)
        } else {
          // Direct login success
          router.push("/staff/dashboard")
        }
      },
      onError: (error) => {
        setLoading(false)
        setError(error.message || "Login failed. Please try again.")
      },
    })
  }

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    staff.account.verifyLogin({
      formData: { email, code: otp },
      onSuccess: () => {
        setLoading(false)
        router.push("/staff/dashboard")
      },
      onError: (error) => {
        setLoading(false)
        setError(error.message || "OTP verification failed.")
      },
    })
  }

  if (step === "otp") {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-grey-200 p-8">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-grey-900 mb-2">Verify OTP</h3>
          <p className="text-sm text-grey-600">Enter the 8-digit code sent to {email}</p>
        </div>

        {successMessage && (
          <Alert className="mb-4 bg-success-50 border-success-600">
            <AlertDescription className="text-success-600">{successMessage}</AlertDescription>
          </Alert>
        )}

        {error && (
          <Alert className="mb-4 bg-error-50 border-error-600">
            <AlertCircle className="h-4 w-4 text-error-600" />
            <AlertDescription className="text-error-600">{error}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleVerifyOTP} className="space-y-4">
          <div>
            <Label htmlFor="otp">OTP Code</Label>
            <Input
              id="otp"
              type="text"
              placeholder="Enter 8-digit code"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={8}
              className="mt-1"
              required
            />
            <p className="mt-1 text-xs text-grey-500">Demo OTP: 12345678</p>
          </div>

          <Button type="submit" className="w-full" disabled={loading || otp.length !== 8}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Verify & Login
          </Button>

          <button
            type="button"
            onClick={() => {
              setStep("login")
              setOtp("")
              setError("")
              setSuccessMessage("")
            }}
            className="w-full text-sm text-grey-600 hover:text-grey-900"
          >
            ← Back to login
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-grey-200 p-8">
      {error && (
        <Alert className="mb-4 bg-error-50 border-error-600">
          <AlertCircle className="h-4 w-4 text-error-600" />
          <AlertDescription className="text-error-600">{error}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@cedarwood.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1"
            required
          />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <div className="relative mt-1">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-grey-500 hover:text-grey-700"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
          <p className="mt-1 text-xs text-grey-500">Demo: staff@cedarwood.edu / password123</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              className="h-4 w-4 text-primary-600 border-grey-300 rounded focus:ring-primary-500"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-grey-700">
              Remember me
            </label>
          </div>

          <a href="/forgot-password" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
            Forgot password?
          </a>
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Sign In
        </Button>
      </form>
    </div>
  )
}
