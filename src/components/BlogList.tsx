'use client'

import Image from 'next/image'
import Link from 'next/link'

// Mock blog data - replace with database data later
const blogPosts = [
  {
    id: 1,
    title: 'The Evolution of Minimalist Fashion',
    excerpt: 'Exploring how less became more in contemporary fashion design and what it means for creative expression.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&h=600&fit=crop',
    date: '2024-01-15',
    readTime: '5 min read',
    slug: 'evolution-minimalist-fashion'
  },
  {
    id: 2,
    title: 'Behind the Scenes: Editorial Shoot Process',
    excerpt: 'A detailed look at the creative process behind our latest editorial series, from concept to final image.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    date: '2024-01-10',
    readTime: '8 min read',
    slug: 'editorial-shoot-process'
  },
  {
    id: 3,
    title: 'Sustainable Fashion Photography',
    excerpt: 'How we can make fashion photography more environmentally conscious without compromising artistic vision.',
    image: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=800&h=600&fit=crop',
    date: '2024-01-05',
    readTime: '6 min read',
    slug: 'sustainable-fashion-photography'
  }
]

export default function BlogList() {
  return (
    <div className="space-y-16">
      {blogPosts.map((post) => (
        <article key={post.id} className="group">
          <Link href={`/blog/${post.slug}`} className="block">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={600}
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-light leading-tight group-hover:text-gray-700 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="text-sm font-medium uppercase tracking-wide">
                  Read More →
                </div>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  )
}
