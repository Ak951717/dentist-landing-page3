'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Calendar, Mail, Phone, User, MessageSquare, CheckCircle } from 'lucide-react'

const appointmentSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().regex(/^\+?1?\d{10,}$/, 'Valid phone number is required'),
  date: z.string().min(1, 'Preferred date is required'),
  message: z.string().optional(),
})

type AppointmentFormData = z.infer<typeof appointmentSchema>

export function AppointmentForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  })

  const onSubmit = async (data: AppointmentFormData) => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
        reset()
        setTimeout(() => setIsSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="appointment" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div>
              <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Schedule Your Visit
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Book an appointment at your convenience. Our team will confirm your preferred time and answer any questions you may have.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a href="tel:+12065550123" className="text-primary hover:underline">
                    (206) 555-0123
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a href="mailto:hello@brightsmile.com" className="text-primary hover:underline">
                    hello@brightsmile.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                  <p className="text-muted-foreground">Mon-Fri: 8 AM - 6 PM</p>
                  <p className="text-muted-foreground">Sat: 9 AM - 2 PM</p>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0 p-6">
              <div className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Flexible Scheduling</p>
                  <p className="text-sm text-muted-foreground">
                    Same-day appointments available. We&apos;re committed to accommodating your schedule.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-6 text-center mb-6"
                >
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <p className="text-green-900 font-semibold">Appointment request submitted!</p>
                  <p className="text-green-700 text-sm mt-2">We&apos;ll contact you shortly to confirm.</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2 font-semibold">
                    <User className="w-4 h-4 text-muted-foreground" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    {...register('name')}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className="px-4 py-2.5 border-border"
                  />
                  {errors.name && (
                    <p id="name-error" className="text-destructive text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2 font-semibold">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    {...register('email')}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className="px-4 py-2.5 border-border"
                  />
                  {errors.email && (
                    <p id="email-error" className="text-destructive text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2 font-semibold">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    placeholder="(206) 555-0123"
                    {...register('phone')}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    className="px-4 py-2.5 border-border"
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-destructive text-sm">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <Label htmlFor="date" className="flex items-center gap-2 font-semibold">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    Preferred Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    {...register('date')}
                    aria-invalid={!!errors.date}
                    aria-describedby={errors.date ? 'date-error' : undefined}
                    className="px-4 py-2.5 border-border"
                  />
                  {errors.date && (
                    <p id="date-error" className="text-destructive text-sm">
                      {errors.date.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2 font-semibold">
                    <MessageSquare className="w-4 h-4 text-muted-foreground" />
                    Additional Notes
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Any specific concerns or treatment requests?"
                    {...register('message')}
                    rows={4}
                    className="px-4 py-2.5 border-border resize-none"
                    aria-describedby="message-hint"
                  />
                  <p id="message-hint" className="text-xs text-muted-foreground">
                    Optional field
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-2.5 font-semibold"
                >
                  {isLoading ? 'Submitting...' : 'Book Appointment'}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We respect your privacy. Your information is secure.
                </p>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
