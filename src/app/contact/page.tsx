import Navigation from '../../components/Navigation'
import ContactForm from '../../components/ContactForm'

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-light mb-8 tracking-tight">
              CONTACT
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ready to collaborate? Whether you're looking for fashion photography, 
              creative direction, or want to discuss a project, I'd love to hear from you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="font-medium mb-4">GET IN TOUCH</h3>
                <div className="space-y-3 text-gray-600">
                  <p>hello@yourname.com</p>
                  <p>+1 (555) 123-4567</p>
                  <p>New York, NY</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-4">FOLLOW</h3>
                <div className="space-y-3">
                  <a href="#" className="block text-gray-600 hover:text-black transition-colors">
                    Instagram
                  </a>
                  <a href="#" className="block text-gray-600 hover:text-black transition-colors">
                    Behance
                  </a>
                  <a href="#" className="block text-gray-600 hover:text-black transition-colors">
                    LinkedIn
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-4">SERVICES</h3>
                <div className="space-y-2 text-gray-600 text-sm">
                  <p>Fashion Photography</p>
                  <p>Editorial Shoots</p>
                  <p>Creative Direction</p>
                  <p>Brand Collaborations</p>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
