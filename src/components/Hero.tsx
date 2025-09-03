export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
            Fashion
            <span className="block">Portfolio</span>
          </h1>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Exploring the intersection of creativity, style, and storytelling through 
            visual narratives and contemporary fashion design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#portfolio" 
              className="px-8 py-3 bg-black text-white text-sm tracking-wide hover:bg-gray-800 transition-colors"
            >
              VIEW WORK
            </a>
            <a 
              href="/contact" 
              className="px-8 py-3 border border-black text-black text-sm tracking-wide hover:bg-black hover:text-white transition-colors"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
