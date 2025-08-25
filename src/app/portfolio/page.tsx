import Link from 'next/link';
import { ArrowRightIcon, StarIcon } from '@heroicons/react/24/outline';

export default function PortfolioPage() {
  const projects = [
    {
      title: 'Local Restaurant Website',
      category: 'Web Development',
      description: 'Modern, responsive website with online ordering system for a popular local restaurant.',
      features: ['Online ordering', 'Menu management', 'Mobile responsive', 'SEO optimized'],
      results: 'Increased online orders by 300%',
      image: '🍽️',
    },
    {
      title: 'Retail Store E-commerce',
      category: 'E-commerce',
      description: 'Complete e-commerce solution for a local retail store with inventory management.',
      features: ['Product catalog', 'Secure checkout', 'Inventory tracking', 'Analytics dashboard'],
      results: 'Expanded customer base by 150%',
      image: '🛍️',
    },
    {
      title: 'Professional Services Firm',
      category: 'IT Consulting',
      description: 'Digital transformation project including cloud migration and process automation.',
      features: ['Cloud infrastructure', 'Workflow automation', 'Security implementation', 'Staff training'],
      results: 'Reduced operational costs by 40%',
      image: '🏢',
    },
    {
      title: 'Healthcare Practice Management',
      category: 'System Integration',
      description: 'Integrated practice management system with patient portal and billing automation.',
      features: ['Patient portal', 'Appointment scheduling', 'Billing automation', 'HIPAA compliance'],
      results: 'Improved patient satisfaction by 85%',
      image: '🏥',
    },
    {
      title: 'Non-Profit Organization',
      category: 'Digital Strategy',
      description: 'Comprehensive digital strategy including website redesign and donor management system.',
      features: ['Donor portal', 'Event management', 'Social media integration', 'Analytics reporting'],
      results: 'Increased donations by 200%',
      image: '🤝',
    },
    {
      title: 'Manufacturing Company',
      category: 'Technical Support',
      description: 'Ongoing IT support and system optimization for a growing manufacturing company.',
      features: ['24/7 monitoring', 'Backup systems', 'Network security', 'Hardware management'],
      results: '99.9% system uptime achieved',
      image: '🏭',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Café Pacific',
      role: 'Owner',
      content: 'Mukilteo Technical Solutions transformed our business with their online ordering system. Our customers love the convenience, and our sales have increased dramatically.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      company: 'Chen & Associates',
      role: 'Managing Partner',
      content: 'The team at MTS helped us modernize our entire IT infrastructure. Their expertise and local support made the transition smooth and cost-effective.',
      rating: 5,
    },
    {
      name: 'Lisa Rodriguez',
      company: 'Community Health Clinic',
      role: 'Director',
      content: 'Professional, reliable, and always available when we need them. MTS has been instrumental in helping us serve our patients better.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Discover how we&apos;ve helped small businesses transform their operations and achieve remarkable results through innovative technical solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each project represents our commitment to delivering exceptional results and building lasting partnerships with our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="p-6">
                  <div className="text-4xl mb-4">{project.image}</div>
                  <div className="mb-2">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-green-800 font-semibold text-sm">
                      Result: {project.results}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with Mukilteo Technical Solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Success Process
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Every successful project follows our proven methodology, ensuring consistent results and client satisfaction.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Discovery & Planning</h3>
                    <p className="text-gray-300">We start by understanding your business goals, challenges, and requirements to create a tailored solution.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Design & Development</h3>
                    <p className="text-gray-300">Our team builds your solution using modern technologies and best practices, with regular updates and feedback.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Testing & Launch</h3>
                    <p className="text-gray-300">Thorough testing ensures everything works perfectly before we launch your solution to the world.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Support & Growth</h3>
                    <p className="text-gray-300">Ongoing support and optimization help you maximize the value of your investment and scale with your business.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-600 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-blue-100 mb-6">
                Let&apos;s discuss how we can help your business achieve similar results. Every project starts with a conversation about your goals and challenges.
              </p>
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center"
              >
                Schedule a Consultation
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Success Story Starts Here
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join the growing list of successful businesses that have transformed their operations with our technical solutions.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center"
          >
            Start Your Project
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
