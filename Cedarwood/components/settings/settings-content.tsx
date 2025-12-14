"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { staff } from "@/lib/sdk"
import { Loader2, CheckCircle2 } from "lucide-react"

export function SettingsContent() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    const formData = new FormData(e.currentTarget)
    const oldPassword = formData.get("old_password") as string
    const newPassword = formData.get("new_password") as string
    const confirmPassword = formData.get("confirm_password") as string

    if (newPassword !== confirmPassword) {
      setError("New passwords do not match")
      setLoading(false)
      return
    }

    if (newPassword.length < 8) {
      setError("New password must be at least 8 characters")
      setLoading(false)
      return
    }

    staff.account.changePassword({
        formData: {
            old_password: oldPassword,
            new_password: newPassword
        },
        onSuccess: (data: any) => {
            if(data.status === "success") {
                setSuccess(true)
                // Optional: Reset form
                e.currentTarget.reset()
            } else {
                setError(data.message || "Failed to change password")
            }
            setLoading(false)
        },
        onError: (err: any) => {
            console.error("Change password error", err)
            // Handle specific error messages if possible, else generic
             setError(err?.message || "An error occurred while changing password")
            setLoading(false)
        }
    })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Security Settings</CardTitle>
          <CardDescription>
            Update your password and manage your account security.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
            <div className="space-y-2">
              <Label htmlFor="old_password">Current Password</Label>
              <Input
                id="old_password"
                name="old_password"
                type="password"
                required
                placeholder="Enter your current password"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="new_password">New Password</Label>
              <Input
                id="new_password"
                name="new_password"
                type="password"
                required
                placeholder="Enter new password (min. 8 chars)"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm_password">Confirm New Password</Label>
              <Input
                id="confirm_password"
                name="confirm_password"
                type="password"
                required
                placeholder="Confirm new password"
              />
            </div>

            {error && (
              <div className="text-sm text-red-500 font-medium p-2 bg-red-50 rounded border border-red-100">
                {error}
              </div>
            )}

            {success && (
              <div className="flex items-center gap-2 text-sm text-green-600 font-medium p-2 bg-green-50 rounded border border-green-100">
                <CheckCircle2 className="h-4 w-4" />
                Password changed successfully!
              </div>
            )}

            <Button type="submit" disabled={loading} className="w-full bg-primary-blue hover:bg-primary-blue/90 text-white">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Updating...
                </>
              ) : (
                "Change Password"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
