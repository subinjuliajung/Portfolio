'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            YOUR NAME
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/portfolio" className="text-sm hover:text-gray-600 transition-colors">
              PORTFOLIO
            </Link>
            <Link href="/blog" className="text-sm hover:text-gray-600 transition-colors">
              BLOG
            </Link>
            <Link href="/contact" className="text-sm hover:text-gray-600 transition-colors">
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            <div className="w-6 h-5 relative">
              <span className={`absolute block h-0.5 w-6 bg-black transform transition duration-500 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'}`} />
              <span className={`absolute block h-0.5 w-6 bg-black transform transition duration-500 ease-in-out ${isOpen ? 'opacity-0' : 'translate-y-2'}`} />
              <span className={`absolute block h-0.5 w-6 bg-black transform transition duration-500 ease-in-out ${isOpen ? '-rotate-45 translate-y-2' : 'translate-y-4'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4 pt-4">
              <Link href="/portfolio" className="text-sm hover:text-gray-600 transition-colors">
                PORTFOLIO
              </Link>
              <Link href="/blog" className="text-sm hover:text-gray-600 transition-colors">
                BLOG
              </Link>
              <Link href="/contact" className="text-sm hover:text-gray-600 transition-colors">
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
