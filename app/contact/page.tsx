'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react'
import Link from "next/link"

export default function EnhancedContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      // Here you would typically handle the form submission
      alert('Form submitted successfully!')
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-400 via-stone-300 to-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden max-w-4xl w-full">
        <div className="md:flex">
          <div className="md:w-1/2 p-8">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">Get in Touch</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input id="name" placeholder="Your name" className="w-full" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your@email.com" className="w-full" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" rows={4} className="w-full" required />
              </div>
              <Button type="submit" className="w-full group" disabled={isSubmitting}>
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>
          <div className="md:w-1/2 bg-gray-100 p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>contact@example.com</span>
                </div>
                <div className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>123 Main St, Anytown, USA 12345</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Follow Us</h2>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Facebook className="w-6 h-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Twitter className="w-6 h-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Instagram className="w-6 h-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Linkedin className="w-6 h-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}