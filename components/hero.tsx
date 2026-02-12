'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Phone, ArrowRight } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-12 sm:pt-20 pb-16 sm:pb-24">
      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-blue-100 rounded-full opacity-30 blur-3xl hidden md:block" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-50 rounded-full opacity-40 blur-3xl" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <motion.div variants={itemVariants}>
              <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
                Your Smile, Our Priority
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground max-w-md leading-relaxed"
            >
              Exceptional dental care with a personal touch. From routine cleanings to advanced cosmetic procedures, we&apos;re here to keep your smile healthy and beautiful.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <a href="#appointment">
                <Button className="w-full sm:w-auto gap-2 bg-primary hover:bg-primary/90 text-white text-base px-8 py-6">
                  Book Appointment
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <a href="tel:+12065550123">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto gap-2 border-primary text-primary hover:bg-blue-50 text-base px-8 py-6 bg-transparent"
                >
                  <Phone className="w-4 h-4" />
                  (206) 555-0123
                </Button>
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-8 pt-4">
              <div>
                <p className="text-2xl font-bold text-primary">25+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">10K+</p>
                <p className="text-sm text-muted-foreground">Happy Patients</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">4.9★</p>
                <p className="text-sm text-muted-foreground">Patient Rating</p>
              </div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            variants={itemVariants}
            className="relative h-full min-h-96 md:min-h-full rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-white rounded-full shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <p className="text-5xl mb-2">😁</p>
                  <p className="text-sm text-muted-foreground font-medium">Professional Care</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
