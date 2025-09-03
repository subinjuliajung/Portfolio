import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'

export default function Home() {
  return (
    <div className="bg-white">
      <Navigation />
      <Hero />
      <Portfolio />
    </div>
  )
}
