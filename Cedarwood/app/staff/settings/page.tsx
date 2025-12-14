import { SettingsContent } from "@/components/settings/settings-content"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-dark-gray">Settings</h1>
        <p className="text-gray-500 mt-1">Manage your account preferences</p>
      </div>
      <SettingsContent />
    </div>
  )
}
