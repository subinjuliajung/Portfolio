'use client'

import { useState } from 'react'
import Image from 'next/image'

// Mock data - replace with your actual data
const portfolioItems = [
  {
    id: 1,
    title: 'Editorial Series',
    category: 'editorial',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=1000',
    description: 'Contemporary fashion editorial exploring minimalism'
  },
  {
    id: 2,
    title: 'Street Style',
    category: 'street',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600',
    description: 'Urban fashion captured in natural settings'
  },
  {
    id: 3,
    title: 'Studio Portraits',
    category: 'studio',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800',
    description: 'Professional fashion photography in controlled environments'
  },
  {
    id: 4,
    title: 'Avant-garde Collection',
    category: 'editorial',
    image: 'https://images.unsplash.com/photo-1582142306909-195724d75881?w=800&h=1000',
    description: 'Experimental designs pushing creative boundaries'
  },
  {
    id: 5,
    title: 'Lifestyle Shoot',
    category: 'lifestyle',
    image: 'https://images.unsplash.com/photo-1566479179817-0fc5b9b0b3c1?w=800&h=600',
    description: 'Fashion integrated with everyday moments'
  },
  {
    id: 6,
    title: 'High Fashion',
    category: 'editorial',
    image: 'https://images.unsplash.com/photo-1594736797933-d0cc3b8527e4?w=600&h=900',
    description: 'Luxury fashion and couture photography'
  }
]

const categories = ['all', 'editorial', 'street', 'studio', 'lifestyle']

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-center mb-12 tracking-tight">
          SELECTED WORKS
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-sm tracking-wide uppercase transition-colors ${
                activeCategory === category 
                  ? 'bg-black text-white' 
                  : 'border border-gray-300 hover:border-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={600}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 uppercase tracking-wide mb-2">
                  {item.category}
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
