import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from "lucide-react"
import axios from "axios"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      // Replace with your actual Formspree endpoint
      const formspreeEndpoint = "https://formspree.io/f/mrbqkejb"

      await axios.post(formspreeEndpoint, formData, {
        headers: {
          Accept: "application/json",
        },
      })

      setSubmitSuccess(true)
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitError("There was a problem sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Get In Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl text-white font-semibold mb-2">Contact Information</h3>
            <p className="text-gray-400 mb-6">Feel free to reach out to me through any of these channels</p>

            <div className="space-y-6">
            <div className="grid grid-cols-[40px_1fr] items-start gap-3">
                <div className="bg-gray-800 p-3 rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5 text-blue-500" />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white break-all">orias.franxine@gmail.com</p>
                </div>
              </div>

              <div className="grid grid-cols-[40px_1fr] items-start gap-3">
                <div className="bg-gray-800 p-3 rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5 text-blue-500" />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white break-all">09684522678</p>
                </div>
              </div>

              <div className="grid grid-cols-[40px_1fr] items-start gap-3">
                <div className="bg-gray-800 p-3 rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-blue-500" />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white break-all">Tala Caloocan City</p>
                </div>
              </div>

              <div className="pt-6">
                <p className="text-gray-400 mb-4">Connect with me on social media</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Xine003"
                    className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/franxine-orias/"
                    className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/x._.ine/"
                    className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl text-white font-semibold mb-2">Send Me a Message</h3>
            <p className="text-gray-400 mb-6">I'll get back to you as soon as possible</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-gray-400">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 focus:border-blue-500 rounded-md p-2 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-gray-400">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 focus:border-blue-500 rounded-md p-2 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm text-gray-400">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 focus:border-blue-500 rounded-md p-2 text-white"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-gray-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 focus:border-blue-500 rounded-md p-2 min-h-[120px] text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </span>
                )}
              </button>

              {submitSuccess && (
                <p className="text-green-500 text-center mt-4">Your message has been sent successfully!</p>
              )}

              {submitError && <p className="text-red-500 text-center mt-4">{submitError}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
