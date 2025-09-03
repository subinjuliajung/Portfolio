'use client'

import { useState, useEffect, useRef } from 'react'

interface Song {
  title: string
  artist: string
  url: string
}

const playlist: Song[] = [
  {
    title: "Kawaii Dreams",
    artist: "LoFi Cafe",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3" // You'll need to replace with actual music files
  },
  {
    title: "Pink Sunset", 
    artist: "Chill Beats",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3" // Add your music files to /public/music/
  },
  {
    title: "Tokyo Rain",
    artist: "Study Vibes",
    url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3" // Example: "/music/tokyo-rain.mp3"
  }
]

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(0)
  const [volume, setVolume] = useState(0.5)
  const [userInteracted, setUserInteracted] = useState(false)
  const [showPlayer, setShowPlayer] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = volume
    
    if (isPlaying && userInteracted) {
      audio.play().catch(console.error)
    } else {
      audio.pause()
    }
  }, [isPlaying, currentSong, volume, userInteracted])

  const togglePlay = () => {
    setUserInteracted(true)
    setIsPlaying(!isPlaying)
  }

  const nextSong = () => {
    setCurrentSong((prev) => (prev + 1) % playlist.length)
  }

  const prevSong = () => {
    setCurrentSong((prev) => (prev - 1 + playlist.length) % playlist.length)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value))
  }

  // Auto-show player after user scrolls (indicates interaction)
  useEffect(() => {
    const handleScroll = () => {
      if (!userInteracted) {
        setUserInteracted(true)
        setShowPlayer(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [userInteracted])

  return (
    <>
      {/* Welcome Music Popup */}
      {!userInteracted && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 max-w-sm mx-4 text-center shadow-2xl border-4 border-pink-300">
            <div className="text-6xl mb-4">🎵</div>
            <h3 className="text-xl font-bold text-purple-800 mb-2">Welcome to my diary!</h3>
            <p className="text-gray-600 mb-6">Would you like to listen to some music while browsing? 💕</p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setUserInteracted(true)
                  setIsPlaying(true)
                  setShowPlayer(true)
                }}
                className="flex-1 bg-gradient-to-r from-pink-400 to-purple-400 text-white px-6 py-3 rounded-full font-medium hover:from-pink-500 hover:to-purple-500 transition-colors"
              >
                🎶 Yes, play music!
              </button>
              <button
                onClick={() => setUserInteracted(true)}
                className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-300 transition-colors"
              >
                No thanks
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Music Player Widget */}
      {(showPlayer || userInteracted) && (
        <div className="fixed bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border-2 border-pink-200 z-40 min-w-80">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-bold text-purple-800 text-sm">🎵 Now Playing</h4>
            <button
              onClick={() => setShowPlayer(false)}
              className="text-gray-400 hover:text-gray-600 text-sm"
            >
              ✕
            </button>
          </div>
          
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-3 mb-3">
            <div className="font-medium text-purple-700 text-sm mb-1">
              {playlist[currentSong].title}
            </div>
            <div className="text-xs text-gray-600">
              by {playlist[currentSong].artist}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center space-x-3 mb-3">
            <button
              onClick={prevSong}
              className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center hover:bg-pink-300 transition-colors"
            >
              ⏮️
            </button>
            <button
              onClick={togglePlay}
              className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white hover:from-pink-500 hover:to-purple-500 transition-colors"
            >
              {isPlaying ? '⏸️' : '▶️'}
            </button>
            <button
              onClick={nextSong}
              className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center hover:bg-pink-300 transition-colors"
            >
              ⏭️
            </button>
          </div>

          {/* Volume Control */}
          <div className="flex items-center space-x-2">
            <span className="text-xs">🔊</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="flex-1 h-1 bg-pink-200 rounded-lg appearance-none"
              style={{
                background: `linear-gradient(to right, rgb(251 113 133) 0%, rgb(251 113 133) ${volume * 100}%, rgb(252 231 243) ${volume * 100}%, rgb(252 231 243) 100%)`
              }}
            />
          </div>

          {/* Progress Bar (visual only for now) */}
          <div className="mt-3 bg-pink-100 rounded-full h-1">
            <div 
              className="bg-gradient-to-r from-pink-400 to-purple-400 h-full rounded-full transition-all duration-1000"
              style={{ width: isPlaying ? '60%' : '0%' }}
            />
          </div>

          <audio
            ref={audioRef}
            src={playlist[currentSong].url}
            loop
            onEnded={nextSong}
          />
        </div>
      )}

      {/* Mini Music Button (when player is hidden) */}
      {userInteracted && !showPlayer && (
        <button
          onClick={() => setShowPlayer(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white shadow-lg hover:from-pink-500 hover:to-purple-500 transition-colors z-40"
        >
          🎵
        </button>
      )}
    </>
  )
}
