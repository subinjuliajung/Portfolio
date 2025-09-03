# 🎵 Music Setup for Cyworld Blog

## How to Add Music Files

1. **Download royalty-free music** from:
   - YouTube Audio Library (free)
   - Pixabay Music (free)
   - Freesound.org (free with attribution)
   - Epidemic Sound (paid)

2. **Convert to web-friendly formats**:
   - MP3 (most compatible)
   - OGG (smaller files)
   - M4A (good quality)

3. **Add files to your project**:
   ```
   /public/music/
   ├── kawaii-dreams.mp3
   ├── pink-sunset.mp3
   └── tokyo-rain.mp3
   ```

4. **Update the playlist** in `src/components/MusicPlayer.tsx`:
   ```javascript
   const playlist: Song[] = [
     {
       title: "Kawaii Dreams",
       artist: "LoFi Cafe",
       url: "/music/kawaii-dreams.mp3"  // <-- Update this path
     },
     // ... more songs
   ]
   ```

## Current Features ✨

- **Welcome popup** asks permission to play music (avoids browser autoplay blocks)
- **Floating music player** with play/pause/skip/volume controls
- **Playlist support** - cycles through multiple songs
- **Minimizable player** - can hide/show as needed
- **Auto-start** when user interacts with the page

## Music Recommendations

For the Cyworld aesthetic, try:
- LoFi hip hop beats
- Kawaii electronic music
- Chill K-pop instrumentals
- Soft piano melodies
- Anime-style background music

## Testing

The current setup uses placeholder audio files. Once you add real music files, the player will work with full audio playback!
