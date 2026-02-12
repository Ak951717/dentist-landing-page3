'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Gift, Zap } from 'lucide-react'

export function Offer() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden border-0 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
            <div className="p-8 sm:p-12 lg:p-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Gift className="w-6 h-6" aria-hidden="true" />
                    <span className="text-sm font-semibold uppercase tracking-wider opacity-90">
                      Special Offer
                    </span>
                  </div>

                  <div>
                    <h2 className="font-playfair text-4xl sm:text-5xl font-bold mb-3">
                      Free Initial Consultation
                    </h2>
                    <p className="text-lg opacity-90 leading-relaxed">
                      Start your journey to a brighter smile today. Our comprehensive consultation is completely free and includes a full exam, X-rays, and personalized treatment plan.
                    </p>
                  </div>

                  <a href="#appointment">
                    <Button className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-8 gap-2">
                      <Zap className="w-4 h-4" />
                      Claim Your Free Consultation
                    </Button>
                  </a>

                  <p className="text-sm opacity-75">Valid for new patients. Limited time offer.</p>
                </div>

                {/* Benefits */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-6">What&apos;s Included:</h3>
                  {[
                    'Comprehensive oral exam',
                    'Digital X-rays',
                    'Professional cleaning',
                    'Personalized treatment plan',
                    'Insurance verification',
                    'Free teeth whitening kit*',
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-white mt-1 flex-shrink-0">✓</span>
                      <span className="text-base">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
