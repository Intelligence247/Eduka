import { LoginForm } from "@/components/login-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Staff Login - Cedarwood International Academy",
  description: "Login to access your staff dashboard and manage school activities",
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Sidebar - Welcome Section */}
      <div className="hidden lg:flex w-1/3 bg-primary-blue flex-col justify-between p-8 text-white">
        <div className="flex flex-col items-center">
            {/* Logo placeholder - using Cedarwood C */}
             <div className="w-24 h-24 bg-white/10 rounded-lg flex items-center justify-center mb-8">
               <span className="text-4xl font-bold text-white">C</span>
             </div>
          
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">
                Welcome Back!
              </h1>
              <p className="text-white/80 text-lg mb-8 px-4">
                 Access the Cedarwood Staff Portal to manage your classes and students.
              </p>
            </div>
        </div>
        
        <div className="text-white/60 text-sm text-center">
          Copyright © Eduka.
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full lg:w-2/3 bg-light-gray flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6">
           <div className="lg:hidden text-center mb-8">
              {/* Mobile Logo */}
               <div className="w-16 h-16 bg-primary-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                 <span className="text-2xl font-bold text-white">C</span>
               </div>
               <h2 className="text-3xl font-bold text-dark-gray">Staff Portal</h2>
           </div>

           <div className="bg-white p-8 rounded-lg shadow-sm lg:bg-transparent lg:shadow-none lg:p-0">
                <h2 className="text-3xl font-bold text-dark-gray mb-8 hidden lg:block">
                    Login to Your Account
                </h2>
                <LoginForm variant="clean" /> 
           </div>
        </div>
      </div>
    </div>
  )
}
