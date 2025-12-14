"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Loader2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { cn } from "@/lib/utils"
// import { mockSdk } from "@/lib/mockSdk" // Removed Mock SDK
import { staff } from "@/lib/sdk" // Import real SDK

interface LoginFormProps {
  variant?: "default" | "clean"
}

export function LoginForm({ variant = "default" }: LoginFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [step, setStep] = useState<"login" | "otp">("login")
  const [email, setEmail] = useState("")
  // const [otpEmail, setOtpEmail] = useState("") // Redundant with email state usually, but let's see logic

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const emailInput = formData.get("email") as string
    const passwordInput = formData.get("password") as string
    
    setEmail(emailInput)

    const requestData = {
        email: emailInput,
        password: passwordInput
    }

    try {
      staff.account.login({
        formData: requestData,
        onSuccess: (data: any) => {
             setIsLoading(false)
             if (data.status === "success" && data.message.includes("OTP")) {
                setStep("otp")
                // setOtpEmail(data.email) // If needed
             } else if (data.status === "success") {
                 router.push("/staff/dashboard")
             }
        },
        onError: (err: any) => {
            setIsLoading(false)
            setError(err.message || "Invalid credentials")
        }
      })
    } catch (err) {
        setIsLoading(false)
        setError("An unexpected error occurred")
    }
  }

  async function handleVerify(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const code = formData.get("code") as string

    const requestData = {
        email: email,
        code: code
    }

    try {
        staff.account.verifyLogin({
            formData: requestData,
            onSuccess: (data: any) => {
                setIsLoading(false)
                if (data.status === "success") {
                    router.push("/staff/dashboard")
                }
            },
            onError: (err: any) => {
                setIsLoading(false)
                setError(err.message || "Invalid OTP")
            }
        })
    } catch (err) {
        setIsLoading(false)
        setError("An unexpected error occurred")
    }
  }

  const wrapperClasses = variant === "clean" 
    ? "w-full max-w-md mx-auto" 
    : "w-full max-w-md mx-auto p-4 md:p-8"

  if (step === "otp") {
    return (
      <div className={wrapperClasses}>
         <Card className={cn(variant === "clean" ? "border-0 shadow-none bg-transparent" : "")}>
          <CardHeader className={cn(variant === "clean" ? "px-0" : "")}>
            <CardTitle className="text-2xl font-bold text-center text-dark-gray">Two-Factor Authentication</CardTitle>
            <CardDescription className="text-center text-gray-600">
              Enter the 8-digit code sent to your email
            </CardDescription>
          </CardHeader>
          <CardContent className={cn(variant === "clean" ? "px-0" : "")}>
            <form onSubmit={handleVerify} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <div className="space-y-2">
                <Label htmlFor="code">OTP Code</Label>
                <Input
                  id="code"
                  name="code"
                  placeholder="12345678"
                  type="text"
                  maxLength={8}
                  required
                  className="input-field text-center text-lg tracking-widest"
                  disabled={isLoading}
                />
              </div>
              <Button type="submit" className="w-full btn-primary" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  "Verify Login"
                )}
              </Button>
              <Button
                type="button"
                variant="ghost" 
                className="w-full text-gray-500"
                onClick={() => setStep("login")}
                disabled={isLoading}
              >
                Back to Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className={wrapperClasses}>
      <Card className={cn(variant === "clean" ? "border-0 shadow-none bg-transparent" : "")}>
        <CardHeader className={cn(variant === "clean" ? "px-0" : "")}>
          <CardTitle className="text-2xl font-bold text-dark-gray">Staff Login</CardTitle>
          <CardDescription className="text-gray-600">Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent className={cn(variant === "clean" ? "px-0" : "")}>
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="staff@cedarwood.edu"
                required
                className="input-field"
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="input-field pr-10"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-end">
                <a href="#" className="text-sm font-medium text-primary-blue hover:underline">
                    Forgot password?
                </a>
            </div>
            <Button type="submit" className="w-full btn-primary" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : (
                 <>
                  Sign In
                  <ArrowRight className="ml-2 h-4 w-4" />
                 </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
