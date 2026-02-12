'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Sparkles, Zap, Heart, Shield, Smile, Check } from 'lucide-react'

const services = [
  {
    id: 1,
    icon: Smile,
    title: 'Preventive Care',
    description: 'Regular cleanings, exams, and X-rays to keep your teeth healthy and catch issues early.',
  },
  {
    id: 2,
    icon: Sparkles,
    title: 'Cosmetic Dentistry',
    description: 'Teeth whitening, veneers, and smile makeovers to enhance your natural beauty.',
  },
  {
    id: 3,
    icon: Zap,
    title: 'Root Canal Treatment',
    description: 'Advanced endodontic procedures to save your natural teeth with minimal discomfort.',
  },
  {
    id: 4,
    icon: Heart,
    title: 'Implant Dentistry',
    description: 'Permanent tooth replacement solutions that look and function like natural teeth.',
  },
  {
    id: 5,
    icon: Shield,
    title: 'Orthodontics',
    description: 'Braces and aligners to straighten your teeth and improve your bite.',
  },
  {
    id: 6,
    icon: Check,
    title: 'Emergency Care',
    description: 'Same-day treatment for tooth pain and urgent dental problems.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function Services() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Comprehensive Dental Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From routine care to advanced treatments, we offer everything needed for optimal oral health.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Card className="h-full p-6 sm:p-8 flex flex-col border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-lg text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className="mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-semibold">Learn more →</span>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
