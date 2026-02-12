'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export function Location() {
  return (
    <section className="py-16 sm:py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Visit Us Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of Seattle, easily accessible and conveniently located.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Address Card */}
            <Card className="p-6 border-border">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground text-sm">
                    123 Dental Lane
                    <br />
                    Seattle, WA 98101
                  </p>
                  <a
                    href="https://maps.google.com/?q=123+Dental+Lane+Seattle+WA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm font-semibold mt-2 inline-block hover:underline"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </Card>

            {/* Phone Card */}
            <Card className="p-6 border-border">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                  <a href="tel:+12065550123" className="text-primary font-semibold hover:underline">
                    (206) 555-0123
                  </a>
                  <p className="text-muted-foreground text-sm mt-1">Available for emergencies</p>
                </div>
              </div>
            </Card>

            {/* Email Card */}
            <Card className="p-6 border-border">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <a href="mailto:hello@brightsmile.com" className="text-primary font-semibold hover:underline">
                    hello@brightsmile.com
                  </a>
                  <p className="text-muted-foreground text-sm mt-1">We respond within 24 hours</p>
                </div>
              </div>
            </Card>

            {/* Hours Card */}
            <Card className="p-6 border-border">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">Office Hours</h3>
                  <div className="space-y-1 text-muted-foreground text-sm">
                    <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-lg h-96 lg:h-full min-h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.2638897891347!2d-122.33207!3d47.60621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490154c10c1d0fb%3A0x1234567890!2s123%20Dental%20Lane%2C%20Seattle%2C%20WA%2098101!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bright Smile Dental Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
