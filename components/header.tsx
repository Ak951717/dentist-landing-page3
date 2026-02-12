'use client'

import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">BS</span>
            </div>
            <span className="font-playfair text-xl font-semibold text-foreground hidden sm:inline">
              Bright Smile
            </span>
          </div>

          {/* CTA Button */}
          <a href="#appointment" className="flex items-center gap-2">
            <Button className="gap-2 bg-primary hover:bg-primary/90 text-white">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Book Appointment</span>
              <span className="sm:hidden">Book</span>
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}
