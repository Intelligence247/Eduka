// Mock SDK for Eduka Platform - Simulating educa-sdk behavior
// This simulates the staff.* API structure from the documentation

type CallbackParams<T> = {
  onSuccess?: (data: T) => void
  onError?: (error: any) => void
  params?: Record<string, any>
  formData?: any
}

// Mock data storage
const mockStorage = {
  isAuthenticated: false,
  requiresOTP: false,
  pendingEmail: null as string | null,
  currentUser: null as any,
}

// School API
const school = {
  schoolInfo: ({ onSuccess, onError }: CallbackParams<any>) => {
    setTimeout(() => {
      onSuccess?.({
        status: "success",
        message: "school info fetched",
        data: {
          name: "Cedarwood International Academy",
          motto: "Nurturing Excellence, Building Character",
          email: "info@cedarwood.edu",
          logo: "/generic-school-logo.png",
          about: "Premier K-12 institution providing world-class education from Crèche to Secondary School",
          year_established: 2001,
          address: {
            address: "15 Education Avenue, Victoria Island",
            country: "Nigeria",
            state: "Lagos",
            lga: "Lagos Island",
          },
          phone_number: "+234 800 123 4567",
        },
      })
    }, 500)
  },

  getSessions: ({ onSuccess, onError, params }: CallbackParams<any>) => {
    setTimeout(() => {
      const sessions = [
        { id: 1, title: "2024/2025 Session" },
        { id: 2, title: "2025/2026 Session" },
      ]

      if (params?.session_id) {
        const session = sessions.find((s) => s.id === params.session_id)
        if (session) {
          onSuccess?.({ status: "success", data: session })
        } else {
          onError?.({ status: "error", message: "Session not found" })
        }
      } else {
        onSuccess?.({ status: "success", data: sessions })
      }
    }, 300)
  },

  getTerms: ({ onSuccess, onError, params }: CallbackParams<any>) => {
    setTimeout(() => {
      const terms = [
        {
          id: 1,
          session: { id: 2, title: "2025/2026 Session" },
          title: "First Term",
          term: 1,
          start_date: "2025-09-22",
          end_date: "2025-12-21",
          number_of_weeks: 13,
        },
        {
          id: 2,
          session: { id: 2, title: "2025/2026 Session" },
          title: "Second Term",
          term: 2,
          start_date: "2026-01-12",
          end_date: "2026-04-10",
          number_of_weeks: 13,
        },
      ]

      if (params?.term_id) {
        const term = terms.find((t) => t.id === params.term_id)
        if (term) {
          onSuccess?.({ status: "success", data: term })
        } else {
          onError?.({ status: "error", message: "Term not found" })
        }
      } else {
        onSuccess?.({ status: "success", data: terms })
      }
    }, 300)
  },

  getEvents: ({ onSuccess, onError, params }: CallbackParams<any>) => {
    setTimeout(() => {
      const allEvents = [
        {
          id: 1,
          title: "Inter-House Sports Day",
          date: "2025-12-20",
          time: "08:00:00",
          venue: "School Sports Complex",
          status: "Upcoming",
          description: "Annual inter-house sports competition featuring athletics, relay races, and team games.",
        },
        {
          id: 2,
          title: "PTA Meeting",
          date: "2025-12-28",
          time: "15:00:00",
          venue: "School Auditorium",
          status: "Upcoming",
          description:
            "Parents-Teachers Association quarterly meeting to discuss student progress and school development.",
        },
        {
          id: 3,
          title: "Common Entrance Exam Prep Workshop",
          date: "2026-01-05",
          time: "09:00:00",
          venue: "Exam Hall",
          status: "Upcoming",
          description: "Intensive preparation workshop for students taking Common Entrance examinations.",
        },
        {
          id: 4,
          title: "Cultural Day Celebration",
          date: "2025-11-15",
          time: "10:00:00",
          venue: "School Grounds",
          status: "Past",
          description: "Annual celebration of Nigerian cultural heritage with traditional dances and exhibitions.",
        },
      ]

      let filteredEvents = allEvents
      if (params?.status) {
        if (params.status === "upcoming") {
          filteredEvents = allEvents.filter((e) => e.status === "Upcoming")
        } else if (params.status === "past") {
          filteredEvents = allEvents.filter((e) => e.status === "Past")
        }
      }

      if (params?.event_id) {
        const event = allEvents.find((e) => e.id === params.event_id)
        if (event) {
          onSuccess?.({ status: "success", data: event })
        } else {
          onError?.({ status: "error", message: "Invalid event parameter" })
        }
      } else {
        onSuccess?.({ status: "success", data: filteredEvents })
      }
    }, 300)
  },
}

// Account API
const account = {
  loginStatus: ({ onSuccess, onError }: CallbackParams<any>) => {
    setTimeout(() => {
      onSuccess?.({
        status: "success",
        authenticated: mockStorage.isAuthenticated,
      })
    }, 200)
  },

  login: ({ formData, onSuccess, onError }: CallbackParams<any>) => {
    setTimeout(() => {
      const { email, password } = formData

      // Simulate validation
      if (email === "staff@cedarwood.edu" && password === "password123") {
        // Simulate 2FA for this demo (50% chance)
        const needs2FA = true // Change to false to test direct login

        if (needs2FA) {
          mockStorage.requiresOTP = true
          mockStorage.pendingEmail = email
          onSuccess?.({
            status: "success",
            email: email,
            message: `OTP code has been sent to ${email}. It expires in 15 minutes`,
          })
        } else {
          mockStorage.isAuthenticated = true
          mockStorage.currentUser = {
            email,
            firstName: "Jane",
            lastName: "Foster",
            role: "English Teacher",
          }
          onSuccess?.({
            status: "success",
            message: "Login successful",
          })
        }
      } else {
        onError?.({
          status: "error",
          message: "Invalid login credentials.",
        })
      }
    }, 800)
  },

  verifyLogin: ({ formData, onSuccess, onError }: CallbackParams<any>) => {
    setTimeout(() => {
      const { email, code } = formData

      if (email === mockStorage.pendingEmail && code === "12345678") {
        mockStorage.isAuthenticated = true
        mockStorage.requiresOTP = false
        mockStorage.pendingEmail = null
        mockStorage.currentUser = {
          email,
          firstName: "Jane",
          middleName: "Mary",
          lastName: "Foster",
          staffId: "CWD@JMF001",
          role: "English Teacher",
          qualification: "MSc English",
          phone_number: "09011223344",
        }
        onSuccess?.({
          status: "success",
          message: "Login successful",
        })
      } else if (code !== "12345678") {
        onError?.({
          status: "error",
          message: "Invalid OTP code",
        })
      } else {
        onError?.({
          status: "error",
          message: "Invalid email address",
        })
      }
    }, 600)
  },

  getProfile: ({ onSuccess, onError }: CallbackParams<any>) => {
    setTimeout(() => {
      if (!mockStorage.isAuthenticated) {
        onError?.({
          detail: "Authentication credentials were not provided.",
          statusText: "Unauthorized",
          statusCode: 401,
        })
        return
      }

      onSuccess?.({
        status: "success",
        message: "request successful.",
        data: {
          title: "Mrs.",
          date_of_birth: "1992-07-07",
          gender: "female",
          firstName: "Jane",
          middleName: "Mary",
          lastName: "Foster",
          staffId: "CWD@JMF001",
          qualification: "MSc English",
          image: "/professional-woman-teacher.png",
          resume: null,
          classes_assigned: ["JSS 2A", "JSS 3B", "SSS 1A"],
          email: "jane.foster@cedarwood.edu",
          phone_number: "+234 901 123 3344",
          address: {
            address: "23, Admiralty Way, Lekki Phase 1",
            country: "Nigeria",
            state: "Lagos",
            lga: "Eti-Osa",
          },
          role: "English Language Teacher",
          salary: "250000.00",
          _2fa_enabled: true,
        },
      })
    }, 400)
  },

  logout: ({ onSuccess, onError }: CallbackParams<any>) => {
    setTimeout(() => {
      mockStorage.isAuthenticated = false
      mockStorage.currentUser = null
      mockStorage.requiresOTP = false
      mockStorage.pendingEmail = null
      onSuccess?.({
        status: "success",
        message: "Logout successful",
      })
    }, 300)
  },

  forgotPassword: ({ formData, onSuccess, onError }: CallbackParams<any>) => {
    setTimeout(() => {
      const { email } = formData

      if (email && email.includes("@")) {
        onSuccess?.({
          status: "success",
          message:
            "Password reset instructions has been sent to your email. Kindly ensure to check your spam folders as well.",
        })
      } else {
        onError?.({
          status: "error",
          message: "Invalid email address.",
        })
      }
    }, 600)
  },
}

// Export the mock SDK
export const staff = {
  school,
  account,
}
