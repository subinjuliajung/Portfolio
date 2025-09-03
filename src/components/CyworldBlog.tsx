'use client'

import { useState } from 'react'
import Image from 'next/image'
import MusicPlayer from './MusicPlayer'

const blogPosts = [
  {
    id: 1,
    title: '🌸 My Latest Photoshoot Adventure',
    content: 'Today was such a magical day! Had an amazing editorial shoot in Hongdae. The models were absolutely stunning and the concept was so dreamy~ ✨',
    date: '2024-01-15',
    mood: '😊 Happy',
    weather: '☀️ Sunny',
    bgm: '♫ IU - Through the Night',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=300&h=200&fit=crop',
    comments: 12,
    likes: 89
  },
  {
    id: 2,
    title: '💭 Fashion Week Thoughts',
    content: 'Just got back from Seoul Fashion Week and my mind is blown! The creativity and artistry I witnessed... I\'m so inspired to push my own boundaries 🎨',
    date: '2024-01-10',
    mood: '✨ Inspired',
    weather: '🌧️ Rainy',
    bgm: '♫ NewJeans - Get Up',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop',
    comments: 24,
    likes: 156
  },
  {
    id: 3,
    title: '🌙 Late Night Editing Session',
    content: 'It\'s 3AM and I\'m still editing photos from yesterday\'s shoot... but when you love what you do, time doesn\'t matter right? 💜',
    date: '2024-01-05',
    mood: '🎯 Focused',
    weather: '🌙 Clear night',
    bgm: '♫ LoFi Hip Hop',
    image: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=300&h=200&fit=crop',
    comments: 8,
    likes: 67
  }
]

export default function CyworldBlog() {
  const [currentPost, setCurrentPost] = useState(0)

  return (
    <>
      <MusicPlayer />
      <div className="max-w-6xl mx-auto p-6">
      {/* Header Section */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 mb-6 shadow-lg border-4 border-pink-200">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full flex items-center justify-center text-3xl">
              👸🏻
            </div>
            <div>
              <h1 className="text-2xl font-bold text-purple-800">Fashion Diary ✨</h1>
              <p className="text-pink-600">Today: {new Date().toLocaleDateString('ko-KR')}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="bg-pink-100 px-4 py-2 rounded-full mb-2">
              <span className="text-pink-700 font-medium">🌟 Level 25 Fashion Creator</span>
            </div>
            <div className="flex space-x-4 text-sm text-gray-600">
              <span>👥 Friends: 1,247</span>
              <span>👀 Today: 89</span>
              <span>💌 Total: 12,456</span>
            </div>
          </div>
        </div>
        
        {/* Mini Navigation */}
        <div className="flex space-x-2">
          {['📝 Diary', '📸 Photos', '🎵 Music', '💝 Guestbook', '👥 Friends'].map((item, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0 
                  ? 'bg-pink-300 text-pink-800' 
                  : 'bg-white/60 text-gray-600 hover:bg-pink-100'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          {/* Profile Widget */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-pink-200">
            <h3 className="font-bold text-purple-800 mb-4">💖 About Me</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">🎂 Age:</span>
                <span className="text-pink-700">25</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">📍 Location:</span>
                <span className="text-pink-700">Seoul, KR</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">💼 Job:</span>
                <span className="text-pink-700">Fashion Photographer</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">💕 Status:</span>
                <span className="text-pink-700">Creating art ✨</span>
              </div>
            </div>
          </div>

          {/* Music Player */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-purple-200">
            <h3 className="font-bold text-purple-800 mb-4">🎵 Now Playing</h3>
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-4">
              <div className="text-sm text-gray-700 mb-2">♫ Currently listening to:</div>
              <div className="font-medium text-purple-700">NewJeans - Get Up</div>
              <div className="flex items-center mt-3 space-x-2">
                <div className="w-8 h-1 bg-pink-300 rounded"></div>
                <div className="w-4 h-1 bg-gray-200 rounded"></div>
                <div className="w-6 h-1 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>

          {/* Visitor Counter */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-blue-200">
            <h3 className="font-bold text-blue-800 mb-4">👀 Visitors</h3>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">12,456</div>
              <div className="text-sm text-gray-600">Total visits</div>
              <div className="text-lg font-semibold text-purple-600 mt-2">89</div>
              <div className="text-xs text-gray-500">Today's visits</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {blogPosts.map((post, index) => (
            <div key={post.id} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-pink-200 overflow-hidden">
              {/* Post Header */}
              <div className="bg-gradient-to-r from-pink-200 to-purple-200 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      F
                    </div>
                    <div>
                      <div className="font-semibold text-purple-800">{post.title}</div>
                      <div className="text-xs text-purple-600">{post.date}</div>
                    </div>
                  </div>
                  <div className="text-right text-xs text-purple-700">
                    <div>{post.mood}</div>
                    <div>{post.weather}</div>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed mb-4">{post.content}</p>
                    <div className="bg-purple-50 rounded-lg p-3 mb-4">
                      <div className="text-sm text-purple-700">{post.bgm}</div>
                    </div>
                  </div>
                  {post.image && (
                    <div className="w-32 h-24 relative rounded-lg overflow-hidden border-2 border-pink-200">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Post Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-pink-100">
                  <div className="flex space-x-4 text-sm">
                    <button className="flex items-center space-x-1 text-pink-600 hover:text-pink-700">
                      <span>💕</span>
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700">
                      <span>💬</span>
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-purple-600 hover:text-purple-700">
                      <span>📤</span>
                      <span>Share</span>
                    </button>
                  </div>
                  <div className="text-xs text-gray-500">#{post.id}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cute Footer */}
      <div className="text-center mt-8 p-6">
        <div className="text-4xl mb-2">🌸✨🎀</div>
        <div className="text-pink-600 font-medium">Thanks for visiting my diary! 💕</div>
        <div className="text-sm text-gray-500 mt-2">Made with love and lots of pink 🌸</div>
      </div>
      </div>
    </>
  )
}
