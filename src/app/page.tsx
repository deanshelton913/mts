import Link from 'next/link';
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function HomePage() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
      icon: '🌐',
    },
    {
      title: 'IT Consulting',
      description: 'Strategic technology planning and implementation for your business.',
      icon: '💡',
    },
    {
      title: 'Technical Support',
      description: 'Ongoing support and maintenance to keep your systems running smoothly.',
      icon: '🔧',
    },
    {
      title: 'Digital Strategy',
      description: 'Comprehensive digital transformation and online presence optimization.',
      icon: '📈',
    },
  ];

  const benefits = [
    '20+ years of industry experience',
    'Small business focused solutions',
    'Competitive pricing',
    'Local support and service',
    'Modern technology stack',
    'Ongoing maintenance and support',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Technical Solutions for
              <span className="block text-blue-200">Small Business Success</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Helping small businesses thrive in the digital age with professional technical solutions and 20+ years of industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 inline-flex items-center justify-center"
              >
                Get Started Today
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Technical Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From web development to IT consulting, we provide the technical foundation your business needs to succeed online.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Mukilteo Technical Solutions?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With over two decades of experience in the technology industry, we understand the unique challenges small businesses face. Our solutions are designed to be scalable, reliable, and cost-effective.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-blue-100 mb-6">
                Let's discuss how we can help your business establish a strong online presence and leverage technology for growth.
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
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your Business Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Don't let technology hold your business back. Partner with experts who understand your needs and can deliver results.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
          >
            Get Your Free Consultation
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
