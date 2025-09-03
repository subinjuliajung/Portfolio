import Navigation from '@/components/Navigation'
import CyworldBlog from '@/components/CyworldBlog'

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
      <Navigation />
      <div className="pt-20">
        <CyworldBlog />
      </div>
    </div>
  )
}
